# mapp-template

**Стартовая точка для разработчиков мини-приложений Mapphub.**

Официальный шаблон: скопируйте через **Use this template** или форкните, заполните `mappmanifest.json` и публикуйте.

Документация: https://mapphub.github.io/docs/

## Быстрый старт

1. GitHub → **Use this template** → создайте репозиторий `app-<ваш-id>`
2. В `mappmanifest.json` укажите `id`, `name`, `version`, `author` (ваш GitHub login)
3. Правите `index.html` / `app.js` / `style.css`
4. На каждой HTML-странице подключайте `<script src="./miniapps-bridge.js"></script>`
5. Push в `main` → CI соберёт `app.zip` (Release) и при `"web": true` — GitHub Pages

## Чего нет

- Нет `+server.js` и серверных роутов в пакете
- Данные — `MiniApps.fs`, оболочка — `MiniApps.shell`, LAN — `MiniApps.share` / `MiniApps.ws`

## Манифест (кратко)

```json
{
  "id": "my-app",
  "name": "My App",
  "version": "0.1.0",
  "author": "your-github-login",
  "web": true,
  "routes": { "root": "/", "app": "/index.html" }
}
```

Каталог платформы: https://mapphub.github.io/market/catalog.json
