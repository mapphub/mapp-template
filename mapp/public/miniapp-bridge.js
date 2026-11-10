/** Canonical MiniApp proxy — same protocol as shell mapp-bridge.js */
(function (g) {
  if (g.MiniApp && g.MiniApp.__mapp) return;
  var seq = 1, pending = {}, appId = g.__MAPP_APP_ID || 'app';
  g.addEventListener('message', function (ev) {
    var d = ev.data;
    if (!d || d.type !== 'mapp-bridge-result') return;
    var p = pending[d.id]; if (!p) return; delete pending[d.id];
    if (d.error) p.reject(new Error(d.error)); else p.resolve(d.result);
  });
  function call(category, action, params) {
    return new Promise(function (resolve, reject) {
      var id = 't' + seq++;
      pending[id] = { resolve: resolve, reject: reject };
      try {
        g.parent.postMessage({ type: 'mapp-bridge', id: id, category: category, action: action, params: params || {}, appId: appId }, '*');
      } catch (e) { delete pending[id]; reject(e); }
      setTimeout(function () { if (pending[id]) { delete pending[id]; reject(new Error('MiniApp timeout')); } }, 20000);
    });
  }
  function cat(name) {
    return function (action, params) {
      if (typeof action === 'object' && action !== null) { params = action; action = 'default'; }
      return call(name, String(action || 'default'), params || {});
    };
  }
  var api = { __mapp: true, call: call, apps: cat('apps'), hub: cat('hub'), shell: cat('shell'), net: cat('net'), share: cat('share'), db: cat('db'), notify: cat('notify'), qr: cat('qr') };
  g.MiniApp = api;
  g.MiniApps = api;
  try { g.dispatchEvent(new Event('miniapp-ready')); g.dispatchEvent(new Event('miniapps-ready')); } catch (_) {}
})(typeof window !== 'undefined' ? window : globalThis);
