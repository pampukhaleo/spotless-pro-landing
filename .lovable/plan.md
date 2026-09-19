# Публикация сайта на GitHub Pages

## Что уже настроено (проверено через GitHub API)

- GitHub Pages включён: источник — ветка `gh-pages`, домен `spotlessprohome.co.uk`, HTTPS активен (сертификат до 29.11.2026)
- В `package.json` есть команда `deploy`: очистка → сборка → публикация папки `dist` в ветку `gh-pages`
- `rimraf` и `gh-pages` уже установлены как dev-зависимости
- `vite.config.ts` имеет `base: "/"` — правильно для кастомного домена

## Чего не хватает

### 1. Файл `public/CNAME` (критично)

В репозитории нет файла CNAME. Без него при следующем деплое GitHub Pages **сбросит привязку домена** `spotlessprohome.co.uk`, и сайт отвалится.

Действие: создать `public/CNAME` с одной строкой:
```text
spotlessprohome.co.uk
```
Этот файл автоматически попадёт в `dist` при сборке и в ветку `gh-pages` при деплое.

### 2. Скрипт `clean` на Windows

Сейчас: `"clean": "rm -rf dist"` — работает только в Git Bash. Раз `rimraf` уже установлен, заменить на:
```json
"clean": "rimraf dist"
```
Тогда `npm run deploy` будет работать из любого терминала (cmd, PowerShell, Git Bash, кнопка в WebStorm).

## Как деплоить после этих правок

После того как изменения сайта готовы (через Lovable или локально), в Git Bash:

```bash
git pull origin main          # забрать последние изменения с GitHub
npm run deploy                # сборка + публикация на GitHub Pages
```

`npm run deploy` сам создаёт/обновляет ветку `gh-pages` и пушит её на GitHub. Сайт на https://spotlessprohome.co.uk обновится через 1–2 минуты.

Важно: изменения из Lovable сначала автоматически попадают в `main` на GitHub, поэтому перед деплоем всегда делать `git pull origin main`.

## Технические детали

- Файл: `public/CNAME` (новый), `package.json` (правка одного скрипта)
- Маршрутизация на Pages не требует `404.html` — в приложении единственная страница `/`
