# ヤンバンサンフェ <img src="./public/yangban_logo.jpeg" alt="양반상회 ロゴ" height="32" style="vertical-align: middle;" />

#### Vue3 + Go + PostgreSQL を用いた手作り韓国海苔スナック専門ショッピングモール

---

## 🔗 リンク

**デプロイ**: https://yangbansanghoe.com  
**GitHub**: https://github.com/ouusagi/Yangban-Sanghoe

---

## 📑 目次

- [🏪 プロジェクト概要](#-プロジェクト概要)
- [💻 開発概要](#-開発概要)
- [🛠 技術スタック](#-技術スタック)
- [🧠 技術選定理由](#-技術選定理由)
- [✨ 主な機能](#-主な機能)
- [⚠️ トラブルシューティング](#️-トラブルシューティング)
- [📂 ディレクトリ構成](#-ディレクトリ構成)
- [🚀 実行方法](#-実行方法)

---

## 🏪 プロジェクト概要

**YangBanSangHoe（ヤンバンサンフェ）** は、先祖代々から親しまれてきた韓国海苔スナック（キムブガク）の味を  
現代に蘇らせることを目指した、手作りスナック専門のショッピングモールです。

実際に営業中の店舗のオンライン販売チャネル構築を目的として開発し、  
フロントエンドからバックエンド、デプロイまでの全工程を一人で実装しました。

---

## 💻 開発概要

```
1. 開発目的
- 実店舗のオンライン販売チャネルの構築
- フロントエンド・バックエンド・デプロイまでのフルスタック開発経験
- Docker を活用したコンテナベースのデプロイ経験

2. 開発期間
📅 2026.03.12 ~ 2026.05.13（約2ヶ月）

3. 担当範囲
- 企画・設計・UI/UX デザイン
- フロントエンド実装（Vue3）
- バックエンド実装（Go）
- DB 設計・管理（PostgreSQL）
- Docker コンテナ化および AWS EC2 デプロイ
- ドメイン接続および SSL 設定
- Naver・Google 検索エンジン登録
```

---

## 🛠 技術スタック

### Frontend 🎨
> - HTML5 / CSS3
> - TypeScript
> - Vue 3
> - Vue Router
> - Axios
> - Vite
> - Pinia

### Backend ⚙️
> - Go
> - PostgreSQL

### Infra / DevOps 🚀
> - Docker / Docker Compose
> - Nginx
> - AWS EC2
> - AWS Route53
> - Let's Encrypt (SSL)

---

## 🧠 技術選定理由

- **Vue3**
  - `<template>`、`<script>`、`<style>` の構造が明確に分離されており、HTML に慣れた環境でも学習コストが低い
  - コンポーネント単位の開発により、再利用性の高い設計が可能

- **Go**
  - コンパイル言語のため実行速度が速く、軽量なバイナリを生成できる
  - シンプルな文法で API サーバーを素早く構築できる

- **Docker**
  - ローカル環境とサーバー環境の差異なく、同一環境での実行が可能
  - フロントエンド・バックエンド・DB をコンテナで分離し、独立して管理できる

- **AWS EC2**
  - サーバーを自ら構成・デプロイする経験を積むために選択
  - Nginx リバースプロキシによるトラフィック管理

---

## ✨ 主な機能

### 🛍 ショッピング機能
- ホームページ（メインバナーおよび商品紹介）
- 商品一覧ページ
- 商品詳細ページ

### 📖 ブランドコンテンツ
- ブランドストーリーページ
- レシピページ

---

## ⚠️ トラブルシューティング

### Docker BuildKit Provenance 無限待機問題

- **問題**: `docker compose up --build` 実行時に `[frontend] resolving provenance for metadata file` の段階で無限待機状態になりフリーズ
- **原因**: EC2 環境に buildx がインストールされていない状態で、Docker BuildKit がビルド出処メタデータ（provenance）を記録しようとしてフリーズ
- **解決**: `DOCKER_BUILDKIT=0` 環境変数で旧来のビルド方式を使用し、provenance 記録ステップをスキップ

```bash
DOCKER_BUILDKIT=0 docker compose up --build -d
```

---

### EC2 メモリ不足による Go ビルドの遅延

- **問題**: Go バックエンドのビルド時に t3.micro 環境でビルドが非常に遅くなる、またはフリーズする現象が発生
- **原因**: Swap 領域がなく、メモリ不足時にビルドプロセスが停止してしまう
- **解決**: 2GB の Swap ファイルを作成し、メモリ不足の問題を解消

```bash
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

---

## 📂 ディレクトリ構成

```
yangban
├─ Dockerfile
├─ README.md
├─ README_JP.md
├─ backend
│  ├─ Dockerfile
│  ├─ cmd
│  │  └─ main.go
│  ├─ go.mod
│  └─ go.sum
├─ docker-compose.yml
├─ index.html
├─ nginx-frontend.conf
├─ nginx.conf
├─ package-lock.json
├─ package.json
├─ public
│  ├─ yangban_logo.jpeg
│  └─ yangban_logo_wap.png
├─ src
│  ├─ App.vue
│  ├─ api
│  ├─ assets
│  ├─ components
│  │  ├─ Cardbox.vue
│  │  └─ common
│  │     ├─ Footer.vue
│  │     └─ Header.vue
│  ├─ main.ts
│  ├─ router
│  │  └─ index.ts
│  ├─ stores
│  │  └─ product.js
│  ├─ style.css
│  ├─ views
│  │  ├─ BrandStory.vue
│  │  ├─ Home.vue
│  │  ├─ ProductDetail.vue
│  │  ├─ ProductList.vue
│  │  └─ Recipe.vue
│  └─ vite-env.d.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
```

---

## 🚀 実行方法

```bash
# パッケージインストールおよび開発サーバー起動
npm install
npm run dev

# Docker で実行
DOCKER_BUILDKIT=0 docker compose up --build -d
```