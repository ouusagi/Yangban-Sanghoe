# 양반상회 <img src="./public/yangban_logo.jpeg" alt="양반상회 로고" height="32" style="vertical-align: middle;" />

#### Vue3 + Go + PostgreSQL을 활용한 수제 부각·튀각 전문 쇼핑몰 웹사이트

---

## 🔗 링크

**배포 주소**: https://yangbansanghoe.com  
**GitHub**: https://github.com/your-username/Yangban-Sanghoe

---

## 📑 목차

- [🏪 프로젝트 개요](#-프로젝트-개요)
- [💻 개발 개요](#-개발-개요)
- [🛠 기술 스택](#-기술-스택)
- [🧠 기술 선정 이유](#-기술-선정-이유)
- [✨ 주요 기능](#-주요-기능)
- [⚠️ 트러블슈팅](#️-트러블슈팅)
- [📂 디렉토리 구조](#-디렉토리-구조)
- [🚀 실행 방법](#-실행-방법)

---

## 🏪 프로젝트 개요

**양반상회**는 우리 조상들이 대대로 즐겨 먹던 김부각의 맛을 현대에 되살리고자 시작된  
수제 부각·튀각 전문 쇼핑몰 웹사이트입니다.

실제 운영 중인 업체의 온라인 판매 채널 구축을 목적으로 개발하였으며,  
프론트엔드부터 백엔드, 배포까지 전 과정을 직접 구현하였습니다.

---

## 💻 개발 개요

```
1. 개발 목적
- 실제 운영 중인 오프라인 업체의 온라인 판매 채널 구축
- 프론트엔드, 백엔드, 배포까지 풀스택 개발 경험
- Docker를 활용한 컨테이너 기반 배포 경험

2. 개발 기간
📅 2026.03.12 ~ 2026.05.13 (약 2개월)

3. 담당 범위
- 기획 · 설계 · UI/UX 디자인
- 프론트엔드 구현 (Vue3)
- 백엔드 구현 (Go)
- DB 설계 및 관리 (PostgreSQL)
- Docker 컨테이너화 및 AWS EC2 배포
- 도메인 연결 및 SSL 설정
- 네이버 · 구글 검색엔진 등록
```

---

## 🛠 기술 스택

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

## 🧠 기술 선정 이유

- **Vue3**
  - `<template>`, `<script>`, `<style>` 구조가 명확하게 분리되어 있어 HTML에 익숙한 환경에서 러닝커브가 낮음
  - 컴포넌트 단위 개발로 재사용성 높은 구조 설계 가능

- **Go**
  - 컴파일 언어로 실행 속도가 빠르고 가벼운 바이너리 생성
  - 간결한 문법으로 빠른 API 서버 구축 가능

- **Docker**
  - 로컬 환경과 서버 환경의 차이 없이 동일한 환경에서 실행 가능
  - 프론트엔드, 백엔드, DB를 컨테이너로 분리하여 독립적으로 관리

- **AWS EC2**
  - 직접 서버를 구성하고 배포하는 경험을 위해 선택
  - Nginx 리버스 프록시를 통한 트래픽 관리

---

## ✨ 주요 기능

### 🛍 쇼핑 기능
- 홈 페이지 (메인 배너 및 상품 소개)
- 상품 목록 페이지
- 상품 상세 페이지

### 📖 브랜드 콘텐츠
- 브랜드 스토리 페이지
- 레시피 페이지

---

## ⚠️ 트러블슈팅

### Docker BuildKit Provenance 무한 대기 문제

- **문제**: `docker compose up --build` 실행 시 `[frontend] resolving provenance for metadata file` 단계에서 무한 대기 상태로 멈춤
- **원인**: EC2 환경에 buildx가 설치되어 있지 않은데, Docker BuildKit이 빌드 출처 메타데이터(provenance)를 기록하려다 멈춰버림
- **해결**: `DOCKER_BUILDKIT=0` 환경변수로 구버전 빌드 방식을 사용하여 provenance 기록 단계를 건너뜀

```bash
DOCKER_BUILDKIT=0 docker compose up --build -d
```

---

### EC2 메모리 부족으로 인한 Go 빌드 지연

- **문제**: Go 백엔드 빌드 시 t3.micro 환경에서 빌드가 매우 느리거나 멈추는 현상 발생
- **원인**: Swap 공간이 없어 메모리 부족 시 빌드 프로세스가 중단됨
- **해결**: 2GB Swap 파일을 생성하여 메모리 부족 문제 해결

```bash
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

---

## 📂 디렉토리 구조

```
yangban
├─ Dockerfile
├─ README.md
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

## 🚀 실행 방법

```bash
# 패키지 설치 및 개발 서버 실행
npm install
npm run dev

# Docker로 실행
DOCKER_BUILDKIT=0 docker compose up --build -d
```