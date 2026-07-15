# Komayan Portfolio Site

コマやんの「作品展」として作るポートフォリオサイトです。

## Directory

```text
.
├── public/
│   └── media/
│       ├── hero/        # Hero背景動画やOG画像
│       └── works/       # 作品画像・動画
├── src/
│   ├── data/
│   │   └── works.ts     # 作品と制作中リスト
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── tokens.css   # 色・余白・共通トークン
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Works

作品追加は `src/data/works.ts` に1件追加し、必要な画像や動画を `public/media/works/` に置く方針です。

## Commands

```bash
npm install
npm run dev
npm run build
```
