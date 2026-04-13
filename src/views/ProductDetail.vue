<template>
  <div class="product-detail-container">

    <div class="product-detail-box">

      <div class="product-img-box">
        <div class="img-wrapper">
          <img :src="dbData?.photo" alt="양반상회 제품 사진" />
          <div class="img-badge">PREMIUM</div>
        </div>
      </div>

      <div class="product-info-box">

        <span class="category-tag"># {{dbData?.category}}</span>
        <h2 class="product-name">{{dbData?.name}}</h2>
        <div class="divider-line"></div>

        <div class="price-section">
          <span class="price">{{dbData?.price.toLocaleString()}}원</span>
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
      <button class="tab-btn active">상세정보</button>
      <button class="tab-btn">반품/교환</button>
    </div>

    <img src="../assets/김부각_안주이미지.png" alt="상세정보 이미지">
    <span>마지막 페이지 입니다</span>

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
        dbData,
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
  cursor: pointer;
  transition: all 0.2s ease;
}

.tab-btn:hover {
  color: #2c1f0e;
}

.tab-btn.active {
  color: #2c1f0e;
  border-bottom: 2px solid #2c1f0e;
  font-weight: 500;
}

.tab-container span{
    text-align: center;
    padding: 1rem 0;
    background-color: #f5edd8;
    color: #9c7e52;
}

</style>
