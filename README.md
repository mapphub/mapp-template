# mapp-template

## API

```js
await MiniApp.apps('list', {})
await MiniApp.notify('toast', { text: 'hi' })
await MiniApp.net('send', { text: 'msg' })
```

`MiniApp` — прокси: `MiniApp.<category>(action, params)`.
Алиас `MiniApps` сохранён для совместимости.

## Структура

```
mapp/
  mapp.manifest.json
  icon.svg
  public/
```

Документация: https://mapphub.github.io/docs/
