# 양반상회 <img src="./public/yangban_logo.jpeg" alt="양반상회 로고" height="32" style="vertical-align: middle;" />

#### Vue3 + Go + PostgreSQL을 활용한 수제 부각·튀각 전문 쇼핑몰 웹사이트

---

## 🔗 링크

**배포 주소**: https://yangbansanghoe.com  
**GitHub**: https://github.com/ouusagi/Yangban-Sanghoe

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

### nginx → backend 컨테이너 DNS 해석 실패로 인한 서비스 장애 (2026/07/08)
 
- **문제**: 사이트 접속 불가 (약 44시간 지속)
- **트리거**: AWS 콘솔 확인 결과, 장애 시작 시점에 **EC2 Simplified Auto Recovery (success)** 알람 발생.
  사용자가 수동으로 재부팅한 것이 아니라, AWS가 호스트 레벨 장애를 감지하여 자동으로 인스턴스를 복구시킨 것이
  이번 장애의 시작점이었음. 단순 OS 재부팅보다 더 깊은 인프라 레벨의 이벤트로, 그 과정에서
  Docker 네트워크/DNS 상태가 꼬였을 가능성이 더 높은 상황이었던 것으로 보임.
---
 
#### 📌 배경 지식: nginx의 DNS 조회 원리 (왜 이런 문제가 생길 수 있는지)
 
nginx는 `proxy_pass http://backend:8080;` 처럼 컨테이너 이름을 **변수 없이 직접** 쓰면,
**설정을 로드하는 시점(=프로세스가 시작되는 순간)에 딱 한 번** `backend`라는 이름을 IP로 변환(DNS 조회)해서
메모리에 캐싱해버린다. 이후로는 재조회를 하지 않는다 (resolver를 명시적으로 설정하지 않는 한).
 
이 특성 때문에 이론적으로는 아래 문제가 생길 수 있다:
 
- nginx가 **backend보다 먼저** 뜨면, 최초 DNS 조회 시점에 backend가 아직 없어 조회 자체가 실패
  → 설정 로드 실패로 마스터 프로세스 종료 (`Exited 255`)
- backend가 재시작되어 IP가 바뀌어도, nginx는 이미 캐싱된 옛날 IP를 계속 사용 (재조회 안 함)
즉 이론상으로는 **db → backend → nginx 순서가 보장되어야** 이 문제를 피할 수 있다.
 
> 참고: `docker compose up`으로 직접 올릴 때는 `depends_on` 설정에 따라 이 순서가 보장된다.
> 반면 서버/Docker 데몬 자체가 재부팅되어 `restart: always` 정책으로 컨테이너들이 각자 복구되는 경우,
> 이 복구 경로는 compose의 `depends_on` 그래프를 참조하지 않기 때문에 순서 보장이 약해질 수 있다.
> (`restart: always`는 "죽으면 다시 켠다"만 보장할 뿐 "순서"는 보장하지 않음)
 
---
 
#### 🔍 실제 사고 분석: 그래서 이번엔 뭐가 원인이었나
 
처음엔 위 배경지식대로 **"순서 문제(backend보다 nginx가 먼저 떠서 생긴 최초 조회 실패)"**로 추정했다.
 
하지만 로그를 확인해보니:
 
```
약 44시간 전 EC2 Simplified Auto Recovery 발생 (호스트 장애 → AWS 자동 복구)
→ Docker 자동 시작
→ frontend 시작 성공 / backend 시작 성공 / db 시작 성공
→ nginx만 시작 실패: host not found in upstream "backend"
→ restart: always로 재시작 계속 시도했으나 44시간 내내 동일하게 실패 반복
→ docker compose down && up -d --build 실행 후 정상 복구
```
 
**backend는 이미 정상 기동(Up) 상태였는데도 nginx는 44시간 내내 이름을 못 찾았다.**
단순 순서 문제였다면 backend가 뜬 직후 nginx가 재시도할 때 금방 복구됐어야 하는데, 그러지 않았다.
 
→ **결론**: 단순 시작 순서 문제가 아니라, "컨테이너 이름으로 상대를 찾아주는 Docker 내부 DNS 시스템" 자체가
EC2 Auto Recovery(=인프라 레벨 재시작) 이후 고장 난 채로 굳어버린 것이 실제 원인으로 추정된다.
 
**왜 `docker compose down && up`으로 고쳐졌는가**: `down`은 고장 나 있던 네트워크(DNS 매핑 정보 포함)를
완전히 삭제하고, `up`은 그 네트워크를 처음부터 새로 만든다. 이 과정에서 컨테이너들의 DNS 정보도 새로 정상 등록되기 때문에
`docker compose`로 재기동하면 (인프라 재시작 자동 복구와 달리) 네트워크 자체가 깨끗한 상태로 재생성되며 정상화된다.
 
---
 
- **해결 (임시 복구)**: `docker compose down && docker compose up -d --build`
  → 네트워크를 통째로 삭제 후 재생성하여 정상화
- **가장 큰 문제**: 장애 발생 시점(EC2 Auto Recovery)과 실제 인지 시점 사이에 **약 44시간의 공백**이 있었음
- **재발 방지**:
  1. Uptime Kuma 등으로 사이트 다운 실시간 감지 + 알림 → 재발 시 즉시 대응 (최우선)
  2. nginx.conf에 `resolver 127.0.0.11` + 변수 방식 `proxy_pass` 적용 예정
     (DNS 조회 실패해도 nginx 프로세스 자체는 죽지 않고 계속 재조회하도록)
  3. backend에 healthcheck 추가 + nginx의 `depends_on`에 `condition: service_healthy` 적용 예정
  4. AWS CloudWatch에서 EC2 Auto Recovery / StatusCheckFailed 알람을 SNS 등으로 연동하여,
     인프라 레벨 이벤트 발생 시에도 즉시 인지할 수 있도록 조치

<!-- ### nginx → backend 컨테이너 DNS 해석 실패로 인한 서비스 장애 (2026/07/08)1
- **문제**: 사이트 접속 불가
- **원인**: 서버(또는 Docker) 재시작 과정에서 Docker 네트워크 정보가 꼬여 nginx가 backend 컨테이너명을 DNS로 해석하지 못함
- **원인 추측**: nginx는 최초 1회 IP를 받아 메모리에 캐싱해 두는데 서버가 재부팅 되는 과정에서 nginx가 backend보다 먼저 떠서 최초 
DNS 조회를 하는 시점에 backend가 아직 없어서 애초에 조회 자체가 실패한 채로 캐싱(또는 워커 기동 실패)되고, 이후로 재시도를 안 하니까 계속 못 찾음 (backend는 재시작 시 새로운 IP가 생성될 수 있음)
즉. db → backend → nginx 순서가 보장되어야함
- **주의**: `restart: always`는 "죽으면 다시 켠다"만 보장할 뿐 "순서"는 보장하지 않음. 서버/Docker 데몬 재부팅 시엔 compose의 `depends_on`도 순서 보장이 약해질 수 있음
- **해결**: `docker compose` 재기동을 통한 네트워크 재생성 [`docker compose`로 재기동 시엔 순서가 보장됨](임시 복구)
- **재발 방지**:
  1. backend에 healthcheck 추가 + nginx의 `depends_on`에 `condition: service_healthy` 적용예정
  2. nginx.conf에 `resolver 127.0.0.11` + 변수 방식 `proxy_pass` 적용예정 (순서가 꼬여도 자동 재조회되도록)



1. AWS 서버(EC2)에 문제가 생김 → AWS가 이걸 감지하고 자동으로 서버를 재시작시킴 (사용자가 누른 게 아니라 AWS가 알아서 한 것)
2. 근데 이게 그냥 가벼운 재부팅이 아니라 좀 더 근본적인 복구(호스트 자체를 갈아치우는 수준) 였음
3. 그 여파로 내 서버 안에서 컨테이너들끼리 서로 이름으로 찾는 기능(DNS)이 고장 남
4. 그래서 nginx(관문 역할 하는 애)가 backend(실제 로직 처리하는 애)를 못 찾아서 계속 실패하고 있었음
5. 컨테이너를 다 지우고 다시 만들었더니 (이 과정에서 저 "이름 찾는 기능"도 새로 만들어져서) 정상화됨
(backend와 nginx둘다 재시작이 된거기 때문에 nginx는 재시작 될때 캐싱이 아니라 최초 상태가 됨 backend만 재시작에 nignx는 재시작이 아니라면 캐싱이 됨) "캐싱된 옛날 값 문제"가 아니라 "최초 조회 실패(DNS 고장)" 문제였음
한 줄 요약: AWS 쪽에서 생긴 문제 때문에 내 서버가 얼떨결에 강제로 재시작됐고, 그 여파로 서버 안 프로그램들끼리 서로 못 찾게 됐는데, 다 지우고 새로 만들어서 고쳤다 -->
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