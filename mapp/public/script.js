function boot() {
  var status = document.getElementById('status');
  var btn = document.getElementById('btn');
  var M = window.MiniApp || window.MiniApps;
  if (!M) {
    status.textContent = 'Откройте в оболочке Mapphub';
    return;
  }
  status.textContent = 'MiniApp готов';
  try {
    M.shell('setChrome', { title: 'Hello', topBar: true, bottomBar: false });
  } catch (_) {}
  btn.onclick = async function () {
    try {
      await M.notify('toast', { text: 'Hello from template' });
    } catch (e) {
      status.textContent = String(e.message || e);
    }
  };
}
if (window.MiniApp || window.MiniApps) boot();
else {
  window.addEventListener('miniapp-ready', boot);
  window.addEventListener('miniapps-ready', boot);
}
