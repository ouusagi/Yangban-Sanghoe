<template>
  <div class="brand-page">

    <!-- HERO -->
    <section class="hero">
      <div class="hero__text">
        <p class="eyebrow hero__eyebrow">Since 조선 · 전통의 맛</p>
        <h1 class="hero__h1">
          손이 기억하는<br>
          <em class="hero__accent">옛 맛</em>,<br>
          양반의 상차림
        </h1>
        <p class="hero__body">
          부각과 튀각, 정성껏 고른 재료와<br>
          오랜 방식 그대로 빚어낸 전통 과자.
        </p>
        <div class="hero__cta">
          <a href="/product-list" class="btn btn--primary">제품 보러가기</a>
          <a href="#story" class="btn btn--ghost">브랜드 이야기 ↓</a>
        </div>
      </div>

      <div class="hero__visual">
        <img src="https://i.ibb.co/LXTJcz2g/Chat-GPT-Image-2026-4-27-05-05-25.png" alt="양반상회_제품_이미지">
        <div class="hero__tag">
          <span class="hero__tag-dot"></span>
          정성 100%
        </div>
      </div>
    </section>

    <!-- RIBBON -->
    <div class="ribbon">
      <div class="ribbon__track">
        <span v-for="(kw, i) in ribbonKeywords" :key="i" class="ribbon__item">
          <span class="ribbon__dot"></span>{{ kw }}
        </span>
      </div>
    </div>

    <!-- BRAND STORY -->
    <section id="story" class="story">
      <div class="story__gallery">
        <div class="story__img story__img--main">
          <img src="https://i.ibb.co/Fqm40hn4/Chat-GPT-Image-2026-4-27-05-08-22.png" alt="제조과정 이미지">
        </div>
        <div class="story__img">
          <img src="https://i.ibb.co/fYwd1DzW/Chat-GPT-Image-2026-4-27-05-12-14.png" alt="제조과정 이미지">
        </div>
        <div class="story__img">
          <img src="https://i.ibb.co/B2fSmXf7/Chat-GPT-Image-2026-4-24-12-03-43.png" alt="제조과정 이미지">
        </div>
      </div>

      <div ref="storyTarget" class="story__content">
        <p class="eyebrow" :class="{visible:storyShow}" :style="{animationDelay:'0s'}">Brand Story</p>
        <h2 class="section-title story__title" :class="{visible:storyShow}" :style="{animationDelay:'0.15s'}">
          대대로 이어온<br>손맛의 기록
        </h2>
        <div :class="{visible:storyShow}" :style="{animationDelay:'0.3s'}" class="story__rule">
          <span class="story__rule-gold"></span>
          <span class="story__rule-line"></span>
        </div>
        <p class="story__body" :class="{visible:storyShow}" :style="{animationDelay:'0.45s'}">
          부각은 채소나 해초를 찹쌀풀로 버무려 말린 뒤 기름에 튀긴 전통 과자입니다.
          조선 시대 궁중에서도 즐겨 먹던 이 음식은, 소박한 재료 속에 깊은 정성이 담겨 있습니다.
        </p>
        <p class="story__body story__body--gap" :class="{visible:storyShow}" :style="{animationDelay:'0.65s'}">
          양반상회는 이 오랜 조리법을 지키면서도 현대의 식탁 위에서 빛날 수 있도록
          매일 정성을 다해 만들고 있습니다. 한 봉지 한 봉지, 손이 기억하는 맛.
        </p>
      </div>
    </section>

    <!-- STATS -->
    <section class="stats">
      <div class="stats__inner">
        <div
          ref="statsTarget"
          :class="{visible:statsShow}"
          v-for="(s, i) in stats"
          :key="i"
          class="stats__item"
        >
          <div class="stats__num">{{ s.value }}</div>
          <p class="stats__label">{{ s.label }}</p>
        </div>
      </div>
    </section>

    <!-- DRAMA SPONSORSHIP -->
    <section id="drama" class="drama" ref="dramaTarget">
      <div class="wrap">
        <div class="drama__header" :class="{visible:dramaShow}">
          <p class="eyebrow" :class="{visible:dramaShow}">As Seen On</p>
          <h2 class="section-title drama__title" :class="{visible:dramaShow}">드라마에서 만난<br>양반상회</h2>
          <p class="drama__sub" :class="{visible:dramaShow}">KBS/SBS 공중파 드라마 협찬</p>
        </div>

        <div class="drama__grid" :class="{visible:dramaShow}">
          <article
            v-for="(d, i) in dramas"
            :key="i"
            class="drama__card"
          >
            <div class="drama__thumb">
              <img :src="d.image" alt="양반상회 드라마 출연 이미지">
              <!-- <span class="drama__badge">{{ d.channel }}</span> -->
            </div>
            <!-- <div class="drama__info">
              <p class="drama__year">{{ d.year }}</p>
              <h3 class="drama__name">{{ d.title }}</h3>
              <p class="drama__desc">{{ d.desc }}</p>
            </div> -->
          </article>
        </div>
      </div>
    </section>

    <!-- PHILOSOPHY -->
    <section id="philosophy" class="phil">
      <div class="phil__intro" ref="philTarget">
        <p class="eyebrow" :class="{leftvisible:philShow}" :style="{animationDelay:'0s'}">Our Philosophy</p>
        <h2 class="section-title phil__title" :class="{leftvisible:philShow}" :style="{animationDelay:'0.15s'}">양반상회가<br>지키는 것들</h2>
        <p class="phil__body" :class="{leftvisible:philShow}" :style="{animationDelay:'0.28s'}">
          한 봉지에 담기까지, 재료 선별부터 포장까지
          모든 과정에 양반의 예를 담습니다.
        </p>
        <div class="phil__watermark" aria-hidden="true">
          <span>양</span><span>반</span>
        </div>
      </div>

      <div class="phil__values">
        <div
          v-for="(v, i) in values"
          :key="i"
          class="phil__item"
        >
          <div class="phil__icon">{{ v.hanja }}</div>
          <div class="phil__text">
            <h3 class="phil__name">{{ v.name }}</h3>
            <p class="phil__desc">{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- REVIEWS -->
    <section id="reviews" class="reviews" ref="reviewTarget">
      <div class="wrap" :class="{visible:reviewShow}">
        <div class="reviews__header">
          <div class="reviews__deco">
            <span class="reviews__deco-line"></span>
            <span class="reviews__deco-star">★</span>
            <span class="reviews__deco-line"></span>
          </div>
          <h2 class="section-title reviews__title" :class="{visible:reviewShow}">드셔본 분들의 솔직한 후기</h2>
          <p class="reviews__sub">모든 후기는 실제 구매 고객이 남긴 리뷰입니다</p>
        </div>

        <div class="reviews__grid">
          <article
            v-for="(r, i) in reviews"
            :key="i"
            class="review-card"
          >
            <div class="review-card__stars">
              <span v-for="s in 5" :key="s" :class="s <= r.rating ? 'star-on' : 'star-off'">★</span>
            </div>
            <p class="review-card__text">"{{ r.text }}"</p>
            <div class="review-card__footer">
              <div class="review-card__avatar">{{ r.name[0] }}</div>
              <div>
                <p class="review-card__name">{{ r.name }}</p>
                <p class="review-card__tag">{{ r.tag }}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <span class="cta__watermark" aria-hidden="true">양반</span>
      <div class="cta__content" ref="ctaTarget" :class="{visible:ctaShow}">
        <p class="cta__eyebrow">지금 바로 경험하세요</p>
        <h2 class="cta__title">전통의 맛,<br>양반상회</h2>
        <a href="/product-list" class="cta__btn">쇼핑하러 가기 →</a>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

function useReveal(threshold = 0.3){
  const target = ref(null)
  const show = ref(false)

  useIntersectionObserver(target,([entry])=> {
    if(entry.isIntersecting) show.value = true
  },{threshold})
  return { target, show }
}

const {target:storyTarget, show:storyShow} = useReveal()
const {target:statsTarget, show:statsShow} = useReveal()
const {target:dramaTarget, show:dramaShow} = useReveal()
const {target:philTarget, show:philShow} = useReveal()
const {target:reviewTarget, show:reviewShow} = useReveal()
const {target:ctaTarget, show:ctaShow} = useReveal()

const ribbonKeywords = [
  '국내산 재료', '방부제 無첨가', '전통 레시피', '장인 수작업',
  '부각 · 튀각', '조선의 맛', '정직한 손맛',
  '국내산 재료', '방부제 無첨가', '전통 레시피', '장인 수작업',
  '부각 · 튀각', '조선의 맛', '정직한 손맛',
  '국내산 재료', '방부제 無첨가', '전통 레시피', '장인 수작업',
  '부각 · 튀각', '조선의 맛', '정직한 손맛',
  '국내산 재료', '방부제 無첨가', '전통 레시피', '장인 수작업',
  '부각 · 튀각', '조선의 맛', '정직한 손맛',
]

const stats = [
  { value: '9+', label: '제품 종류' },
  { value: '100%', label: '정성 가득' },
  { value: '15년', label: '장인 경력' },
  { value: '4.9★', label: '고객 평점' },
]

const dramas = [
  {
    title: '기쁜 우리 좋은 날',
    channel: 'KBS',
    year: '2026',
    desc: '극 중 주인공이 즐겨 찾는 전통 과자로 등장, 특유의 바삭한 식감이 화제를 모았습니다.',
    image: 'https://i.ibb.co/v4dyXN1T/Kakao-Talk-Photo-2026-04-28-16-54-13.png',
  },
  {
    title: '기쁜 우리 좋은 날',
    channel: 'KBS',
    year: '2026',
    desc: '양반상회 제품이 소품으로 활용되어 시청자들의 주목을 받았습니다.',
    image: 'https://i.ibb.co/zWJfV3M7/Kakao-Talk-Photo-2026-04-28-18-34-29.png',
  },
  {
    title: '기쁜 우리 좋은 날',
    channel: 'KBS',
    year: '2026',
    desc: '양반상회 제품이 소품으로 활용되어 시청자들의 주목을 받았습니다.',
    image: 'https://i.ibb.co/rTH7SMC/Kakao-Talk-Photo-2026-04-28-18-41-23.png',
  },
  {
    title: '기쁜 우리 좋은 날',
    channel: 'KBS',
    year: '2026',
    desc: '양반상회 제품이 소품으로 활용되어 시청자들의 주목을 받았습니다.',
    image: 'https://i.ibb.co/wZjfHPQ2/Kakao-Talk-Photo-2026-04-28-18-46-08.png',
  },
  {
    title: '기쁜 우리 좋은 날',
    channel: 'KBS',
    year: '2026',
    desc: '양반상회 제품이 소품으로 활용되어 시청자들의 주목을 받았습니다.',
    image: 'https://i.ibb.co/7Nt4xJPh/Kakao-Talk-Photo-2026-04-28-18-48-51.jpg',
  },
  {
    title: '기쁜 우리 좋은 날',
    channel: 'KBS',
    year: '2026',
    desc: '양반상회 제품이 소품으로 활용되어 시청자들의 주목을 받았습니다.',
    image: 'https://i.ibb.co/G3Chv6MB/Kakao-Talk-Photo-2026-04-28-17-13-20.jpg',
  },
]

const values = [
  {
    hanja: '誠',
    name: '정직한 재료',
    desc: '엄선한 재료를 사용해 불필요한 첨가를 줄였습니다. 성분표에 숨길 것이 없습니다.',
  },
  {
    hanja: '禮',
    name: '정성스러운 손질',
    desc: '기계가 아닌 손으로, 하나하나 정성껏 빚어냅니다. 시간이 걸려도 올바른 방법을 고수합니다.',
  },
  {
    hanja: '傳',
    name: '전통 계승',
    desc: '조선 시대 궁중 조리법에서 출발한 레시피를 그대로 이어갑니다. 변하지 않는 맛이 자부심입니다.',
  },
]

const reviews = [
  {
    rating: 5,
    text: '어릴 때 할머니가 해주시던 맛이 그대로예요. 바삭하면서도 짭조름한 맛이 일품이에요.',
    name: '김○○',
    tag: '구매 인증',
  },
  {
    rating: 5,
    text: '선물용으로 구매했는데 포장도 예쁘고 맛도 정말 좋았어요. 재구매 의사 100%입니다!',
    name: '이○○',
    tag: '구매 인증',
  },
  {
    rating: 4,
    text: '인공적인 맛이 전혀 없어서 좋아요. 아이들 간식으로도 안심하고 줄 수 있어요.',
    name: '박○○',
    tag: '구매 인증',
  },
]
</script>

<style scoped>
.brand-page {
  --ink:        #1c1408;
  --ink-soft:   #3a3028;
  --paper:      #faf7f2;
  --paper-warm: #f5f0e8;
  --paper-deep: #ede7d8;
  --sepia:      #8b6914;
  --gold:       #c9973a;
  --gold-lt:    #e8c96a;
  --rust:       #b84a1e;
  --muted:      #8a7d6a;
  --wire:       #d4cbb8;
  --wire-dark:  #b8ad98;
  --serif:      'Noto Serif KR', Georgia, serif;
  --sans:       'Noto Sans KR', sans-serif;
  --ease:       cubic-bezier(0.16, 1, 0.3, 1);
  --pad-v:      96px;
  --pad-h:      64px;
  --max-w:      1200px;

  font-family: var(--sans);
  color: var(--ink);
  background: var(--paper);
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

/* 공용 */
.wrap {
  width: 100%;
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 var(--pad-h);
}

.eyebrow {
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--rust);
  font-weight: 500;
}

.section-title {
  font-family: var(--serif);
  font-size: clamp(26px, 4vw, 40px);
  font-weight: 700;
  line-height: 1.3;
}

.btn {
  display: inline-block;
  font-family: var(--serif);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1em;
  padding: 14px 32px;
  transition: all 0.25s var(--ease);
  cursor: pointer;
  text-decoration: none;
}

.btn--primary {
  background: var(--ink);
  color: var(--paper);
  border: 1.5px solid var(--ink);
}

.btn--primary:hover {
  background: var(--rust);
  border-color: var(--rust);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(184, 74, 30, .25);
}

.btn--ghost {
  background: transparent;
  color: var(--muted);
  border: 1.5px solid var(--wire-dark);
}

.btn--ghost:hover {
  border-color: var(--ink-soft);
  color: var(--ink-soft);
}

/* IntersectionObserver */
.visible{
  animation: upevent 1s ease both;
}

.leftvisible{
  animation: leftevent 0.8s ease both;
}

.eyebrow,
.story__title,
.story__rule,
.story__body,
.stats__item,
.drama__header,
.drama__grid,
.section-title,
.drama__sub,
.cta__content{
  opacity: 0;
  transform: translateY(20px);
}

.phil__intro .eyebrow,
.phil__intro .phil__title,
.phil__intro .phil__body{
  opacity: 0;
  transform: translateX(-30%)
}



/* HERO */
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: var(--paper-warm);
  overflow: hidden;
}

.hero__text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px var(--pad-h) 80px calc(var(--pad-h) + 8px);
}

.hero__text > * {
  opacity: 0;
  animation: upevent 1s ease forwards;
}

.hero__text > *:nth-child(1) { animation-delay: 0.3s; }
.hero__text > *:nth-child(2) { animation-delay: 0.2s; }
.hero__text > *:nth-child(3) { animation-delay: 0.4s; }
.hero__text > *:nth-child(4) { animation-delay: 0.6s; }
.hero__text > *:nth-child(5) { animation-delay: 0.7s; }

.hero__eyebrow {
  margin-bottom: 20px;
}

.hero__h1 {
  font-family: var(--serif);
  font-size: clamp(34px, 5vw, 56px);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 24px;
}

.hero__accent {
  font-style: normal;
  color: var(--rust);
  position: relative;
}

.hero__accent::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--gold);
}

.hero__body {
  font-size: 15px;
  color: var(--muted);
  line-height: 1.9;
  margin-bottom: 36px;
  max-width: 340px;
}

.hero__cta {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.hero__visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--paper-deep);
  overflow: hidden;
  min-height: 100svh;
  line-height: 0;
  opacity: 0;
  animation: upevent 1s ease forwards;
}

.hero__visual img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.hero__bracket {
  position: absolute;
  font-family: var(--serif);
  font-size: 80px;
  color: var(--wire-dark);
  opacity: 0.5;
  line-height: 1;
  user-select: none;
}

.hero__bracket--l {
  top: 12%;
  left: 18px;
}

.hero__bracket--r {
  bottom: 12%;
  right: 18px;
}

.hero__img {
  width: 72%;
  max-width: 380px;
  aspect-ratio: 3 / 4;
  box-shadow: 0 24px 64px rgba(28, 20, 8, .18);
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.hero__tag {
  position: absolute;
  bottom: 48px;
  left: 32px;
  background: var(--paper);
  border: 1px solid var(--wire);
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.06em;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 16px rgba(28, 20, 8, .1);
  z-index: 2;
  opacity: 0;
  animation: upevent 1s ease forwards;
  animation-delay: 0.6s;
}

.hero__tag-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gold);
}

/* RIBBON */
.ribbon {
  background: var(--ink);
  height: 52px;
  overflow: hidden;
  display: flex;
  align-items: center;
  
}

.ribbon__track {
  display: flex;
  align-items: center;
  white-space: nowrap;
  animation: marquee 20s linear infinite;
}

.ribbon__item {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 0 28px;
  font-size: 11px;
  letter-spacing: 0.18em;
  color: rgba(255, 255, 255, .65);
  text-transform: uppercase;
}

.ribbon__dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--gold);
  flex-shrink: 0;
}

/* BRAND STORY */
.story {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 560px;
  border-top: 1px solid var(--wire);
}

.story__gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 3px;
  background: var(--paper-deep);
}

.story__img {
  overflow: hidden;
  position: relative;
  background: var(--wire);
}

.story__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s var(--ease);
}

.story__img:hover img {
  transform: scale(1.04);
}

.story__img--main {
  grid-column: 1 / -1;
}

.story__content {
  padding: 72px 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-left: 1px solid var(--wire);
}

.story__title {
  margin: 20px 0 24px;
}

.story__rule {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 28px;
}

.story__rule-gold {
  width: 40px;
  height: 2px;
  background: var(--gold);
}

.story__rule-line {
  flex: 1;
  height: 1px;
  background: var(--wire);
  margin-left: 0;
}

.story__body {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.95;
}

.story__body--gap {
  margin-top: 16px;
}


/* STATS */
.stats {
  background: var(--paper-deep);
  border-top: 1px solid var(--wire);
  border-bottom: 1px solid var(--wire);
  padding: 64px var(--pad-h);
}

.stats__inner {
  max-width: var(--max-w);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.stats__item {
  flex: 1;
  text-align: center;
  position: relative;
  padding: 0 24px;
}

.stats__item + .stats__item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10%;
  bottom: 10%;
  width: 1px;
  background: var(--wire-dark);
}

.stats__num {
  font-family: var(--serif);
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 700;
  color: var(--sepia);
  line-height: 1;
}

.stats__label {
  font-size: 12px;
  letter-spacing: 0.12em;
  color: var(--muted);
  margin-top: 10px;
}

/* DRAMA */
.drama {
  padding: var(--pad-v) 0;
  background: var(--paper-warm);
  border-top: 1px solid var(--wire);
}

.drama__header {
  text-align: center;
  margin-bottom: 56px;
}

.drama__title {
  margin: 14px 0 10px;
}

.drama__sub {
  font-size: 14px;
  color: var(--muted);
}

.drama__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.drama__card {
  background: var(--paper);
  border: 1px solid var(--wire);
  overflow: hidden;
  transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease);
}

.drama__card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 48px rgba(28, 20, 8, .12);
}

.drama__thumb {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: var(--wire);
  display: flex;
  align-items: center;
  justify-content: center;
}

.drama__thumb img {
  transition: transform 0.5s var(--ease);
  width: 100%;
}

.drama__card:hover .drama__thumb img {
  transform: scale(1.04);
}

.drama__badge {
  position: absolute;
  top: 14px;
  left: 14px;
  background: var(--ink);
  color: var(--paper);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  padding: 4px 12px;
  border-radius: 20px;
}

.drama__info {
  padding: 24px 28px 28px;
}

.drama__year {
  font-size: 11px;
  letter-spacing: 0.14em;
  color: var(--gold);
  margin-bottom: 8px;
}

.drama__name {
  font-family: var(--serif);
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
  line-height: 1.4;
}

.drama__desc {
  font-size: 13px;
  color: var(--muted);
  line-height: 1.8;
}

/* PHILOSOPHY */
.phil {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 480px;
  border-top: 1px solid var(--wire);
}

.phil__intro {
  padding: var(--pad-v) var(--pad-h);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.phil__title {
  margin: 20px 0 24px;
}

.phil__body {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.9;
  max-width: 320px;
}

.phil__watermark {
  position: absolute;
  bottom: -20px;
  right: -10px;
  display: flex;
  gap: 4px;
  pointer-events: none;
  user-select: none;
}

.phil__watermark span {
  font-family: var(--serif);
  font-size: 120px;
  font-weight: 900;
  color: rgba(139, 105, 20, .05);
  line-height: 1;
}

.phil__values {
  background: var(--paper-warm);
  border-left: 1px solid var(--wire);
  padding: var(--pad-v) var(--pad-h);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
}

.phil__item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.phil__icon {
  width: 44px;
  height: 44px;
  min-width: 44px;
  border: 1.5px solid var(--sepia);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--serif);
  font-size: 20px;
  color: var(--sepia);
  font-weight: 600;
  transition: background 0.25s, color 0.25s;
}

.phil__item:hover .phil__icon {
  background: var(--sepia);
  color: var(--paper);
}

.phil__name {
  font-family: var(--serif);
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 6px;
}

.phil__desc {
  font-size: 13px;
  color: var(--muted);
  line-height: 1.85;
}

/* REVIEWS */
.reviews {
  padding: var(--pad-v) 0;
  background: var(--paper-deep);
  border-top: 1px solid var(--wire);
}

.reviews__header {
  text-align: center;
  margin-bottom: 52px;
}

.reviews__deco {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
  padding: 0 var(--pad-h);
}

.reviews__deco-line {
  flex: 1;
  height: 1px;
  background: var(--wire-dark);
}

.reviews__deco-star {
  font-size: 18px;
  color: var(--gold);
}

.reviews__title {
  margin-bottom: 10px;
}

.reviews__sub {
  font-size: 13px;
  color: var(--muted);
}

.reviews__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.review-card {
  background: var(--paper);
  border: 1px solid var(--wire);
  padding: 28px 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: box-shadow 0.3s var(--ease);
}

.review-card:hover {
  box-shadow: 0 12px 32px rgba(28, 20, 8, .09);
}

.review-card__stars {
  display: flex;
  gap: 2px;
}

.star-on {
  color: var(--gold);
  font-size: 15px;
}

.star-off {
  color: var(--wire-dark);
  font-size: 15px;
}

.review-card__text {
  font-size: 13px;
  color: var(--ink-soft);
  line-height: 1.85;
  flex: 1;
  font-style: italic;
}

.review-card__footer {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid var(--wire);
}

.review-card__avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--paper-deep);
  border: 1.5px solid var(--wire-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  color: var(--muted);
  flex-shrink: 0;
}

.review-card__name {
  font-size: 12px;
  font-weight: 600;
  color: var(--ink-soft);
}

.review-card__tag {
  font-size: 10px;
  color: var(--gold);
  letter-spacing: 0.08em;
  margin-top: 2px;
}

/* CTA */
.cta {
  position: relative;
  background: var(--ink);
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
}

.cta__watermark {
  position: absolute;
  font-family: var(--serif);
  font-size: 240px;
  font-weight: 900;
  color: rgba(255, 255, 255, .025);
  letter-spacing: -8px;
  user-select: none;
  pointer-events: none;
}

.cta__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 64px var(--pad-h);
}

.cta__eyebrow {
  font-size: 11px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--gold);
}

.cta__title {
  font-family: var(--serif);
  font-size: clamp(32px, 5vw, 52px);
  font-weight: 700;
  color: #fff;
  line-height: 1.25;
}

.cta__btn {
  display: inline-block;
  background: var(--gold);
  color: var(--ink);
  padding: 16px 44px;
  font-family: var(--serif);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.12em;
  margin-top: 4px;
  text-decoration: none;
  transition: background 0.25s, transform 0.25s, box-shadow 0.25s;
}

.cta__btn:hover {
  background: var(--gold-lt);
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(201, 151, 58, .35);
}

/* KEYFRAMES */
@keyframes upevent {
  from {
    transform: translateY(20%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes leftevent {
  from {
    opacity: 0;
    transform: translateX(-30%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
}

@keyframes marquee {
  from{
    transform: translateX(0);
  }
  to{
    transform: translateX(-25%);
  }
}

/* 태블릿 */
@media (max-width: 1024px) {
  .brand-page {
    --pad-h: 40px;
  }
}

/* 모바일 */
@media (max-width: 767px) {
  .brand-page {
    --pad-v: 64px;
  }

  .hero {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .hero__text {
    padding: 60px var(--pad-h) 40px;
    order: 2;
  }

  .hero__visual {
    order: 1;
    min-height: 60vw;
    padding: 0;
  }

  .hero__img {
    max-width: 260px;
  }

  .hero__bracket {
    font-size: 48px;
  }

  .story {
    grid-template-columns: 1fr;
  }

  .story__gallery {
    min-height: 320px;
  }

  .story__content {
    padding: var(--pad-v) var(--pad-h);
    border-left: none;
    border-top: 1px solid var(--wire);
  }

  .stats__inner {
    flex-wrap: wrap;
    gap: 32px;
  }

  .stats__item {
    flex: 0 0 calc(50% - 32px);
  }

  .stats__item + .stats__item::before {
    display: none;
  }

  .phil {
    grid-template-columns: 1fr;
  }

  .phil__values {
    border-left: none;
    border-top: 1px solid var(--wire);
  }

  .phil__watermark {
    display: none;
  }

  .reviews__grid {
    grid-template-columns: 1fr;
    max-width: 480px;
    margin: 0 auto;
  }
}

@media (max-width: 600px) {
  .brand-page {
    --pad-h: 20px;
  }

  .drama__grid {
    grid-template-columns: 1fr;
  }
}
</style>
```
