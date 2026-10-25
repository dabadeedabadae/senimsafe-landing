# SenimSafe

Минималистичный лендинг для родителей и близких. Next.js App Router, React, TypeScript. Самостоятельный проект, без зависимости от trackerschool.

## Локальный запуск

```sh
pnpm install
pnpm dev
```

## Vercel

Импортируйте этот репозиторий в Vercel:

- Framework Preset: Next.js
- Root Directory: `./` (корень, не landing)
- Install Command: `pnpm install --frozen-lockfile`
- Build Command: `pnpm build`
- Output Directory: по умолчанию

Docker, база данных и отдельный сервер не нужны.

Необязательные переменные окружения:

- `NEXT_PUBLIC_ANDROID_URL` — HTTPS-ссылка на APK или официальную страницу скачивания.
- `NEXT_PUBLIC_CONNECT_URL` — HTTPS-ссылка для подключения.

При пустых переменных кнопка установки ведёт в инструкцию. После изменения переменных на Vercel нужен Redeploy.

## Страницы

- `/` — описание, скриншот, возможности, подключение и контакты.
- `/guide` — подробная инструкция и FAQ.

Контакты в `app/page.tsx` — примеры: перед публикацией замените на реальные.

Скриншоты `public/project-map.jpg` и `public/project-geofences.jpg` сняты в локальной веб-панели trackerschool с демонстрационными данными. Логотип и палитра взяты из исходного проекта.

Шрифт: системный -apple-system, BlinkMacSystemFont, Segoe UI, Roboto. Размеры: главный заголовок 32px, разделы 20px, основной текст 14–16px.

## Проверки

```sh
pnpm build
pnpm typecheck
```
