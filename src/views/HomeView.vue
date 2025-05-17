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

import { ref } from 'vue'
const toshkent = ref(false)
</script>
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
        <span class="text-[14px]">Foyda</span>
      </div>
      <div class="w-[301px] h-[60px] bg-[#EFEFEF] rounded-[15px] flex items-center justify-center gap-2">
        <img src="/public/tick.png" alt="" width="40px" height="40px">
        <span class="text-[14px]">Zamonaviy
          Bozor</span>
      </div>
      <div class="w-[301px] h-[60px] bg-[#EFEFEF] rounded-[15px] flex items-center justify-center gap-2">
        <img src="/public/star.png" alt="" width="40px" height="40px">
        <span class="text-[14px]">Hafta
          tovarlari</span>
      </div>
    </div>

    <div class="mt-[40px]">
      <h1 class="text-[28px] font-bold">Tavsiya Etamiz</h1>
      <div class="flex items-center justify-between">
        <RouterLink to="fleshka">
          <div class="mt-4">
            <div class="w-[232px]">
              <img class="rounded-[10px]" src="/public/memory stick.jpg" alt="" width="239px" height="309px">
              <i class="fa-regular fa-heart relative right-[-200px] top-[-300px] text-[18px]"></i>
              <h2 class="text-[12px] text-[#1f2026] font-semibold">
                Fleshka 12GB, 32GB, 64GB, 16GB, 8GB
              </h2>
              <span class="text-[11.2px] text-[#7e818c]">⭐ 4.7 (437 sharh)</span> <br>
              <span class="text-[12px] bg-[#FFFF00] p-[2px] rounded-[2px]">2 196 so'm/oyiga</span>
              <div class="mt-[30px] flex items-center justify-between">
                <span>31 000</span>
                <div style="border: 1px solid #7e818c;"
                  class="flex items-center justify-center w-[30px] h-[30px] p-2 rounded-full">
                  <i class="text-[20px] text-gray-700 fa-solid fa-cart-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </RouterLink>
        <RouterLink to="item">
          <div class="mt-4">
            <div class="w-[232px]">
              <img class="rounded-[10px]" src="/public/phone of style.jpg" alt="" width="239px" height="309px">
              <i class="fa-regular fa-heart relative right-[-200px] top-[-300px] text-[18px]"></i>
              <h2 class="text-[12px] text-[#1f2026] font-semibold">Fleshka 12GB, 32GB, 64GB, 16GB, 8GB</h2>
              <span class="text-[11.2px] text-[#7e818c]">⭐ 4.7 (437 sharh)</span> <br>
              <span class="text-[12px] bg-[#FFFF00] p-[2px] rounded-[2px]">2 196 so'm/oyiga</span>
              <div class="mt-[30px] flex items-center justify-between">
                <span>31 000</span>
                <div style="border: 1px solid #7e818c;"
                  class="flex items-center justify-center w-[30px] h-[30px] p-2 rounded-full">
                  <i class="text-[20px] text-gray-700 fa-solid fa-cart-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </RouterLink>
      
        <div class="mt-4">
          <div class="w-[232px]">
            <img class="rounded-[10px]" src="/public/bag.jpg" alt="" width="239px" height="309px">
            <i class="fa-regular fa-heart relative right-[-200px] top-[-300px] text-[18px]"></i>
            <h2 class="text-[12px] text-[#1f2026] font-semibold">
    USB zaryadlash bilan noutbuk uchun shahar ryukzaki
  </h2>
            <span class="text-[11.2px] text-[#7e818c]">⭐ 4.7 (437 sharh)</span> <br>
            <span class="text-[12px] bg-[#FFFF00] p-[2px] rounded-[2px]">2 196 so'm/oyiga</span>
            <div class="mt-[30px] flex items-center justify-between">
              <span>31 000</span>
              <div style="border: 1px solid #7e818c;"
                class="flex items-center justify-center w-[30px] h-[30px] p-2 rounded-full">
                <i class="text-[20px] text-gray-700 fa-solid fa-cart-plus"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <div class="w-[232px]">
            <img class="rounded-[10px]" src="/public/laptop of style.jpg" alt="" width="239px" height="309px">
            <i class="fa-regular fa-heart relative right-[-200px] top-[-300px] text-[18px]"></i>
            <h2 class="text-[12px] text-[#1f2026] font-semibold">
    
              Noutbuk va planshet uchun stend, alyuminiy va metaldan qilingan
  
  </h2>
            <span class="text-[11.2px] text-[#7e818c]">⭐ 4.7 (437 sharh)</span> <br>
            <span class="text-[12px] bg-[#FFFF00] p-[2px] rounded-[2px]">2 196 so'm/oyiga</span>
            <div class="mt-[30px] flex items-center justify-between">
              <span>31 000</span>
              <div style="border: 1px solid #7e818c;"
                class="flex items-center justify-center w-[30px] h-[30px] p-2 rounded-full">
                <i class="text-[20px] text-gray-700 fa-solid fa-cart-plus"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <div class="w-[232px]">
            <img class="rounded-[10px]" src="/public/software.jpg" alt="" width="239px" height="309px">
            <i class="fa-regular fa-heart relative right-[-200px] top-[-300px] text-[18px]"></i>
            <h2 class="text-[12px] text-[#1f2026] font-semibold">Fleshka 12GB, 32GB, 64GB, 16GB, 8GB</h2>
            <span class="text-[11.2px] text-[#7e818c]">⭐ 4.7 (437 sharh)</span> <br>
            <span class="text-[12px] bg-[#FFFF00] p-[2px] rounded-[2px]">2 196 so'm/oyiga</span>
            <div class="mt-[30px] flex items-center justify-between">
              <span>31 000</span>
              <div style="border: 1px solid #7e818c;"
                class="flex items-center justify-center w-[30px] h-[30px] p-2 rounded-full">
                <i class="text-[20px] text-gray-700 fa-solid fa-cart-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <button @click="toshkent = !toshkent">click</button>
  <div v-show="toshkent" class="w-[300px] h-[300px]  bg-red-500 absolute">

  </div>
</template>

