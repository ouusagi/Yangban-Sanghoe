<template>
    <div class="product_list_container">

        <div class="product_list_header">
            <p>상품목록</p>
            <h4>- 양반상회의 정성을 담은 맛 -</h4>

        <div class="category-tabs">
            <hr style="border-color: #C4A882;">
            <button @click="selectedCategory = '전체'">전체</button>
            <button @click="selectedCategory = '부각'">부각</button>
            <button @click="selectedCategory = '튀각'">튀각</button>
            <hr style="border-color: #C4A882;">
        </div>

        </div>

        <div class="cardbox-container">
            <Cardbox v-for="(items,i) in filteredData" :key="i" :transfer="items"/>
        </div>
    
    </div>
</template>


<script>
import Cardbox from '../components/Cardbox.vue';
import { computed, onMounted, ref } from 'vue';
import { useProductStore } from '../stores/product'
import axios from 'axios';

export default {

    components:{
        Cardbox,
    },

    setup(){
        const store = useProductStore()
        const dbData = ref([])
        const selectedCategory = ref('전체')

        onMounted(async()=>{
            try{
                const res = await axios.get('/api/products')
                dbData.value = res.data.products
            }

            catch(err){
                console.log(err)
                return
            }
        })

        const filteredData = computed(()=>{
            if(selectedCategory.value === '전체'){
                return dbData.value
            }
            return dbData.value.filter((item)=>{
                return selectedCategory.value === item.category
            })
        })

        return{
            store,
            dbData,
            selectedCategory,
            filteredData
        }
    }
    
}
</script>


<style scoped>
    body{
        background-color: #FDFAF5;
    }

    .product_list_container{
        display: flex;
        flex-direction: column;
        height: auto;
        width: 100%;
        justify-content: center;
    }

    .product_list_header{
        text-align: center;
        padding: 5rem 0 3rem 0;
    }

    .product_list_header p{
        text-align: center;
        font-size: 1.8rem;
        font-family: "Noto Serif KR", serif;
        color: #3D2B1F; 
    }

    .product_list_header h4{
        font-size: 0.9rem;
        font-weight: 500;
        line-height: 1.8;
        color: #7A6A58;
        list-style: none;
        padding-top: 0.3rem;
    }

    .category-tabs{
        display: flex;
        justify-content: center;
        gap: 2rem;
        padding-top: 1rem;
    }

    .category-tabs button{
        position: relative;
        border: none;
        background-color: transparent;
        font-size: 1rem;
        cursor: pointer;
        outline: none;
        box-shadow: none;
        color: #8B6F5A;
        padding-bottom: 2px;
        transition: all 0.3s ease;
    }

    .category-tabs button::after{
        content: "";
        height: 2px;
        width: 0;
        left: 0;
        bottom: 0;
        position: absolute;
        background-color: #8B6F5A;
        transition: width 0.3s ease;
    }

    .category-tabs button:hover:after{
        width: 100%;;
    }

    .cardbox-container{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        width: 100%;
        padding: 0rem 0;
        gap: 2.5rem;
        max-width: 1200px;
        margin: 0 auto;
        padding-bottom: 5rem;
    }

    /* 태블릿 (1024px 이하) */
    @media (max-width: 1024px) {
    .cardbox-container {
        grid-template-columns: repeat(3, 1fr);
        max-width: 900px;
        gap: 2rem;
        padding: 0 2rem 5rem 2rem;
    }
    }

    /* 모바일 (767px 이하) */
    @media (max-width: 767px) {
    .cardbox-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        padding: 0 2rem 2rem 2rem;
    }

    .cardbox-container :deep(.card-box) {
        width: 100%;
    }

    .product_list_header {
        padding: 2rem 0 1.5rem 0;
    }

    .product_list_header p {
        font-size: 1.3rem;
    }

    .category-tabs {
        gap: 1.2rem;
    }

    .category-tabs button {
        font-size: 0.9rem;
    }
    }

</style>