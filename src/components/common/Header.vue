<template>
    <div class="header-container">

        <div class="header-brand">
            <router-link to="/">양반상회</router-link>
            <!-- <img src="/public/yangban_logo.jpeg" alt="brand-logo-image"> -->
        </div>

        <div class="hamburger" @click="toggleMenu">
            <span :class="{open: isOpen}"></span>
            <span :class="{open: isOpen}"></span>
            <span :class="{open: isOpen}"></span>
        </div>

        <div class="header-list" :class="{open: isOpen}">
            <ul>
            <li @click="closeMenu"><router-link to="/">홈</router-link></li>
            <li @click="closeMenu"><router-link to="/product-list">상품목록</router-link></li>
            <li @click="closeMenu"><router-link to="/brandstory">브랜드 이야기</router-link></li>
            <li @click="closeMenu"><router-link to="/recipe">레시피</router-link></li>
            <!-- <li @click="closeMenu"><router-link to="contact">문의하기</router-link></li> -->
            </ul>
        </div>

    </div>
</template>


<script>
export default {
    data(){
        return{
            isOpen: false
        }
    },

    methods:{
        toggleMenu(){
            this.isOpen = !this.isOpen
        },
        closeMenu(){
            this.isOpen = false
        }
    },


    
}
</script>


<style scoped>
    @font-face {
    font-family: 'Shilla';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/Shilla_CultureM-Medium.woff2') format('woff2');
    font-weight: 500;
    font-display: swap;
    }

    :lang(ko) {
    font-family: 'Shilla', sans-serif;
    }

    .header-container{
    display: flex;
    position: fixed;
    z-index: 9999;
    width: 100%;
    height: 5rem;
    justify-content: space-around;
    align-items: center;
    background-color:#F5F0E6;
    padding: 1rem 0;
    }

    /* .header-container img {
    width: 2.5rem;
    object-fit: cover;
    } */

    .header-brand{
    display: flex;
    gap: 1rem;
    align-items: center;
    color: black;
    text-decoration: none;
    transition: color 0.4s ease;
    font-family: 'Shilla', sans-serif;
    font-size: 2.3rem;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
    }

    .header-list ul{
        display: flex;
        gap: 3.5rem;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .header-list li{
        position: relative;
        transition: color 0.2s ease;
        font-family: 'Shilla', sans-serif;
        font-size: 1.2rem;
    }

    .header-list li:hover{
        color: burlywood;
    }

    /* 햄버거 버튼 — 기본은 숨김 */
    .hamburger {
        display: none;
        flex-direction: column;
        gap: 5px;
        cursor: pointer;
        z-index: 10000;
    }

    .hamburger span {
        display: block;
        width: 25px;
        height: 2px;
        background-color: black;
        transition: all 0.3s ease;
        transform-origin: center;
    }

    /* 햄버거 → X 애니메이션 */
    .hamburger span:nth-child(1).open {
        transform: translateY(7px) rotate(45deg);
    }

    .hamburger span:nth-child(2).open {
        opacity: 0;
    }

    .hamburger span:nth-child(3).open {
        transform: translateY(-7px) rotate(-45deg);
    }


    /* 태블릿 (768px ~ 1024px) */
    @media (max-width: 1024px) {
    .header-container {
        padding: 0.8rem 1.5rem;
        justify-content: space-between;
    }

    .header-brand {
        font-size: 1.8rem;
    }

    .header-list ul {
        gap: 2rem;
    }

    .header-list li {
        font-size: 1rem;
    }
}

    /* 모바일 */
    @media (max-width: 767px) {
        .header-container {
            padding: 0 1.5rem;
            justify-content: space-between;
            overflow: visible;
        }

        .header-brand {
            font-size: 1.5rem;
        }

        /* 햄버거 버튼 표시 */
        .hamburger {
            display: flex;
        }

        /* 메뉴 숨김 */
        .header-list {
            display: none;
            position: fixed;
            top: 5rem;
            left: 0;
            width: 100%;
            background-color: #F5F0E6;
            padding: 1rem 0;
            border-top: 1px solid #e0d9c8;
        }

        /* 메뉴 열림 */
        .header-list.open {
            display: block;
        }

        .header-list ul {
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            padding: 1rem 0;
        }

        .header-list li {
            padding: 0.1rem 0;
        }
    }


</style>