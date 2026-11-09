(function () {
  try {
    if (window.MiniApps && MiniApps.shell) {
      MiniApps.shell('setChrome', { topBar: false, bottomBar: false });
    }
  } catch (e) {}
  var input = document.getElementById('server');
  var log = document.getElementById('log');
  if (MiniApps.getServerBase) input.value = MiniApps.getServerBase() || '';
  document.getElementById('save').onclick = function () {
    MiniApps.setServerBase(input.value.trim());
    log.textContent = 'server = ' + (MiniApps.getServerBase() || '(empty)');
  };
  log.textContent = 'bridge ok';
})();
