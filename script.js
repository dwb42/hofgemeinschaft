  /* Copy-Buttons neben E-Mail und Telefonnummer.

     Bewusst als Delegation am document, nicht als Schleife über die
     vorhandenen Buttons: das Infoblatt wird auf der Hauptseite erst zur
     Laufzeit als Modal eingefügt. Buttons, die es beim Laden noch nicht
     gab, funktionieren so trotzdem. */
  document.addEventListener('click', function (e) {
    var btn = e.target && e.target.closest ? e.target.closest('.copy-btn') : null;
    if (!btn) return;

    var value = btn.getAttribute('data-copy');
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).catch(function () {});
    }

    btn.classList.add('copied');
    btn.setAttribute('aria-label', btn.getAttribute('data-label-copied'));
    clearTimeout(btn._copyTimer);
    btn._copyTimer = setTimeout(function () {
      btn.classList.remove('copied');
      btn.setAttribute('aria-label', btn.getAttribute('data-label-default'));
    }, 1600);
  });

  /* Öffnet das Infoblatt als Modal über der Hauptseite, ohne die Seite zu
     verlassen. Die URL wechselt trotzdem auf bauernhof-gesucht.html, sodass
     sie kopiert und geteilt werden kann. Schließen führt per History zurück.
     Ohne JavaScript, bei geblocktem fetch (file://) oder bei einem Fehler
     folgt der Link ganz normal der Seite. */
  (function () {
    var trigger = document.querySelector('a[data-sheet]');
    if (!trigger || !window.fetch || !window.DOMParser || !history.pushState) return;

    var href = trigger.getAttribute('href');
    var host = null;
    var lastFocus = null;
    var cached = null;

    function focusables() {
      return host ? host.querySelectorAll('a[href], button, [tabindex]:not([tabindex="-1"])') : [];
    }

    function onKey(e) {
      if (e.key === 'Escape') { e.preventDefault(); close(); return; }
      if (e.key !== 'Tab') return;
      var f = focusables();
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }

    function mount(sheet) {
      lastFocus = document.activeElement;
      host = document.createElement('div');
      host.innerHTML = '<div class="backdrop"></div><div class="sheet-scroll"></div>';
      sheet.setAttribute('role', 'dialog');
      sheet.setAttribute('aria-modal', 'true');
      host.querySelector('.sheet-scroll').appendChild(sheet);
      document.body.appendChild(host);
      document.body.classList.add('sheet-open');

      host.querySelector('.backdrop').addEventListener('click', close);
      host.querySelector('.sheet-scroll').addEventListener('click', function (e) {
        if (e.target === this) close();
      });
      var x = sheet.querySelector('.sheet-close');
      if (x) {
        x.addEventListener('click', function (e) { e.preventDefault(); close(); });
        x.focus();
      }
      document.addEventListener('keydown', onKey);
    }

    function unmount() {
      if (!host) return;
      document.removeEventListener('keydown', onKey);
      host.parentNode.removeChild(host);
      host = null;
      document.body.classList.remove('sheet-open');
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    function open() {
      if (host) return;
      var load = cached
        ? Promise.resolve(cached)
        : fetch(href, { credentials: 'same-origin' }).then(function (r) {
            if (!r.ok) throw new Error(r.status);
            return r.text();
          }).then(function (html) { cached = html; return html; });

      load.then(function (html) {
        var sheet = new DOMParser().parseFromString(html, 'text/html').querySelector('.sheet');
        if (!sheet) throw new Error('Infoblatt nicht gefunden');
        history.pushState({ sheet: 1 }, '', href);
        mount(document.importNode(sheet, true));
      }).catch(function () { location.href = href; });
    }

    function close() {
      if (!host) return;
      if (history.state && history.state.sheet) history.back();
      else { unmount(); history.replaceState(null, '', location.pathname.replace(/[^/]*$/, '')); }
    }

    trigger.addEventListener('click', function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      e.preventDefault();
      open();
    });

    window.addEventListener('popstate', function () {
      if (host) unmount();
    });
  })();
