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

### nginx → backend コンテナ間の DNS 名前解決失敗によるサービス障害 (2026/07/08)
 
- **問題**: サイトにアクセス不可 (約44時間継続)
- **トリガー**: AWS コンソールを確認したところ、障害発生時刻に **EC2 Simplified Auto Recovery (success)** アラームが発生していた。
  ユーザーが手動で再起動したのではなく、AWS がホストレベルの障害を検知して自動的にインスタンスを復旧させたことが
  今回の障害の発端だった。単純な OS 再起動よりもさらに深いインフラレベルのイベントであり、その過程で
  Docker のネットワーク/DNS の状態が壊れた可能性が高いと考えられる。
---
 
#### 📌 背景知識: nginx の DNS 名前解決の仕組み(なぜこの問題が起こり得るのか)
 
nginx は `proxy_pass http://backend:8080;` のように、コンテナ名を**変数を使わず直接**指定すると、
**設定を読み込む時点(=プロセスが起動する瞬間)に一度だけ** `backend` という名前を IP に変換(DNS 解決)し、
メモリにキャッシュしてしまう。それ以降は再解決を行わない(resolver を明示的に設定しない限り)。
 
この特性により、理論上は以下のような問題が起こり得る:
 
- nginx が **backend より先に**起動すると、最初の DNS 解決時点で backend がまだ存在せず、名前解決自体が失敗
  → 設定読み込み失敗によりマスタープロセスが終了 (`Exited 255`)
- backend が再起動して IP が変わっても、nginx はキャッシュ済みの古い IP を使い続ける(再解決しない)
つまり理論上は **db → backend → nginx の起動順序が保証される必要がある**。
 
> 補足: `docker compose up` で直接起動する場合は、`depends_on` の設定に従ってこの順序が保証される。
> 一方、サーバーや Docker デーモン自体が再起動され、`restart: always` ポリシーによって各コンテナが
> 個別に復旧するケースでは、この復旧経路は compose の `depends_on` の依存関係グラフを参照しないため、
> 順序保証が弱くなる可能性がある。
> (`restart: always` は「落ちたら再起動する」ことのみを保証し、「順序」は保証しない)
 
---
 
#### 🔍 実際の障害分析: 今回の本当の原因は何だったのか
 
最初は上記の背景知識に基づき、**「起動順序の問題(backend より nginx が先に起動したことによる最初の名前解決失敗)」**と推測した。
 
しかしログを確認すると:
 
```
約44時間前 EC2 Simplified Auto Recovery 発生(ホスト障害 → AWS による自動復旧)
→ Docker 自動起動
→ frontend 起動成功 / backend 起動成功 / db 起動成功
→ nginx のみ起動失敗: host not found in upstream "backend"
→ restart: always により再起動を試み続けたが、44時間にわたり同じエラーで失敗を繰り返す
→ docker compose down && up -d --build 実行後、正常復旧
```
 
**backend はすでに正常に起動(Up)していたにもかかわらず、nginx は44時間ずっと名前を解決できなかった。**
単純な起動順序の問題であれば、backend が起動した直後の nginx の再起動時に復旧していたはずだが、そうならなかった。
 
→ **結論**: 単純な起動順序の問題ではなく、「コンテナ名から相手を探し出す Docker 内部の DNS システム」自体が
EC2 Auto Recovery(=インフラレベルの再起動)の後に壊れたまま固まってしまったことが、実際の原因と推測される。
 
**なぜ `docker compose down && up` で復旧したのか**: `down` は壊れていたネットワーク(DNS マッピング情報を含む)を
完全に削除し、`up` はそのネットワークを最初から新規作成する。この過程でコンテナの DNS 情報も新たに正しく登録されるため、
`docker compose` で再起動すると(インフラ再起動による自動復旧とは異なり)ネットワーク自体がクリーンな状態で再生成され、正常化する。
 
---
 
- **対応(暫定復旧)**: `docker compose down && docker compose up -d --build`
  → ネットワークを完全に削除・再生成して正常化
- **最大の問題点**: 障害発生時刻(EC2 Auto Recovery)と実際に気づいた時刻の間に **約44時間の空白**があったこと
- **再発防止策**:
  1. Uptime Kuma 等でサイトのダウンをリアルタイムに検知し、通知を受け取る → 再発時に即座に対応(最優先)
  2. nginx.conf に `resolver 127.0.0.11` + 変数方式の `proxy_pass` を適用予定
     (DNS 解決に失敗しても nginx プロセス自体は落ちず、再解決を試み続けるようにする)
  3. backend に healthcheck を追加し、nginx の `depends_on` に `condition: service_healthy` を適用予定
  4. AWS CloudWatch で EC2 Auto Recovery / StatusCheckFailed アラームを SNS 等と連携し、
     インフラレベルのイベント発生時にも即座に気づけるようにする

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