<template>
    <div class="Footer-container">


        <span class="footer-divider"></span>
        <div class="Footer-info">
            <!-- <img src="/public/yangban_logo.jpeg" alt="brand-logo-image"> -->
            <p class="Footer-p">양반상회</p>
            <p>전통의 맛을 현대에 담다</p>

            <div class="Footer-btns">
            <a href="https://instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i> Instargram</a>
            <a href="https://facebook.com" target="_blank"><i class="fa-brands fa-facebook"></i> Facebook</a>
            <a href="https://smartstore.naver.com/yangbanstore" target="_blank"><i class="fa-solid fa-store"></i> 스마트스토어</a>
            </div>

        </div>

        <div class="Footer-reserved">
            <p>© 2026 양반상회. All rights reserved.</p>
        </div>

        <span class="footer-divider"></span>

    </div>
</template>


<script>
export default {
    
}
</script>


<style scoped>
    .Footer-container{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 400px;
        background-color: #F5F0E6;
        border-top: 1px solid #D4C5A9;
    }

    .footer-divider{
        width: 500px;
        margin: 2rem 0;
        border: 1px solid #D4C5A9;
    }

    .Footer-info{
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 1.3rem;
        color: #7A6A58;
    }

    /* .Footer-info img{
        width: 4rem;
        object-fit: cover;
        display: block;
        margin: 0 auto;
    } */

    .Footer-p{
        font-family: 'Shilla', sans-serif;
        font-size: 2.3rem;
        color: black;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
    }

    .Footer-btns{
        display: flex;
        gap: 1rem;
        justify-content: center;
    }

    .Footer-btns a{
        background-color: transparent;
        border: 1px solid #C4BAA8;
        border-radius: 6px;
        padding: 0.5rem 1.2rem;
        font-size: 0.9rem;
        color: #5A4A38;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .Footer-btns a:hover{
        background-color: #E8E0D0;
        border-color: #A89880;
    }

    .Footer-reserved{
        padding-top: 1.5rem;
        color: #9A8A78;
        font-size: 0.85rem;
    }

    /* 모바일 (767px 이하) */
    @media (max-width: 767px) {

    .Footer-btns a{
        width: 200px;
    }

    .footer-divider {
        width: 60%;
    }
    
    .Footer-btns {
        flex-direction: column;
        align-items: center;
    }
}

</style>