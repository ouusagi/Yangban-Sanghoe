<template>
  <div class="product-detail-container">

    <div class="product-detail-box">

      <div class="product-img-box">
        <div class="img-wrapper">
          <div class="spinner1_box" v-if="!isMainLoaded">
            <div class="spinner"></div>
          </div>
          <img :src="dbData?.photo" alt="양반상회 제품 사진" @load="isMainLoaded = true"/>
          <div class="img-badge">PREMIUM</div>
        </div>
      </div>

      <div class="product-info-box">

        <span class="category-tag"># {{dbData?.category}}</span>
        <h2 class="product-name">{{dbData?.name}}</h2>
        <div class="divider-line"></div>

        <div class="price-section">
          <span class="price">{{dbData?.price?.toLocaleString()}}원</span>
        </div>

        <p class="shipping-info">
          <span class="shipping-icon">🚚</span>
          50,000원 이상 구매 시 배송비 무료
        </p>

        <div class="divider-line"></div>

        <p class="product-desc">{{dbData?.info}}</p>

        <div class="btn-buy">
          <a href="https://smartstore.naver.com/yangbanstore/products/13351730538">네이버에서 구매하기</a>
        </div>

      </div>

    </div>

    <div class="tab-container">

    <div class="tab-container-box">
      <button @click="activeTab = 1" class="tab-btn" :class="{active1 : activeTab === 1}">상세정보</button>
      <button @click="activeTab = 2" class="tab-btn" :class="{active2 : activeTab === 2}">배송/교환</button>
    </div>

    <div class="spinner2_box" v-if="!isDetailLoaded">
        <div class="spinner"></div>
    </div>
    <img v-if="activeTab === 1" :src="dbData?.infoimg" alt="상세정보 이미지" @load="isDetailLoaded = true">
    <div class="tab2-box">
      <p v-if="activeTab === 2" class="tab2-info" v-for="(items,i) in notice" :key="i">{{ items }}</p>
    </div>
    <span>마지막 페이지 입니다.</span>

    </div>


  </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';


export default {

  setup() {

    const dbData = ref(null)
    const route = useRoute()
    const id = route.params.id
    const isMainLoaded = ref(false)
    const isDetailLoaded = ref(false)
    const activeTab = ref(1)
    const notice = ['- 기본 배송료는 3,000원 입니다','- 도서, 산간, 오지 일부지역은 배송비가 추가됩니다',
                    '- 50,000원 이상 구매시 무료배송 됩니다.', '- 배송기간은 제품 주문 후 2-3일 소요예정입니다.',
                    '- 상품의 가치가 훼손된 경우 반품/교환이 어려울 수 있습니다.','- 임의로 반품하시는 경우 확인이 어려울 수 있습니다.'
                   ]

    onMounted(async ()=>{
        try {
            const res = await axios.get(`/api/products/${id}`)
            dbData.value = res.data.products
        } 
        
        catch (error) {
            console.log(error)
            return   
        }
    })
    
    return{
        dbData,isMainLoaded,isDetailLoaded,activeTab,notice
    }
  },
};

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;500;600&family=Noto+Sans+KR:wght@300;400;500&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.product-detail-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: #fdfaf5;
  font-family: "Noto Sans KR", sans-serif;
}

.product-detail-box {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem 3rem;
  gap: 5rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.product-img-box {
  flex-shrink: 0;
}

.img-wrapper {
  position: relative;
  width: 460px;
}

.img-wrapper img {
  width: 100%;
  height: 460px;
  object-fit: cover;
  display: block;
  border-radius: 2px;
  filter: brightness(0.97);
}

.spinner1_box,.spinner2_box{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 9999;
}

.spinner {
  width: 2rem;
  height: 2rem;
  border: 0.25em solid #ccc;
  border-top-color: #333;
  border-radius: 50%;
  animation: spin 0.75s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.img-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  background-color: #2c1f0e;
  color: #e8d5a3;
  font-size: 10px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;
  letter-spacing: 3px;
  padding: 6px 12px;
  border-radius: 1px;
}

.product-info-box {
  flex: 1;
  position: relative;
  max-width: 480px;
  height: 460px;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.category-tag {
  font-size: 12px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;
  color: #9c7e52;
  letter-spacing: 1px;
  display: block;
  margin-bottom: 14px;
}

.product-name {
  font-family: "Noto Serif KR", serif;
  font-size: 2rem;
  font-weight: 500;
  color: #2c1f0e;
  line-height: 1.3;
  letter-spacing: -0.5px;
  margin-bottom: 20px;
}

.divider-line {
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, #c9a96e, transparent);
  margin-bottom: 20px;
}

.price-section {
  margin-bottom: 14px;
}

.price {
  font-family: "Noto Serif KR", serif;
  font-size: 1.6rem;
  font-weight: 600;
  color: #2c1f0e;
  letter-spacing: -0.5px;
}

.shipping-info {
  font-size: 12.5px;
  color: #9c7e52;
  font-weight: 300;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 20px;
  padding: 10px 14px;
  background-color: #f5edd8;
  border-left: 2px solid #c9a96e;
  border-radius: 1px;
}

.shipping-icon {
  font-size: 13px;
}

.product-desc {
  font-size: 14px;
  color: #5c4a32;
  line-height: 1.9;
  font-weight: 300;
  padding: 10px 0;
}

.btn-buy {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 16px 0;
  background-color: #03C75A;
  color: #ffffff;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: 1px;
  transition: background-color 0.25s ease;
  border: none;
}

.btn-buy:hover {
  background-color: #02b350;
}

.tab-container {
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding-bottom: 6rem;
}

.tab-container-box {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  border-top: 1px solid #e0cfa8;
  margin-top: 2rem;
}

.tab-btn {
  flex: 1;
  padding: 18px 0;
  font-size: 13.5px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;
  letter-spacing: 0.5px;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  color: #a89070;
  transition: all 0.2s ease;
}

.tab-btn:hover {
  color: #2c1f0e;
}

.tab-btn.active1,
.tab-btn.active2 {
  color: #2c1f0e;
  border-bottom: 2px solid #2c1f0e;
  font-weight: 500;
  cursor: pointer;
}

.tab-container span{
    text-align: center;
    padding: 1rem 0;
    background-color: #f5edd8;
    color: #9c7e52;
}

.tab2-box{
  padding: 5rem 0;
}

.tab2-info{
  text-align: center;
  padding: 0.5rem 0;
  letter-spacing: 1.2px;
  color: #9c7e52;
}

/* 태블릿 (1024px 이하) */
@media (max-width: 1024px) {
.product-detail-box {
  gap: 3rem;
  padding: 3rem 2rem 2rem;
  align-items: stretch;
}

.img-wrapper {
  width: 380px;
}

.img-wrapper img {
  height: 100%;
  min-height: 340px;
  object-fit: cover;
}

.product-info-box {
  height: auto;     
  align-self: stretch;
}

.product-name {
  font-size: 1.6rem;
}

.price {
  font-size: 1.3rem;
}

.btn-buy {
  position: static;
  margin-top: auto;
  width: 100%;
  display: block;
}
}

/* 모바일 (767px 이하) */
@media (max-width: 767px) {
.product-detail-box {
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.2rem;
  gap: 1.5rem;
}

.img-wrapper {
  width: 100%;
}

.img-wrapper img {
  height: 320px;
}

.product-info-box {
  max-width: 100%;
  width: 100%;
  height: auto;
  padding-bottom: 0rem;
}

.product-name {
  font-size: 1.4rem;
}

.price {
  font-size: 1.2rem;
}

.btn-buy {
  position: static;
  margin-top: 1.5rem;
  width: 100%;
  display: block;
  padding: 16px 0;
}

.btn-buy a {
  display: block;
  color: #ffffff;
  text-decoration: none;
}

.tab2-box {
  padding: 2.5rem 1rem;
}
}

</style>
