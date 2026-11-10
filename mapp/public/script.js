function boot() {
  const status = document.getElementById('status');
  const btn = document.getElementById('btn');
  if (typeof MiniApps === 'undefined') {
    status.textContent = 'Откройте в оболочке Mapphub';
    return;
  }
  status.textContent = 'MiniApps готов';
  try {
    MiniApps.shell && MiniApps.shell.setChrome({ title: 'Hello', topBar: true, bottomBar: false });
  } catch (_) {}
  btn.onclick = async () => {
    try {
      await MiniApps.notify.toast({ text: 'Hello from template' });
    } catch (e) {
      status.textContent = String(e.message || e);
    }
  };
}
if (window.MiniApps) boot();
else window.addEventListener('miniapps-ready', boot);
