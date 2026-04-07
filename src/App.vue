<template>
<Header></Header>

<main>
<RouterView />
</main>

<Footer></Footer>

</template>


<script>
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';
import { RouterView } from 'vue-router';

export default {

  components:{
    Header,
    Footer,
  },
}
</script>


<style>
</style>