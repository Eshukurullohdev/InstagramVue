<template>
  <Menu />
  <main>
    <div class="container_large mt-4">
      <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }" :pagination="{
      clickable: true,
    }" :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide>
          <img src="/public/banner1.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="/public/banner2.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="/public/banner3.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="/public/banner1.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="/public/banner1.jpg" alt="">
        </swiper-slide>
      </swiper>
    </div>
  </main>
</template>
<script setup>
import Menu from './Menu.vue';
// Import Swiper Vue.js components
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "@/assets/main.css";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

defineProps({
  components: {
    Swiper,
    SwiperSlide,
  },
});
const modules = [Autoplay, Pagination, Navigation];
</script>