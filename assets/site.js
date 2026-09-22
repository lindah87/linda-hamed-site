/* lindahamed.com · shared behaviour
   One implementation of everything that appears on more than one page.
   Each block is a no-op when its element is absent, so pages opt in by markup. */
(function () {
  'use strict';
  var doc = document.documentElement, body = document.body;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ── one scroll handler, batched to a frame ─────────────────────────── */
  var nav = $('.nav'), backTop = $('.back-top'), bar = $('.progress span');
  var darkBands = $$('section.on-dark, footer.on-dark');
  var lastY = scrollY, queued = false;

  function onFrame() {
    queued = false;
    var y = scrollY, vh = innerHeight;

    if (nav) {
      nav.classList.toggle('is-scrolled', y > 40);
      if (Math.abs(y - lastY) > 6) { nav.classList.toggle('is-hidden', y > lastY && y > 160); lastY = y; }
      if (y <= 160) nav.classList.remove('is-hidden');
    }
    if (backTop) backTop.classList.toggle('is-visible', y > 500);
    if (bar) {
      var max = doc.scrollHeight - vh;
      bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, Math.max(0, y / max)) : 0).toFixed(4) + ')';
    }
    /* is a navy band under the top edge? progress track + cursor invert */
    var dark = false;
    for (var i = 0; i < darkBands.length && !dark; i++) {
      var r = darkBands[i].getBoundingClientRect();
      dark = r.top <= 3 && r.bottom > 3;
    }
    body.classList.toggle('on-dark-top', dark);
    document.dispatchEvent(new CustomEvent('site:scroll'));
  }
  function schedule() { if (!queued) { queued = true; requestAnimationFrame(onFrame); } }
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule, { passive: true });
  onFrame();

  if (backTop) backTop.addEventListener('click', function () {
    scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    var target = $('#main') || body; target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true });
  });

  /* ── cursor dot + halo, one pointer listener ─────────────────────────── */
  var dot = $('.cursor'), halo = $('.halo');
  if (finePointer && !reduce && (dot || halo)) {
    var tx = 60, ty = 18, hx = 60, hy = 18;
    addEventListener('pointermove', function (e) {
      if (dot) {
        body.classList.add('cursor-live');
        dot.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY + 'px) translate(-50%,-50%)';
      }
      tx = e.clientX / innerWidth * 100; ty = e.clientY / innerHeight * 100;
    }, { passive: true });
    if (halo) (function loop() {
      hx += (tx - hx) * 0.085; hy += (ty - hy) * 0.085;
      halo.style.setProperty('--mx', hx.toFixed(2) + '%');
      halo.style.setProperty('--my', hy.toFixed(2) + '%');
      requestAnimationFrame(loop);
    })();
  }

  /* ── reveal on scroll, siblings staggered ────────────────────────────── */
  var reveals = $$('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var sibs = $$(':scope > .reveal', en.target.parentNode);
        en.target.style.transitionDelay = Math.min(sibs.indexOf(en.target), 5) * 0.07 + 's';
        en.target.classList.add('is-in');
        io.unobserve(en.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ── ledger: ticker + visibility, one key for the whole site ─────────── */
  var ledger = $('.ledger'), run = $('.ledger-run');
  var toggle = $('[data-ledger-toggle]'), hide = $('[data-ledger-hide]');
  var KEY = 'lh-ledger';
  function setLedger(on) {
    body.classList.toggle('ledger-off', !on);
    if (toggle) toggle.setAttribute('aria-pressed', String(on));
    if (ledger) ledger.inert = !on;
    try { localStorage.setItem(KEY, on ? '1' : '0'); } catch (e) {}
    schedule();
  }
  try { if (localStorage.getItem(KEY) === '0') setLedger(false); } catch (e) {}
  if (toggle) toggle.addEventListener('click', function () { setLedger(body.classList.contains('ledger-off')); });
  if (hide) hide.addEventListener('click', function () { setLedger(false); });

  if (run) {
    /* items are authored in the page; the copy is duplicated for a seamless loop
       and hidden from assistive tech so the list is read once */
    var clone = run.innerHTML;
    run.insertAdjacentHTML('beforeend', clone.replace(/<span/g, '<span aria-hidden="true"'));
    if (!reduce) {
      var off = 0, half = 0, last = performance.now(), paused = false;
      var measure = function () { half = run.scrollWidth / 2; };
      measure(); addEventListener('resize', measure);
      ledger.addEventListener('pointerenter', function () { paused = true; });
      ledger.addEventListener('pointerleave', function () { paused = false; });
      (function tick(now) {
        var dt = now - last; last = now;
        if (!paused && half && !body.classList.contains('ledger-off')) {
          off -= dt * 0.032; if (-off >= half) off += half;
          run.style.transform = 'translateX(' + off.toFixed(2) + 'px)';
        }
        requestAnimationFrame(tick);
      })(last);
    }
  }
})();
