<template>
    <div class="Home-container">
        <div class="hero-section">
            <div class="hero-text">
                <h1>수제 김부각의 참맛 !</h1>
                <p>전통 방식으로 만든 바삭하고 고소한 김부각</p>
                <router-link to="/brandstory" class="hero-btn">우리의 이야기</router-link>
            </div>
            <img src="/src/assets/hero2.png" alt="kimbugak-image">
            <!-- https://img.freepik.com/premium-photo/corn-sticks-concept-tasty-snack-food_185193-180767.jpg -->
        </div>

        <div class="Home-features">
            <div class="feature-item">
                <img class="feature-icon" src="/src/assets/kimbugak_icon1.png" alt="kimbugack-icon">
                <p>전통 수제 방식</p>
            </div>
            <hr style="height: 50px; background-color: #D4AF7A;">
            <div class="feature-item">
                <img class="feature-icon" src="/src/assets/kimbugak_icon2.png" alt="leaf-icon">
                <p>엄선된 재료</p>
            </div>
            <hr style="height: 50px; background-color: #D4AF7A;">
            <div class="feature-item">
                <img class="feature-icon" src="/src/assets/kimbugak_icon3.png" alt="heart-icon">
                <p>정성 가득</p>
            </div>
        </div>

        <div class="about-section">
            <div class="about-item">
                <div class="about-text">
                    <h2 style="border-bottom: 1px solid #D4AF7A;">ABOUT US</h2>
                    <hr>
                    <br>
                    <p>- 우리의 전통과 역사 -</p>
                    <p v-for="(item,i) in story" key="i">{{ item }}</p>
                </div>

                <div class="about-image">
                    <img src="https://image.8dogam.com/resized/product/asset/v1/upload/5b4b769fd6804207b46d6347bb7117de.png?type=big&res=2x&ext=webp" alt="about-image1">
                </div>
            </div>

        <div class="about-item">


            <div class="about-image">
                <img src="https://img-cf.kurly.com/hdims/resize/%3E720x/quality/90/src/shop/data/goodsview/20211129/gv10000249702_1.jpg" alt="about-image2">
            </div>

            <div class="about-text">
                <h2>양반상회 김부각의 특징</h2>
                <hr style="border-bottom: 1px solid #D4AF7A;">
                <br>
                <ul>
                <li v-for="(items,i) in feature" key="i">{{ items }}</li>
                </ul>
            </div>

            </div>
        </div>

        <div class="production-container">
            <div class="production-text">
                <p>정성을 담아 만드는 <span>STEP 3</span></p>
            </div>

            <div class="production-img">
                <div class="production-card">
                    <img src="https://static.wtable.co.kr/image/production/service/recipe/2352/f43327ba-e0dc-4827-944b-a5eda1ca409a.jpg?size=800x800" alt="prodiction-kimbugak-img1">
                    <p class="production-step">STEP 1. 엄선된 재료</p>
                    <div class="production-overlay">
                    <p>STEP 1 <br> 좋은 품질의 김부각 재료를 선별합니다</p>
                    </div>
                </div>

                <div class="production-card">
                    <img src="https://static.wtable.co.kr/image/production/service/recipe/2352/ecd7831d-148a-4699-9290-81d6fa94c8a7.jpg?size=800x800" alt="prodiction-kimbugak-img2">
                    <p class="production-step">STEP 2. 정성스러운 조리</p>
                    <div class="production-overlay">
                    <p>STEP 2 <br> 적절한 온도에서 바삭하게 튀겨냅니다</p>
                    </div>
                </div>

                <div class="production-card">
                    <img src="https://lottemartzetta.com/images-v3/932dcbc7-fca8-4d43-bcde-f73d1ce3cc7d/9d71e5b8-8a0c-4106-81a7-26ec8c8ac77e/500x500.jpg" alt="prodiction-kimbugak-img3">
                    <p class="production-step">STEP 3. 깊은 풍미 완성</p>
                    <div class="production-overlay">
                    <p>STEP 3 <br> 달콤하고 고소한 맛을 더해 완성합니다</p>
                    </div>
                </div>

            </div>
        </div>

        <div class="video-section">
                <hr>
                <h2>양반상회의 다양한 김부각</h2>
                <h4>정성껏 만든 김부각을 직접 확인해보세요</h4>
            <div class="video-wrapper">
                <iframe 
                src="https://www.youtube.com/embed/wnTFdGjcfpI" 
                frameborder="0" 
                allowfullscreen>
                </iframe>
            </div>
        </div>
        
        <div class="section-bridge">
            <p>가장 많은 사랑을 받은 바삭함</p>
        </div>

        <div class="cardbox-container">
            <div class="cardbox-header">
                <h2>인기 상품</h2>
                <p>“양반상회를 대표하는 인기 제품을 소개합니다”</p>
                <button class="cardbox-btn"><router-link to="/product-list">상품 더보기</router-link></button>
            </div>

            <hr class="cardbox-divider">

            <Cardbox v-for="(item,i) in store.cardData" :key="i" :transfer="item" @click="goDetail(item)"/>
        </div>

        <div class="match-container">
                <h2>바삭하게, 고소하게,<br>다양하게 즐겨보세요</h2>
                <p>김부각과 함께하는 특별한 순간들</p>
                <hr class="match-divider">

            <div class="match-items">

                <div class="match-item">
                    <img src="/src/assets/어포튀각_간식1.jpg" alt="간식 이미지">
                    <h3>간식으로</h3>
                    <p>바삭하게 즐기는 김부각</p>
                </div>

                <div class="match-item">
                    <img src="/src/assets/김부각_안주이미지.png" alt="안주 이미지">
                    <h3>안주로</h3>
                    <p>고소하게 즐기는 김부각</p>
                </div>

                <div class="match-item">
                    <img src="/src/assets/선물세트.jpg" alt="선물 이미지">
                    <h3>선물로</h3>
                    <p>정성을 담은 김부각</p>
                </div>

            </div>
        </div>

        <div class="cta-container">
            <img src="/public/yangban_logo_wap.png" alt="yanban_logo">
            <div class="cta-text">
                <h2>양반상회를 직접 경험해보세요</h2>
                <p>전통의 바삭함을 지금 만나보세요</p>
            </div>
            <a href="https://smartstore.naver.com/yangbanstore" target="_blank" class="cta-btn">네이버 스마트스토어 바로가기<span class="arrow">→</span></a>
        </div>
        
    </div>
</template>


<script>
import { ref } from 'vue';
import Cardbox from '../components/Cardbox.vue';
import { useProductStore } from '../stores/product'
import { useRouter } from 'vue-router';

export default {

    components:{
        Cardbox,
    },

    setup(){
        const store = useProductStore()
        const router = useRouter()

        const story = ref([`양반상회는 우리 조상들이 대대로 즐겨 먹던 김부각의 맛을 현대에 되살리고자 시작되었습니다.`,
                     `할머니의 손맛에서 비롯된 작은 레시피 하나가, 오늘날 양반상회의 시작이 되었습니다.`,
                     `빠르게 변해가는 세상 속에서도 변하지 않는 것이 있습니다.`,
                     `정성껏 한 장 한 장 만들어가는 우리의 마음,`,
                     `그리고 그 마음이 담긴 김부각 한 봉지가 여러분의 식탁에 따뜻한 추억을 전해드리길 바랍니다.`])
        
        const feature = ref([`- 전통 방식 그대로 이어온 깊은 손맛`,
                       `- 엄선된 재료로 완성한 믿을 수 있는 품질`,
                       `- 한 장 한 장 정성을 담은 수제 생산`,
                       `- 바삭함 속에 담긴 고소한 풍미`,
                       `- 일상에 여유를 더하는 프리미엄 간식`])

        const goDetail = (item)=>{
            router.push(`/product-detail/${item.id}`)
        }

        return{
            store,story,feature,goDetail
        }
    }
}
</script>


<style scoped>
    .Home-container{
        width: 100%;
    }

    .hero-section{
        width: 100%;
        position: relative;
    }

    .hero-text{
        position: absolute;
        top: 20%;
        left: 20%;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
    }

    .hero-text h1 {
        font-family: "Noto Serif KR", serif;
        color: #3D2B1F;
        font-size: 2rem;
    }

    .hero-text p {
        color: #7A6A58;
    }

    .hero-btn {
        margin-top: 0.5rem;
        background-color: #8B6B4A;
        border: 1px solid #8B6B4A;
        color: white;
        font-size: 1.1rem;
        padding: 0.8rem 2rem;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .hero-btn:hover {
        background-color: #6B4F35;
    }

    .hero-section img{
        display: block;
        object-fit: cover;
        width: 100%;
        height: 450px;
    }

    .Home-features{
        width: 100%;
        height: 240px;
        background-color: #FDFAF5;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        display: flex;
        gap: 5rem;
        justify-content: center;
        align-items: center;
    }

    .feature-item{
        width: 150px;
        height: 150px;
        text-align: center;
        border: 1px solid #D4AF7A;
        border-radius: 9999px;
        transition: all 0.4s ease;
        cursor: pointer;
        font-weight: 200;
    }

    .feature-item:hover{
        transform: translateY(-10px);
        background-color: #D4AF7A;
    }

    .feature-icon{
        width: 100px;
        height: 100px;
        border-radius: 9999px;
    }

    .about-section{
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 5rem 0;
        background-color: #FDFAF5;
    }

    .about-item{
        display: flex;
        width: 100%;
        justify-content: space-around;
        padding: 3rem 10%;
    }

    .about-text{
        width: 40%;
    }

    .about-text h2 {
        font-size: 1.8rem;
        font-family: "Noto Serif KR", serif;
        color: #3D2B1F; 
    }

    .about-text p, 
    .about-text li {
        font-size: 1rem;
        line-height: 1.8;
        color: #7A6A58;
        list-style: none;
    }

    .about-image{
        transform-origin: center;
        transition: all 0.3s ease;
        overflow: hidden;
        border-radius: 8px;
    }

    .about-image img{
        object-fit: cover;
        width: 500px;
        height: 300px;
        cursor: pointer;
        transition: all 0.3s ease;
        border-radius: 8px;
    }

    .about-image img:hover{
        transform: scale(1.05);
    }

    .production-container{
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-bottom: 9rem;
        background-color: #FDFAF5;
    }

    .production-text p{
        text-align: center;
        font-size: 1.8rem;
        font-family: "Noto Serif KR", serif;
        color: #3D2B1F; 
        padding-bottom: 3rem;
        letter-spacing: 0.05em;
    }

    .production-text span{
        border-bottom: 2px solid #D4AF7A;
    }

    .production-card{
        width: 320px;
        height: 320px;
        text-align: center;
        position: relative;
    }

    .production-img{
        display: flex;
        width: 100%;
        justify-content: center;
        gap: 3rem;
    }

    .production-img img{
        object-fit: cover;
        width: 320px;
        height: 320px;
        cursor: pointer;
        transition: all 0.3s ease;
        border-radius: 8px;
    }

    .production-step{
        margin-top: 1rem;
        color: #3D2B1F;
        font-weight: 500;
    }

    .production-overlay{
        top: 0;
        left: 0;
        position: absolute;
        background-color: rgba(0, 0, 0, 0);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease;
        border-radius: 8px;
    }

    .production-overlay p {
        color: white;
        opacity: 0;
        transition: all 0.3s ease;
        text-align: center;
        padding: 0 1rem;
    }

    .production-card:hover .production-overlay {
        background-color: rgba(0, 0, 0, 0.5);
    }

    .production-card:hover .production-overlay p {
        opacity: 1;
    }

    .video-section {
        width: 100%;
        padding: 3rem 0 5rem 0;
        background-color: #FDFAF5;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }

    .video-section h2 {
        font-family: "Noto Serif KR", serif;
        font-size: 1.8rem;
        color: #3D2B1F;
        margin: 0;
    }

    .video-section h4 {
        font-size: 1rem;
        font-weight: 400;
        color: #7A6A58;
        margin: 0;
    }

    .video-section hr {
        width: 200px;
        border: none;
        border-top: 2px solid #D4AF7A;
    }

    .video-wrapper {
        width: 60%;
        aspect-ratio: 16/9;
    }

    .video-wrapper iframe {
        width: 100%;
        height: 100%;
        border-radius: 8px;
    }

    .section-bridge {
        padding: 3rem 0 1rem 0;
        text-align: center;
        background-color: #FDFAF5;
    }

    .section-bridge p {
        opacity: 0.8;
        font-family: "Noto Serif KR", serif;
        font-size: 1.8rem;
        color: #3D2B1F;
    }

    .cardbox-container {
        display: flex;
        width: 100%;
        justify-content: center;
        padding: 3.5rem 0 9rem 0;
        gap: 4rem;
        background-color: #FDFAF5;
    }

    .cardbox-header {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 0.5rem;
    }

    .cardbox-header h2 {
        font-size: 2rem;
        font-family: "Noto Serif KR", serif;
        color: #3D2B1F;
        letter-spacing: 0.05em;
    }

    .cardbox-header p {
        font-size: 0.95rem;
        color: #8B6B4A;
    }

    .cardbox-btn {
        margin-top: 1rem;
        padding: 0.7rem 1.8rem;
        font-size: 0.9rem;
        border: 1px solid #8B6B4A;
        background-color: transparent;
        color: #8B6B4A;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .cardbox-btn:hover {
        background-color: #8B6B4A;
        color: white;
    }

    .cardbox-divider {
        border: 1px solid #D4AF7A;
        margin: 1rem 0 2rem 0;
    }

    .match-container{
        display: flex;
        gap: 1rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 500px;
        background-color: rgba(61, 43, 31, 0.65);
        /* background-color: #3D2B1F; */
        text-align: center;
    }

    .match-container h2{
        font-family: "Noto Serif KR", serif;
        font-size: 2rem;
        color: #F5F0E6;
        text-align: center;
        line-height: 1.6;
    }

    .match-container p{
        font-size: 1rem;
        color: #C4BAA8;
    }

    .match-divider{
        width: 200px;
        border: none;
        border-top: 1px solid #D4AF7A;
        margin: 0.5rem 0;
    }

    .match-items{
        display: flex;
        gap: 5rem;
        margin-top: 1rem;
    }

    .match-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        text-align: center;
    }

    .match-item img{
        width: 100px;
        height: 100px;
        border-radius: 9999px;
        object-fit: cover;
        border: 2.5px solid #D4AF7A;
        cursor: pointer;
    }

    .match-item h3{
        font-size: 1rem;
        font-weight: 500;
        color: #F5F0E6;
    }

    .match-item p{
        font-size: 0.85rem;
        color: #C4BAA8;
    }

    .cta-container {
        margin: 0 auto;
        text-align: center;
        padding: 10rem 0;
        background-color: #FDFAF5;
    }

    .cta-container img{
        width: 200px;
    }

    .cta-text h2 {
        font-family: "Noto Serif KR", serif;
        font-size: 32px;
        font-weight: 600;
        margin-bottom: 1rem;
        color: #222;
    }

    .cta-text p {
        font-size: 16px;
        color: #666;
        margin-bottom: 48px;
    }

    .cta-btn {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        background-color: #03C75A;
        color: white;
        padding: 0.9rem 2rem;
        border: none;
        border-radius: 6px;
        font-size: 0.95rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.25s ease;
    }

    .cta-btn:hover {
        transform: translateY(-3px);
        background-color: #444;
    }

    .cta-btn .arrow {
        transition: transform 0.3s ease;
    }

    .cta-btn:hover .arrow {
        transform: translateX(6px);
    }

    /* 태블릿 (768px ~ 1024px) */
    @media (max-width: 1024px) {
    
    .Home-container{
        overflow-x:hidden;
    }

    .hero-text {
        top: 15%;
        left: 10%;
        align-items: flex-start;
    }

    .hero-text h1 {
        font-size: 1.7rem;
    }

    .hero-btn {
        font-size: 1rem;
        padding: 0.7rem 1.2rem;
    }

    .hero-section img {
        height: 380px;
    }

    .Home-container{
        overflow-x:hidden;
    }

    .hero-text {
        top: 15%;
        left: 10%;
        align-items: flex-start;
    }

    .hero-text h1 {
        font-size: 1.7rem;
    }

    .hero-btn {
        font-size: 1rem;
        padding: 0.7rem 1.2rem;
    }

    .hero-section img {
        height: 380px;
    }

    .Home-features {
        gap: 3rem;
    }

    .feature-item {
        width: 120px;
        height: 120px;
    }

    .feature-item p{
        font-size: 0.85rem;
    }

    .feature-icon {
        width: 80px;
        height: 80px;
    }

    .about-section{
        padding: 3rem 0;
    }

    .about-item {
        padding: 2rem 5%;
        gap: 2rem;
    }

    .about-text {
        width: 45%;
    }

    .about-text h2 {
        font-size: 1.5rem;
    }

    .about-text p,
    .about-text li {
        font-size: 0.95rem;
    }

    .about-image img {
        width: 320px;
        height: 240px;
    }

    .production-container {
        padding: 4rem 5% 9rem 5%;
    }

    .production-card {
        width: 200px;
        height: 200px;
    }

    .production-img img {
        width: 200px;
        height: 200px;
    }

    .production-text p {
        font-size: 1.5rem;
    }

    .video-section {
        padding: 2rem 0 5rem 0;
    }

    .video-section h2 {
        font-size: 1.6rem;
    }

    .video-wrapper {
        width: 80%;
    }

    .section-bridge p {
        font-size: 1.6rem;
    }

    .cardbox-container {
        padding: 2.5rem 3% 8rem 3%;
        gap: 2rem;
    }

    .cardbox-header {
        align-items: center;
        text-align: center;
    }

    .match-container {
        height: auto;
        padding: 4rem 5%;
    }

    .match-container h2 {
        font-size: 1.6rem;
    }

    .match-items {
        gap: 3rem;
    }

    .match-item img {
        width: 90px;
        height: 90px;
    }

    .cta-container {
        padding: 6rem 5%;
    }

    .cta-container img {
        width: 150px;
    }

    .cta-text h2 {
        font-size: 1.6rem;
    }

    .cta-text p {
        font-size: 0.95rem;
    }

    }

    /* 모바일 (767px 이하) */
    @media (max-width: 767px) {

    .Home-container{
        overflow-x:hidden;
    }

    .hero-text {
        top: 20%;
        left: 5%;
        width: 60%;
    }

    .hero-text h1 {
        font-size: 1.3rem;
    }

    .hero-text p {
        font-size: 0.85rem;
    }

    .hero-btn {
        font-size: 0.8rem;
        padding: 0.6rem 1rem;
    }

    .hero-section img {
        height: 300px;
    }

    .Home-container{
        overflow-x:hidden;
    }

    .hero-text {
        top: 20%;
        left: 5%;
        width: 60%;
    }

    .hero-text h1 {
        font-size: 1.3rem;
    }

    .hero-text p {
        font-size: 0.85rem;
    }

    .hero-btn {
        font-size: 0.8rem;
        padding: 0.6rem 1rem;
    }

    .hero-section img {
        height: 300px;
    }

    .Home-features {
        gap: 1rem;
        height: auto;
        padding: 1.5rem 0;
    }

    .feature-item {
        width: 90px;
        height: 90px;
    }

    .feature-icon {
        width: 55px;
        height: 55px;
    }

    .feature-item p {
        font-size: 0.7rem;
    }

    .about-section{
        padding: 1rem 0;
    }

    .about-item {
        flex-direction: column;
        padding: 2rem 5%;
        gap: 1.5rem;
    }

    .about-text {
        width: 100%;
    }

    .about-text h2 {
        font-size: 1.3rem;
    }

    .about-text p,
    .about-text li {
        font-size: 0.9rem;
    }

    .about-image{
        order: 1;
    }

    .about-image img {
        width: 100%;
        height: 200px;
    }

    .production-container {
        padding: 3rem 5% 7rem 5%;
    }

    .production-img {
        flex-direction: column;
        align-items: center;
        gap: 5rem;
    }

    .production-card {
        width: 80%;
        height: 220px;
    }

    .production-img img {
        width: 100%;
        height: 220px;
    }

    .production-text p {
        font-size: 1.3rem;
    }

    .video-section hr {
        width: 150px;
    }

    .video-section h2 {
        font-size: 1.3rem;
    }

    .video-wrapper {
        width: 90%;
    }

    .section-bridge {
        padding: 2rem 0 0.5rem 0;
    }

    .section-bridge p {
        font-size: 1.1rem;
    }

    .cardbox-container{
        flex-direction: column;
        align-items: center;
        padding: 4rem 0;
        gap: 2rem;
    }

    .cardbox-header h2 {
        font-size: 1.7rem;
    }

    .cardbox-btn {
        margin-top: 1rem;
        padding: 0.5rem 1.4rem;
        font-size: 0.8rem;
    }

    .cardbox-divider {
        width: 50px;
    }

    .match-container {
        height: auto;
        padding: 3rem 5%;
    }

    .match-container h2 {
        font-size: 1.3rem;
    }

    .match-container > p {
        font-size: 0.9rem;
    }

    .match-items {
        flex-direction: row;
        gap: 1.5rem;
    }

    .match-item img {
        width: 80px;
        height: 80px;
    }

    .match-item h3 {
        font-size: 0.9rem;
    }

    .match-item p {
        font-size: 0.8rem;
    }

    .cta-container {
        padding: 4rem 5%;
    }

    .cta-container img {
        width: 120px;
    }

    .cta-text h2 {
        font-size: 1.3rem;
    }

    .cta-text p {
        font-size: 0.85rem;
        margin-bottom: 2rem;
    }

    .cta-btn {
        font-size: 0.85rem;
        padding: 0.8rem 1.5rem;
    }
    
    }


</style>