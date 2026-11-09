# mapp-template

**Стартовая точка для разработчиков мини-приложений Mapphub.**

Документация: https://mapphub.github.io/docs/

## Быстрый старт

1. GitHub → **Use this template** → репозиторий `app-<ваш-id>`
2. В `mappmanifest.json` укажите `id`, `name`, `version`, `author`
3. UI: `index.html`, `app.js`, `style.css`
4. На каждой HTML-странице: `<script src="./miniapps-bridge.js"></script>`
5. Своя логика API (по желанию): файлы `api/<category>/<action>.js`
6. Push в `main` → CI соберёт `app.zip`

## API-модули

```
api/
  notes/
    save.js    → MiniApps.notes('save', { text })
    list.js    → MiniApps.notes('list', {})
```

```js
// api/notes/save.js
export default async function save(ctx) {
  const text = ctx.params?.text ?? '';
  // на хосте доступны платформенные хелперы через ctx.host
  return { ok: true, length: text.length };
}
```

- **В WebView** bridge подгружает модуль и выполняет его.
- **По сети** тот же URL: `POST /api/notes/save` на LAN-сервер оболочки.

Подробнее: https://mapphub.github.io/docs/api/miniapps.md
