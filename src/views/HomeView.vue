<template>
  <Menu />
  <main class="container_large">
    <div class="container_large mt-4">
      <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }" :pagination="{
      clickable: true,
    }" :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide>
          <img src="/public/banner2.jpg" alt="">
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

    <div class="mt-4 flex items-center justify-between">
        <div class="w-[301px] h-[60px] bg-[#EFEFEF] rounded-[15px] flex items-center justify-center gap-2">
          <img src="/public/baby.png" alt="" width="40px" height="40px">
          <span class="text-[14px]">Bolalar o'yinchog'i</span>
        </div>
        <div class="w-[301px] h-[60px] bg-[#EFEFEF] rounded-[15px] flex items-center justify-center gap-2">
          <img src="/public/closes.png" alt="" width="40px" height="40px">
          <span class="text-[14px]">Bolalar o'yinchog'i</span>
        </div>
        <div class="w-[301px] h-[60px] bg-[#EFEFEF] rounded-[15px] flex items-center justify-center gap-2">
          <img src="/public/tick.png" alt="" width="40px" height="40px">
          <span class="text-[14px]">Bolalar o'yinchog'i</span>
        </div>
        <div class="w-[301px] h-[60px] bg-[#EFEFEF] rounded-[15px] flex items-center justify-center gap-2">
          <img src="/public/star.png" alt="" width="40px" height="40px">
          <span class="text-[14px]">Bolalar o'yinchog'i</span>
        </div>
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