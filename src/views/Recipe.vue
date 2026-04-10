<template>
    <div class="recipe-container">
        <div class="recipe-header">
            <p>양반상회를 이용한 레시피</p>
            <h4>- 다양한 방식으로 양반상회를 즐겨보세요 -</h4>
        </div>

        <div class="recipe-info-container">

        <div class="recipe-info-box">
            <img src="../assets/recipe_file/tteokbokki_bugak.png" alt="tteokbokki_bugak_img">
            <div class="recipe-info-text">
                <p>떡볶이 부각</p>
                <h3>떡볶이 김부각 토핑은 바삭한 양반상회의 김부각을 떡볶이 국물에 찍어 먹거나 아예 버무려 먹는 요리입니다.</h3>
                <h4>1. 떡볶이를 완성한 후 김부각을 그릇 옆에 곁들여 냅니다.</h4>
                <h4>2. 떡볶이가 완성되기 1분 전, 김부각을 먹기 좋은 크기로 쪼개어 떡볶이 위에 올립니다.</h4>
                <h4>Tip: 떡볶이 위에 피자치즈를 올릴 때 김부각도 같이 넣어 보세요. 녹은 치즈가 김부각에 달라붙어 고소함이 두 배가 됩니다.</h4>
            </div>
        </div>

        <div class="recipe-info-box">
            <div class="recipe-info-text">
                <p>크렌베리 멸치 주먹밥</p>
                <h3>크랜베리 멸치 주먹밥은 고소하게 튀겨진 멸치튀각의 바삭함과 건크랜베리의 쫀득하고 상큼한 맛이 어우러진 퓨전 주먹밥입니다.</h3>
                <h4>1. 따뜻한 밥에 참기름, 깨소금, 소금을 넣고 주걱으로 칼로 자르듯 섞어줍니다.</h4>
                <h4>2. 준비해둔 크랜베리 멸치튀각을 밥에 넣고 가볍게 버무립니다.</h4>
                <h4>Tip: 완성된 주먹밥을 프라이팬에 앞뒤로 살짝 구워내면 겉은 누룽지처럼 고소하고 속은 촉촉한 '야키 오니기리' 스타일로 즐길 수 있습니다.</h4>
            </div>
            <img src="../assets/recipe_file/Craberry_riceball.png" alt="Craberry_riceball_img">
        </div>

        <div class="recipe-info-box">
            <img src="../assets/recipe_file/salad.png" alt="salad_bugak_img">
            <div class="recipe-info-text">
                <p>뿌리채소 샐러드</p>
                <h3>우엉, 연근, 자색고구마 부각은 모양이 예쁘고 식감이 단단해서 샐러드 토핑으로 썼을 때 고급스러운 느낌을 줍니다.</h3>
                <h4>1. 신선한 채소를 접시에 깔고 그 위에 세 가지 부각을 큼직하게 부셔 올립니다.</h4>
                <h4>2. 먹기 직전에 드레싱을 뿌립니다.</h4>
                <h4>Tip: 부각의 고소함이 채소의 쓴맛을 잡아주고, 자색고구마의 색감이 더해져 시각적으로도 훌륭한 '홈파티용' 메뉴가 됩니다.</h4>
            </div>
        </div>
    </div>

    <div class="recipe-info-btn">
    <router-link to="/product-list" class="recipe-btn">이 레시피에 사용된 상품 보기</router-link>
    </div>


    </div>
</template>


<script>
export default {
    
}
</script>


<style scoped>

    body{
        background-color: #FDFAF5;
    }

    .recipe-container{
        display: flex;
        flex-direction: column;
        height: auto;
        width: 100%;
        justify-content: center;
    }

    .recipe-header{
        text-align: center;
        padding: 5rem 0 3rem 0;
    }

    .recipe-header p{
        text-align: center;
        font-size: 1.8rem;
        font-family: "Noto Serif KR", serif;
        color: #3D2B1F; 
        letter-spacing: -0.5px;
    }

    .recipe-header h4{
        font-size: 0.9rem;
        font-weight: 500;
        line-height: 1.8;
        color: #7A6A58;
        list-style: none;
        padding-top: 0.3rem;
    }

    .recipe-info-container{
        display: flex;
        flex-direction: column;
        gap: 6rem;
        padding: 2rem 0 6rem 0;
    }

    .recipe-info-box{
        display: flex;
        justify-content: center;
        width: 100%;
        height: auto;
        gap: 5rem;
    }

    .recipe-info-box img{
        width: 300px;
        height: 300px;
        border-radius: 9999px;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }

    .recipe-info-box img:hover{
        transform: rotate(2deg);
    }

    .recipe-info-box img:nth-child(2):hover{
        transform: rotate(-2deg);
    }

    .recipe-info-text{
        max-width: 500px;
    }

    .recipe-info-text p{
        font-size: 1.5rem;
        color: #B89B7A;
        margin-bottom: 0.5rem;
        letter-spacing: 1px;
        position: relative;
    }

    .recipe-info-text p::after{
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        background-color: #D6C3A3;
        margin: 0.5rem auto 0;
    }

    .recipe-info-text h3{
        font-size: 1.15rem;
        font-weight: 600;
        color: #2C1E14;
        line-height: 1.6;
        margin-bottom: 1rem;
    }

    .recipe-info-text h4{
        font-size: 0.95rem;
        color: #6F5E4C;
        line-height: 1.8;
    }

    .recipe-info-btn{
        display: flex;
        width: 100%;
        justify-content: center;
        padding-bottom: 6rem;
    }

    .recipe-btn{
        display: inline-block;
        margin-top: 1.5rem;
        padding: 10px 20px;
        border: 1px solid #B89B7A;
        color: #B89B7A;
        font-size: 0.9rem;
        text-decoration: none;
        transition: all 0.3s ease;
    }

    .recipe-btn:hover{
        background-color: #B89B7A;
        color: #fff;
    }

    /* 태블릿 */
    @media (max-width: 1024px){

    .recipe-info-box{
        gap: 3rem;
    }

    .recipe-info-box img{
        width: 260px;
        height: 260px;
    }

    .recipe-info-text{
        max-width: 360px;
    }

    .recipe-info-text h3{
        font-size: 1.2rem;
    }

    .recipe-info-text h4{
        font-size: 0.9rem;
    }
    }

    /* 모바일 */
    @media (max-width: 767px){

    .recipe-header p{
        font-size: 1.6rem;
    }

    .recipe-header h4{
        font-size: 0.85rem;
    }

    .recipe-info-container{
        gap: 4rem;
    }

    .recipe-info-box{
        flex-direction: column;
        gap: 1.5rem;
        text-align: center;
        align-items: center;
    }

    .recipe-info-box:nth-child(even){
        flex-direction: column;
    }

    .recipe-info-box img{
        width: 220px;
        height: 220px;
        order: 1;
    }

    .recipe-info-text{
        max-width: 90%;
        order: 2;
    }

    .recipe-info-text h3{
        font-size: 1.1rem;
    }

    .recipe-info-text h4{
        font-size: 0.85rem;
    }
}

</style>