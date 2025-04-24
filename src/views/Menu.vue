<script setup>
import { ref } from 'vue'

const MenuOchil = ref(false)
</script>

<template>
    <div class="bg-[#F0F2F5] p-2 text-[14px]">
        <div class="container_large flex items-center justify-between w-full">
            <div class="text-[1f2026] flex gap-3 items-center">
                <i class="fa-solid fa-location-dot"></i>
                <span style="border-bottom: 1px solid #1f2026;">
                    Tashkent
                </span>
                <span>Topshirish punkitlari</span>
            </div>
            <div class="flex gap-4">
                <a class="text-[#7f4dff]" href="#">Sotuvchi bo'lish</a>
                <div class="w-[2px] h-[17px] bg-[#DEE0E5]"></div>
                <a class="text-[#7f4dff]" href="#">Topshirish punkitini ochish</a>
                <a class="text-[#4d4f59]" href="#">Savol javob</a>
                <a class="text-[#4d4f59]" href="#">Buyurtmalarim</a>
                <svg data-v-0e8a64de="" width="20" height="20" viewBox="0 0 20 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg" class="ui-icon ">
                    <mask id="mask0_9302_12006" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                        width="20" height="20">
                        <path
                            d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                            fill="#F4F5F5"></path>
                    </mask>
                    <g mask="url(#mask0_9302_12006)">
                        <rect width="20" height="20" fill="#0099B5"></rect>
                        <rect y="13" width="20" height="7" fill="#1EB53A"></rect>
                        <rect y="13" width="20" height="1" fill="#CE1126"></rect>
                        <rect y="6" width="20" height="1" fill="#CE1126"></rect>
                        <rect y="6.5" width="20" height="7" fill="white"></rect>
                    </g>
                </svg>
                <a href="#">O'zbekcha</a>
            </div>
        </div>
    </div>
    <div class="container_large mt-4 flex items-center justify-between">
        <div class="flex items-center gap-4">
            <a href="#" class="flex items-center gap-2 select-none">
                <img class="w-[30px] h-[30px] rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jybTGUSvxWxihbZMxwinqDCquA6PkMiC1Q&s"
                    alt="">
                <blockquote class="text-[#2C7AC7] font-bold text-[25px]">
                    Uzum market
                </blockquote>
            </a>
            <button class="py-2 px-4 bg-[#E5E5FF] rounded-[5px] text-[#7F4DFF]">
                <i class="text-[20px] text-[#7F4DFF] fa-brands fa-buffer !mr-2"></i>
                Katalog</button>

            <input class="text-[14px] outline-none w-[400px] h-[40px] p-2  rounded-[4px] border-[1px] border-[#DEE0E5]"
                type="text" placeholder="Mahsulat va turkumlarni izlash">

            <div
                class="w-[80px] h-[39px] bg-[#EDEFF2] flex items-center justify-center rounded-r-[4px] cursor-pointer relative right-[96px]">
                <i class="fa-solid fa-search"></i>
            </div>
        </div>

        <div class="flex items-center gap-4">
            <div class="flex items-center gap-3 rounded-[5px] hover:bg-[#B2B2B2] hover:cursor-pointer p-3">
                <i class="text-[] fa-regular fa-user"></i>
                <span class="text-[14px]">Shukurullloh</span>
            </div>
            <div class="flex items-center gap-3 rounded-[5px] hover:bg-[#B2B2B2] hover:cursor-pointer p-3">
                <i class="text-[] fa-regular fa-heart"></i>
                <span class="text-[14px]">Saralan</span>
            </div>
            <div class="flex items-center gap-3 rounded-[5px] hover:bg-[#B2B2B2] hover:cursor-pointer p-3">
                <i class="text-[] fa-solid fa-store"></i>
                <span class="text-[14px]">Shukurullloh</span>
            </div>
        </div>
    </div>

    <div class="container_large mt-6 flex items-center">
        <div class="flex items-center gap-2">
            <img class="w-[24px] h-[24px]" src="/public/nav_logo.png" alt="">
            <a class="text-[12px] font-bold" href="#">Hafta tovarlari</a>
        </div>
        <div class="text-[14px] text-[#4d4f59] flex gap-[27px] ml-[130px]">
            <a href="#">Elektronika</a>
            <a href="#">Maishiy texnika</a>
            <a href="#">Kiyim</a>
            <a href="#">Poyabzallar</a>
            <a href="#">Go'zalik va parvarish</a>
            <a href="#">Salomatlik</a>
            <a href="#">Uy-ro'zg'or buyumlari</a>
            <a href="#">Qurulush va taminlash</a>
            <a @click="MenuOchil = !MenuOchil" href="#">Yana <i class="fa-solid fa-chevron-down"></i></a>
        </div>
    </div>
    <div v-if="MenuOchil" class="container_large w-full h-[600px] bg-white relative bottom-[40px]">
        <i @click="MenuOchil = !MenuOchil" class="fa-solid fa-xmark cursor-pointer relative left-[97%] top-[1%] text-[22px] hover:bg-[#F0F2F5] p-3 rounded-full"></i>
        <div>
            <div class="flex items-center justify-between w-[263px]">
                <div class="flex items-center gap-2">
                    <img width="32px" height="32px" src="https://storage.yandexcloud.net/um-prod-static/fast_categories/nasiya210425.png" alt="">
                    <span class="text-[14px] font-semibold hover:text-[#2C7AC7]">Nasiya Foydaliroq</span>
                </div>
                <i class="text-[12px] fa-solid fa-chevron-right"></i>
            </div>
            <div class="flex items-center justify-between w-[263px] mt-4">
                <div class="flex items-center gap-2">
                    <img width="32px" height="32px" src="https://static.uzum.uz/fast_categories/Topsales.png" alt="">
                    <span class="text-[14px] font-semibold hover:text-[#2C7AC7]">Hafta Tovarlari</span>
                </div>
                <i class="text-[12px] fa-solid fa-chevron-right"></i>
            </div>
            <div class="flex items-center justify-between w-[263px] mt-4">
                <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M3 11C3 6.02944 7.02944 2 12 2C16.9706 2 21 6.02944 21 11V16H19V11C19 7.13401 15.866 4 12 4C8.13401 4 5 7.13401 5 11V16H3V11Z" fill="#76797F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5 13C3.89543 13 3 13.8954 3 15V19C3 20.1046 3.89543 21 5 21H7C8.10457 21 9 20.1046 9 19V15C9 13.8954 8.10457 13 7 13H5ZM17 13C15.8954 13 15 13.8954 15 15V19C15 20.1046 15.8954 21 17 21H19C20.1046 21 21 20.1046 21 19V15C21 13.8954 20.1046 13 19 13H17Z" fill="#76797F"></path></svg>
                    <span class="text-[14px] font-semibold hover:text-[#2C7AC7]">Elektronika</span>
                </div>
                <i class="text-[12px] fa-solid fa-chevron-right"></i>
            </div>
        </div>
    </div>
</template>
