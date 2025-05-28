<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';

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
                <RouterLink to="items">

                    <span>Topshirish punkitlari</span>
                </RouterLink>
            </div>
            <div class="flex gap-4">
                <RouterLink to="/sotuvchi">
                    <a class="text-[#7f4dff]" href="#">Sotuvchi bo'lish</a>
                </RouterLink>
                <div class="w-[2px] h-[17px] bg-[#DEE0E5]"></div>
                <RouterLink to="/punkit">
                    <a class="text-[#7f4dff]" href="#">Topshirish punkitini ochish</a>
                </RouterLink>
                 <RouterLink to="/savol">
                      <a class="text-[#4d4f59]" href="#">Savol javob</a>
                </RouterLink>
              
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
            <RouterLink to="/">
             
                <a href="#" class="flex items-center gap-2 select-none">
                    <img class="w-[30px] h-[30px] rounded-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jybTGUSvxWxihbZMxwinqDCquA6PkMiC1Q&s"
                        alt="">
                    <blockquote class="text-[#2C7AC7] font-bold text-[25px]">
                        Uzum market
                    </blockquote>
                </a>
            </RouterLink>
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
            <RouterLink to="/login">
                <div class="flex items-center gap-3 rounded-[5px] hover:bg-[#B2B2B2] hover:cursor-pointer p-3">
                    <i class="text-[] fa-regular fa-user"></i>
                    <span class="text-[14px]">Kirish</span>
                </div>
            </RouterLink>
            <RouterLink to="/saralangan">
                <div class="flex items-center gap-3 rounded-[5px] hover:bg-[#B2B2B2] hover:cursor-pointer p-3">
                    <i class="text-[] fa-regular fa-heart"></i>
                    <span class="text-[14px]">Saralangan</span>
                </div>
            </RouterLink>
            <RouterLink to="/savat">
                <div class="flex items-center gap-3 rounded-[5px] hover:bg-[#B2B2B2] hover:cursor-pointer p-3">
                    <i class="text-[] fa-solid fa-store"></i>
                    <span class="text-[14px]">Savat</span>
                </div>
            </RouterLink>
        </div>
    </div>

    <div class="container_large mt-6 flex items-center">
        <div class="flex items-center gap-2">
            <img class="w-[24px] h-[24px]" src="/public/nav_logo.png" alt="">
            <a class="text-[12px] font-bold" href="#">Hafta tovarlari</a>
        </div>
        <div class="text-[14px] text-[#4d4f59] flex gap-[27px] ml-[130px]">
            <RouterLink to="/elektra">
                <a href="#">Elektronika</a>
            </RouterLink>
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
    <div v-if="MenuOchil" class="container_large w-full h-auto bg-[white] relative bottom-[40px] flex">
        <i @click="MenuOchil = !MenuOchil"
            class="fa-solid fa-xmark cursor-pointer relative left-[97%] top-[1%] text-[22px] hover:bg-[#f0f2f5] p-3 rounded-full"></i>
        <div>
            <div class="flex items-center justify-between w-[253px]">
                <div class="flex items-center gap-2">
                    <img width="32px" height="32px"
                        src="https://storage.yandexcloud.net/um-prod-static/fast_categories/nasiya210425.png" alt="">
                    <span class="text-[14px] font-semibold hover:text-[#2c7ac7]">Nasiya foydaliroq</span>
                </div>
                <i class="text-[12px] fa-solid fa-chevron-right"></i>
            </div>
            <div class="flex items-center justify-between w-[253px] mt-4">
                <div class="flex items-center gap-2">
                    <img width="32px" height="32px" src="https://static.uzum.uz/fast_categories/Topsales.png" alt="">
                    <span class="text-[14px] font-semibold hover:text-[#2c7ac7]">Nasiya foydaliroq</span>
                </div>
                <i class="text-[12px] fa-solid fa-chevron-right"></i>
            </div>
            <div class="flex items-center justify-between w-[253px] mt-4">
                <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd"
                            d="M3 11C3 6.02944 7.02944 2 12 2C16.9706 2 21 6.02944 21 11V16H19V11C19 7.13401 15.866 4 12 4C8.13401 4 5 7.13401 5 11V16H3V11Z"
                            fill="#76797F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M5 13C3.89543 13 3 13.8954 3 15V19C3 20.1046 3.89543 21 5 21H7C8.10457 21 9 20.1046 9 19V15C9 13.8954 8.10457 13 7 13H5ZM17 13C15.8954 13 15 13.8954 15 15V19C15 20.1046 15.8954 21 17 21H19C20.1046 21 21 20.1046 21 19V15C21 13.8954 20.1046 13 19 13H17Z"
                            fill="#76797F"></path>
                    </svg>
                    <span class="text-[14px] font-semibold hover:text-[#2c7ac7]">Elektronika</span>
                </div>
                <i class="text-[12px] fa-solid fa-chevron-right"></i>
            </div>
            <div class="flex items-center justify-between w-[253px] mt-4">
                <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.75" fill-rule="evenodd" clip-rule="evenodd"
                            d="M7 18C5.89543 18 5 18.8954 5 20V22H19V20C19 18.8954 18.1046 18 17 18H7ZM12 21C12.5523 21 13 20.5523 13 20C13 19.4477 12.5523 19 12 19C11.4477 19 11 19.4477 11 20C11 20.5523 11.4477 21 12 21Z"
                            fill="#6226D9"></path>
                        <path opacity="0.25"
                            d="M13 20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20C11 19.4477 11.4477 19 12 19C12.5523 19 13 19.4477 13 20Z"
                            fill="#6226D9"></path>
                        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd"
                            d="M5 3C3.89543 3 3 3.89543 3 5V10C3 11.1046 3.89543 12 5 12H7V17H17L19 3H7H5ZM7 5H5V10H7V5Z"
                            fill="#6226D9"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M17.8571 11L17.7143 12H12V11H17.8571ZM18.2857 8L18.1429 9H12V8H18.2857ZM18.7143 5L18.5714 6H12V5H18.7143Z"
                            fill="#6226D9"></path>
                    </svg>
                    <span class="text-[14px] font-semibold hover:text-[#2c7ac7]">Maishiy tehnika</span>
                </div>
                <i class="text-[12px] fa-solid fa-chevron-right"></i>
            </div>
            <div class="flex items-center justify-between w-[253px] mt-4">
                <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.75" fill-rule="evenodd" clip-rule="evenodd"
                            d="M7.99963 3H5V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V3H16.0004C15.0882 4.21445 13.6358 5 12 5C10.3642 5 8.91184 4.21445 7.99963 3Z"
                            fill="#1AB2FF"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M1.89431 4.55279L4.99989 3V9.25L4.39431 9.55279C3.90033 9.79978 3.29966 9.59955 3.05267 9.10557L1.4471 5.89443C1.20011 5.40045 1.40034 4.79978 1.89431 4.55279ZM22.1053 4.55279L18.9998 3V9.25L19.6053 9.55279C20.0993 9.79978 20.7 9.59955 20.947 9.10557L22.5525 5.89443C22.7995 5.40045 22.5993 4.79978 22.1053 4.55279Z"
                            fill="#1AB2FF"></path>
                    </svg>
                    <span class="text-[14px] font-semibold hover:text-[#2c7ac7]">Kiyim</span>

                </div>
                <i class="text-[12px] fa-solid fa-chevron-right"></i>
            </div>
            <div class="flex items-center justify-between w-[253px] mt-4">
                <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.00488 16.2129C2.3949 16.3047 2.79664 16.3939 3.50463 16.5171C4.92167 16.7635 6.89216 17.0097 9.10646 17.0097H21.6064C21.6064 17.5619 21.1587 18.0097 20.6064 18.0097H9.10646C6.82076 18.0097 4.79125 17.7558 3.33329 17.5023C2.60379 17.3754 2.41174 17.293 2.00488 17.1973V16.2129Z"
                            fill="#FF1919"></path>
                        <path opacity="0.25"
                            d="M3.33305 16.5024C4.79101 16.7559 6.82052 17.0098 9.10622 17.0098H21.6064V15.0098C15.362 15.0098 9.72082 16.5983 3.50439 15.5172C2.79639 15.394 2.21582 15.2598 2.21582 15.2598L2.00879 16.2168C2.41565 16.3125 2.60354 16.3755 3.33305 16.5024Z"
                            fill="#FF1919"></path>
                        <path opacity="0.75" fill-rule="evenodd" clip-rule="evenodd"
                            d="M2.21143 15.264C2.34012 14.784 2.60579 14.2594 3.10651 14.0091L3.10651 14.0099C3.10651 14.1765 3.50651 14.5099 5.10651 14.5099H8.36854C8.72227 14.5099 8.9636 14.1526 8.83223 13.8242L8.13284 12.0757C10.5602 11.1222 12.9662 10.0704 13.1065 9.50906C13.6065 7.50928 14.6065 6.50905 15.1065 6.00906C15.7649 5.35063 17.3464 6.55712 18.1965 7.20561L18.1965 7.20562L18.1965 7.20564C18.3671 7.33578 18.5082 7.44345 18.6065 7.50906C18.807 7.64287 19.1354 7.81662 19.4893 8.00383C20.2406 8.40125 21.1065 8.85934 21.1065 9.12486C21.1065 9.27507 21.1805 9.66244 21.2715 10.1392L21.2715 10.1392L21.2715 10.1393C21.4172 10.9021 21.6065 11.8939 21.6065 12.5093V15.0131C19.4405 15.0415 17.2863 15.2476 15.1366 15.4534H15.1366C11.2596 15.8244 7.3969 16.1941 3.50464 15.5172C2.99707 15.4289 2.56122 15.3407 2.21143 15.264ZM18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z"
                            fill="#FF1919"></path>
                        <path opacity="0.25"
                            d="M5.10645 14.5097C3.50645 14.5097 3.10645 14.1764 3.10645 14.0097L8.13379 12.0796L8.83195 13.8239C8.96341 14.1523 8.72208 14.5097 8.3683 14.5097H5.10645Z"
                            fill="#FF1919"></path>
                        <path opacity="0.25"
                            d="M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z"
                            fill="#FF1919"></path>
                    </svg> <span class="text-[14px] font-semibold hover:text-[#2c7ac7]">Poyabzallar</span>
                </div>
                <i class="text-[12px] fa-solid fa-chevron-right"></i>
            </div>
            <div class="flex items-center justify-between w-[253px] mt-4">
                <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.75" fill-rule="evenodd" clip-rule="evenodd"
                            d="M8 6C6.34315 6 5 7.34315 5 9V17C5 15.3431 6.34315 14 8 14H16C17.6569 14 19 15.3431 19 17V9C19 7.34315 17.6569 6 16 6H8Z"
                            fill="#FF9500"></path>
                        <path opacity="0.5"
                            d="M5 17C5 15.3431 6.34315 14 8 14H16C17.6569 14 19 15.3431 19 17V19C19 20.6569 17.6569 22 16 22H8C6.34315 22 5 20.6569 5 19V17Z"
                            fill="#FF9500"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6H14C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6H8ZM5 11.1709C3.83481 11.5827 3 12.694 3 14.0002V18.0002C3 19.1048 3.89543 20.0002 5 20.0002H5.17071C5.06015 19.6874 5 19.3508 5 19.0002V11.1709ZM18.8293 20.0002H19C20.1046 20.0002 21 19.1048 21 18.0002V14.0002C21 12.694 20.1652 11.5827 19 11.1709V19.0002C19 19.3508 18.9398 19.6874 18.8293 20.0002ZM11 8C10.4477 8 10 8.44772 10 9V10C10 10.5523 10.4477 11 11 11H13C13.5523 11 14 10.5523 14 10V9C14 8.44772 13.5523 8 13 8H11Z"
                            fill="#FF9500"></path>
                    </svg> <span class="text-[14px] font-semibold hover:text-[#2c7ac7]">Aksessuarlar</span>
                </div>
                <i class="text-[12px] fa-solid fa-chevron-right"></i>
            </div>
            <div class="flex items-center justify-between w-[253px] mt-4">
                <div class="flex items-center gap-2">

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd"
                            d="M6.57651 4C6.27224 4 6.0385 4.26949 6.08154 4.57071L7.93868 17.5707C7.97387 17.817 8.18483 18 8.43365 18H15.5664C15.8152 18 16.0261 17.817 16.0613 17.5707L17.1429 10H6.85725L6.57153 8H17.4286L17.9185 4.57071C17.9615 4.26949 17.7278 4 17.4235 4H6.57651Z"
                            fill="#FF3388"></path>
                        <path opacity="0.75" fill-rule="evenodd" clip-rule="evenodd"
                            d="M6.85725 10L6.57153 8H17.4287L17.143 10H6.85725Z" fill="#FF3388"></path>
                        <path d="M9 18H15V20.5C15 21.3284 14.3284 22 13.5 22H10.5C9.67157 22 9 21.3284 9 20.5V18Z"
                            fill="#FF3388"></path>
                    </svg> <span class="text-[14px] font-semibold hover:text-[#2c7ac7]">Poyabzal va parvarish</span>
                </div>
                <i class="text-[12px] fa-solid fa-chevron-right"></i>
            </div>
            <div class="flex items-center justify-between w-[253px] mt-4">
                <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.75" fill-rule="evenodd" clip-rule="evenodd"
                            d="M12 21.4578C12.1915 21.4578 12.383 21.3921 12.5358 21.2605C12.9065 20.9414 13.369 20.5684 13.8889 20.149C16.9501 17.68 22 13.6069 22 9.5C22 6.3 19.45 4 16.5 4C13.65 4 12 6.33398 12 6.33398V21.4578Z"
                            fill="#FF5319"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M12 6.33398C12 6.33398 10.3532 4 7.5 4C4.55 4 2 6.3 2 9.5C2 13.6073 7.05204 17.682 10.1127 20.1505C10.632 20.5693 11.094 20.9419 11.4642 21.2606C11.617 21.3921 11.8085 21.4578 12 21.4578V6.33398Z"
                            fill="#FF5319"></path>
                    </svg> <span class="text-[14px] font-semibold hover:text-[#2c7ac7]">Salomatlik</span>
                </div>
                <i class="text-[12px] fa-solid fa-chevron-right"></i>
            </div>
            <div class="flex items-center justify-between w-[253px] mt-4">
                <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd"
                            d="M9.5 21H14.5C14.2239 21 14 20.7761 14 20.5V15.5C14 15.2239 13.7761 15 13.5 15H10.5C10.2239 15 10 15.2239 10 15.5V20.5C10 20.7761 9.77614 21 9.5 21Z"
                            fill="#FF5319"></path>
                        <path opacity="0.75"
                            d="M4 13L12 6L20 13V20.5C20 20.7761 19.7761 21 19.5 21H14.5C14.2239 21 14 20.7761 14 20.5V15.5C14 15.2239 13.7761 15 13.5 15H10.5C10.2239 15 10 15.2239 10 15.5V20.5C10 20.7761 9.77614 21 9.5 21H4.5C4.22386 21 4 20.7761 4 20.5V13Z"
                            fill="#FF5319"></path>
                        <path
                            d="M2.32678 11.377C2.14614 11.1686 2.16835 10.8533 2.37643 10.6723L11.6725 2.58535C11.8607 2.42165 12.1407 2.42166 12.3289 2.58538L21.6234 10.6723C21.8315 10.8533 21.8537 11.1686 21.6731 11.377L21.0276 12.1216C20.8467 12.3303 20.5307 12.3528 20.3221 12.1717L12.3284 5.23402C12.1404 5.07085 11.861 5.07084 11.673 5.23399L3.67771 12.1717C3.46907 12.3528 3.15314 12.3303 2.9722 12.1216L2.32678 11.377Z"
                            fill="#FF5319"></path>
                    </svg> <span class="text-[14px] font-semibold hover:text-[#2c7ac7]">Uy-ro'zg'or buyumlari</span>
                </div>
                <i class="text-[12px] fa-solid fa-chevron-right"></i>
            </div>
            <div class="flex items-center justify-between w-[253px] mt-4">
                <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M19 4H21C21.5523 4 22 4.44772 22 5V11C22 11.5523 21.5523 12 21 12H13V13H11V11C11 10.4477 11.4477 10 12 10H20V6H19V4Z"
                            fill="#6226D9"></path>
                        <path opacity="0.75"
                            d="M10 14C10 13.4477 10.4477 13 11 13H13C13.5523 13 14 13.4477 14 14V21C14 21.5523 13.5523 22 13 22H11C10.4477 22 10 21.5523 10 21V14Z"
                            fill="#6226D9"></path>
                        <path opacity="0.75"
                            d="M4 3C4 2.44772 4.44772 2 5 2H18C18.5523 2 19 2.44772 19 3V7C19 7.55228 18.5523 8 18 8H5C4.44772 8 4 7.55228 4 7V3Z"
                            fill="#6226D9"></path>
                    </svg> <span class="text-[14px] font-semibold hover:text-[#2c7ac7]">Qurilish va ta'minlash</span>
                </div>
                <i class="text-[12px] fa-solid fa-chevron-right"></i>
            </div>
            <div class="flex items-center justify-between w-[253px] mt-4">
                <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.75" fill-rule="evenodd" clip-rule="evenodd"
                            d="M6 17H3V19C3 19.5523 3.44772 20 4 20H5C5.55228 20 6 19.5523 6 19V17ZM21 17H18V19C18 19.5523 18.4477 20 19 20H20C20.5523 20 21 19.5523 21 19V17Z"
                            fill="#FF1919"></path>
                        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd"
                            d="M6.6845 4C5.84442 4 5.09389 4.52498 4.80579 5.31412L2.70557 11.0669C3.25588 10.4145 4.07944 10 4.99981 10H18.9998C19.9202 10 20.7438 10.4145 21.2941 11.067L19.1939 5.31412C18.9058 4.52499 18.1552 4 17.3152 4H6.6845Z"
                            fill="#FF1919"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M1.84903 9H3.50006L2.77433 10.9884C3.3233 10.3814 4.11711 10 5 10H19C20.6569 10 22 11.3431 22 13V16C22 17.1046 21.1046 18 20 18H4C2.89543 18 2 17.1046 2 16V13C2 12.2316 2.28885 11.5308 2.76389 11H2.34903C2.15965 11 1.98652 10.893 1.90182 10.7236L1.40182 9.72361C1.23559 9.39116 1.47734 9 1.84903 9ZM22.1911 9H20.5401L21.2701 11H21.6911C21.8805 11 22.0536 10.893 22.1383 10.7236L22.6383 9.72361C22.8046 9.39116 22.5628 9 22.1911 9ZM7 14C7 12.8954 6.10457 12 5 12C4.44772 12 4 12.4477 4 13V13.5C4 14.3284 4.67157 15 5.5 15H6.4C6.73137 15 7 14.7314 7 14.4V14ZM17 14C17 12.8954 17.8954 12 19 12C19.5523 12 20 12.4477 20 13V13.5C20 14.3284 19.3284 15 18.5 15H17.6C17.2686 15 17 14.7314 17 14.4V14Z"
                            fill="#FF1919"></path>
                        <path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd"
                            d="M5 12C6.10457 12 7 12.8954 7 14V14.4C7 14.7314 6.73137 15 6.4 15H5.5C4.67157 15 4 14.3284 4 13.5V13C4 12.4477 4.44772 12 5 12ZM19 12C17.8954 12 17 12.8954 17 14V14.4C17 14.7314 17.2686 15 17.6 15H18.5C19.3284 15 20 14.3284 20 13.5V13C20 12.4477 19.5523 12 19 12Z"
                            fill="#FF1919"></path>
                    </svg> <span class="text-[14px] font-semibold hover:text-[#2c7ac7]">Avtotovarlar</span>
                </div>
                <i class="text-[12px] fa-solid fa-chevron-right"></i>
            </div>
            <div class="flex items-center justify-between w-[253px] mt-4">
                <div class="flex items-center gap-2">

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M12 13.25V10.8965C13.1543 10.57 14 9.50878 14 8.25V7.5H9.82843C9.34828 7.5 8.89608 7.61964 8.5 7.83074V8.25C8.5 9.68451 9.59838 10.8625 11 10.9888V13.125L12 13.25ZM3.95923 15.1691C4.41818 14.8619 5.03928 14.9849 5.34649 15.4438C6.78331 17.5903 9.22719 19.0001 11.9999 19.0001C14.7727 19.0001 17.2166 17.5903 18.6534 15.4438C18.9606 14.9849 19.5817 14.8619 20.0406 15.1691C20.4996 15.4763 20.6226 16.0974 20.3154 16.5564C18.5232 19.2338 15.468 21.0001 11.9999 21.0001C8.53185 21.0001 5.4767 19.2338 3.68448 16.5564C3.37726 16.0974 3.50027 15.4763 3.95923 15.1691ZM7.01062 10.0816C7.08521 9.21859 7.5474 8.4664 8.22222 8H7.5C5.567 8 4 9.567 4 11.5V12.5C4 12.7761 4.22386 13 4.5 13H5.5C5.77614 13 6 12.7761 6 12.5V11.5C6 10.8429 6.42248 10.2845 7.01062 10.0816Z"
                            fill="#6226D9"></path>
                        <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd"
                            d="M20.5 5C20.5 5 20.9356 4.56437 20.9936 4.09974C21.0005 4.04494 20.9552 4 20.9 4H17.5C15.567 4 14 5.567 14 7.5V8.25C14 9.50878 13.1543 10.57 12 10.8965V13.25L14 13.5V19H16V13.5C16 13.5 17.5 12.5 17.5 11V7.5L17.8331 7.83307C17.9428 7.94285 18.0256 8.07668 18.0747 8.22395L18.2208 8.66252C18.3803 9.14096 18.8711 9.42578 19.3656 9.32687L20.1961 9.16078C20.6635 9.06729 21 8.65692 21 8.18024V6C21 5.5 20.5 5 20.5 5ZM7 10.3284C7 9.24648 7.6075 8.30642 8.5 7.83074V8.25C8.5 9.68451 9.59838 10.8625 11 10.9888V13.125L10 13L9.5453 14.8188C9.51536 14.9386 9.50786 15.0628 9.52317 15.1854L10 19H8L7.52013 15.161C7.5068 15.0544 7.51075 14.9463 7.53183 14.8409L8 12.5L7.82843 12.3284C7.29799 11.798 7 11.0786 7 10.3284ZM19.5 7C19.7761 7 20 6.77614 20 6.5C20 6.22386 19.7761 6 19.5 6C19.2239 6 19 6.22386 19 6.5C19 6.77614 19.2239 7 19.5 7Z"
                            fill="#6226D9"></path>
                        <path
                            d="M20 6.5C20 6.77614 19.7761 7 19.5 7C19.2239 7 19 6.77614 19 6.5C19 6.22386 19.2239 6 19.5 6C19.7761 6 20 6.22386 20 6.5Z"
                            fill="#6226D9"></path>
                    </svg> <span class="text-[14px] font-semibold hover:text-[#2c7ac7]">Bolalar tovarlari</span>
                </div>
                <i class="text-[12px] fa-solid fa-chevron-right"></i>
            </div>
            <div class="flex items-center justify-between w-[253px] mt-4">
                <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd"
                            d="M22 12.5V12C22 6.47715 17.5228 2 12 2C6.25 2 2 6.75 2 12C2 16.75 5.75 22 12.5 22C13.35 22 14 21.35 14 20.5C14 19.75 13.75 19.375 13.5 19C13.25 18.625 13 18.25 13 17.5C13 16.65 13.65 16 14.5 16H18.5002C20.4332 16 22 14.433 22 12.5ZM8.75 8.5C9.7165 8.5 10.5 7.7165 10.5 6.75C10.5 5.7835 9.7165 5 8.75 5C7.7835 5 7 5.7835 7 6.75C7 7.7165 7.7835 8.5 8.75 8.5ZM7.5 11.7456C7.5 12.7121 6.7165 13.4956 5.75 13.4956C4.7835 13.4956 4 12.7121 4 11.7456C4 10.7791 4.7835 9.99561 5.75 9.99561C6.7165 9.99561 7.5 10.7791 7.5 11.7456ZM20 11.7456C20 12.7121 19.2165 13.4956 18.25 13.4956C17.2835 13.4956 16.5 12.7121 16.5 11.7456C16.5 10.7791 17.2835 9.99561 18.25 9.99561C19.2165 9.99561 20 10.7791 20 11.7456ZM17 6.75C17 7.7165 16.2165 8.5 15.25 8.5C14.2835 8.5 13.5 7.7165 13.5 6.75C13.5 5.7835 14.2835 5 15.25 5C16.2165 5 17 5.7835 17 6.75Z"
                            fill="#FF5319"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M10.5 6.75C10.5 7.7165 9.7165 8.5 8.75 8.5C7.7835 8.5 7 7.7165 7 6.75C7 5.7835 7.7835 5 8.75 5C9.7165 5 10.5 5.7835 10.5 6.75ZM5.75 13.4956C6.7165 13.4956 7.5 12.7121 7.5 11.7456C7.5 10.7791 6.7165 9.99561 5.75 9.99561C4.7835 9.99561 4 10.7791 4 11.7456C4 12.7121 4.7835 13.4956 5.75 13.4956ZM18.25 13.4956C19.2165 13.4956 20 12.7121 20 11.7456C20 10.7791 19.2165 9.99561 18.25 9.99561C17.2835 9.99561 16.5 10.7791 16.5 11.7456C16.5 12.7121 17.2835 13.4956 18.25 13.4956ZM15.25 8.5C16.2165 8.5 17 7.7165 17 6.75C17 5.7835 16.2165 5 15.25 5C14.2835 5 13.5 5.7835 13.5 6.75C13.5 7.7165 14.2835 8.5 15.25 8.5Z"
                            fill="#FF5319"></path>
                    </svg><span class="text-[14px] font-semibold hover:text-[#2c7ac7]">Xobbi va ijod</span>
                </div>

                <i class="text-[12px] fa-solid fa-chevron-right"></i>
            </div>
            <div class="flex items-center justify-between w-[253px] mt-4">
                <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.75" cx="12" cy="12" r="10" fill="#FF9500"></circle>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M4.76542 5.09629C7.0151 5.34322 9.12445 6.05653 10.9947 7.13745C11.6371 5.89872 12 4.49174 12 3C12 2.66204 11.9814 2.32843 11.9451 2.00015C11.9634 2.00005 11.9817 2 12 2C12.6747 2 13.3337 2.06681 13.9709 2.19418C13.9902 2.46028 14 2.72899 14 3C14 4.90142 13.5176 6.69017 12.6684 8.25051C13.83 9.13272 14.8673 10.17 15.7495 11.3316C17.3098 10.4824 19.0986 10 21 10C21.271 10 21.5397 10.0098 21.8058 10.0291C21.9332 10.6663 22 11.3253 22 12C22 12.0183 21.9999 12.0366 21.9998 12.0549C21.6716 12.0186 21.338 12 21 12C19.5083 12 18.1013 12.3629 16.8626 13.0053C17.9435 14.8756 18.6568 16.9849 18.9037 19.2346C18.3288 19.7833 17.6887 20.2642 16.9961 20.6645C16.9402 18.2898 16.2931 16.0615 15.1963 14.121C13.2415 15.772 12 18.241 12 21C12 21.338 12.0186 21.6716 12.0549 21.9998C12.0366 21.9999 12.0183 22 12 22C11.3253 22 10.6663 21.9332 10.0291 21.8058C10.0098 21.5397 10 21.271 10 21C10 17.5453 11.5926 14.4626 14.0836 12.4459C13.3517 11.4989 12.5011 10.6483 11.5541 9.91637C9.53742 12.4074 6.45469 14 3 14C2.72899 14 2.46028 13.9902 2.19418 13.9709C2.06681 13.3337 2 12.6747 2 12C2 11.9817 2.00005 11.9634 2.00015 11.9451C2.32843 11.9814 2.66204 12 3 12C5.759 12 8.22804 10.7585 9.87896 8.80374C7.93848 7.70691 5.71016 7.0598 3.33555 7.00394C3.73579 6.31132 4.21669 5.67115 4.76542 5.09629Z"
                            fill="#FF9500"></path>
                    </svg> <span class="text-[14px] font-semibold hover:text-[#2c7ac7]">Siport va hordiq</span>
                </div>
                <i class="text-[12px] fa-solid fa-chevron-right"></i>
            </div>
            <div class="flex items-center justify-between w-[253px] mt-4">
                <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.75" fill-rule="evenodd" clip-rule="evenodd"
                            d="M8.44444 7C6.22222 7 4 9.1875 4 12.25C4 16.1875 6.22222 21 8.88889 21C9.6229 21 10.2222 20.7348 10.761 20.4964C11.2009 20.3018 11.6005 20.125 12 20.125C12.3995 20.125 12.7991 20.3018 13.239 20.4964C13.7778 20.7348 14.3771 21 15.1111 21C17.7778 21 20 16.1875 20 12.25C20 9.1875 17.7778 7 15.5556 7C14.1943 7 13.5001 7.32834 12.9622 7.58276C12.622 7.74366 12.3444 7.875 12 7.875C11.6556 7.875 11.378 7.74366 11.0378 7.58276C10.4999 7.32834 9.80572 7 8.44444 7Z"
                            fill="#40BF40"></path>
                        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd"
                            d="M14.9998 4C14.5972 4 14.1029 4.2186 13.685 4.68916C13.2751 5.15068 12.9998 5.79279 12.9998 6.5V7.5649C12.9871 7.57089 12.9745 7.57684 12.962 7.58276C12.6218 7.74366 12.3441 7.875 11.9998 7.875C11.6554 7.875 11.3777 7.74366 11.0375 7.58276C11.025 7.57684 11.0124 7.57089 10.9998 7.5649V6.5C10.9998 5.27422 11.4744 4.16632 12.1896 3.36109C12.8967 2.5649 13.9023 2 14.9998 2V4Z"
                            fill="#40BF40"></path>
                        <path
                            d="M9.99976 5.99983C7.39976 5.99983 5.99998 4.6 5.99998 2C8.59976 2 9.99976 3.4 9.99976 5.99983Z"
                            fill="#40BF40"></path>
                    </svg>
                    <span class="text-[14px] font-semibold hover:text-[#2c7ac7]">Oziq-ovqat mahsulotlari</span>
                </div>
                <i class="text-[12px] fa-solid fa-chevron-right"></i>
            </div>
            <div class="flex items-center justify-between w-[253px] mt-4">
                <div class="flex items-center gap-2">

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M10 2C8.48897 2 7.46882 2.54103 6.83144 3.22393C6.52451 3.55279 6.32433 3.89536 6.19898 4.18594C6.08886 4.44122 6 4.74216 6 5C6 5.55228 6.44772 6 7 6C7.52352 6 7.95308 5.5977 7.99641 5.08539C8.00036 5.0707 8.011 5.03468 8.0354 4.97812C8.08192 4.87027 8.16299 4.72846 8.29356 4.58857C8.53118 4.33397 9.01103 4 10 4H10.0117H10.0234H10.0351H10.0468H10.0585H10.0701H10.0817H10.0934H10.105H10.1166H10.1282H10.1398H10.1514H10.1629H10.1745H10.186H10.1975H10.2091H10.2206H10.2321H10.2435H10.255H10.2665H10.2779H10.2893H10.3008H10.3122H10.3236H10.3349H10.3463H10.3577H10.369H10.3804H10.3917H10.403H10.4143H10.4256H10.4368H10.4481H10.4594H10.4706H10.4818H10.493H10.5042H10.5154H10.5266H10.5378H10.5489H10.56H10.5712H10.5823H10.5934H10.6045H10.6155H10.6266H10.6377H10.6487H10.6597H10.6707H10.6817H10.6927H10.7037H10.7146H10.7256H10.7365H10.7474H10.7583H10.7692H10.7801H10.791H10.8019H10.8127H10.8235H10.8343H10.8451H10.8559H10.8667H10.8775H10.8882H10.899H10.9097H10.9204H10.9311H10.9418H10.9525H10.9631H10.9738H10.9844H10.995H11V5H13V4H13.0002H13.0072H13.0142H13.0212H13.0281H13.0351H13.042H13.0489H13.0558H13.0626H13.0695H13.0763H13.0831H13.0899H13.0967H13.1034H13.1102H13.1169H13.1236H13.1303H13.1369H13.1436H13.1502H13.1568H13.1634H13.1699H13.1765H13.183H13.1895H13.196H13.2025H13.2089H13.2154H13.2218H13.2282H13.2345H13.2409H13.2472H13.2535H13.2598H13.2661H13.2724H13.2786H13.2848H13.291H13.2972H13.3034H13.3095H13.3156H13.3217H13.3278H13.3339H13.3399H13.3459H13.3519H13.3579H13.3639H13.3698H13.3758H13.3817H13.3876H13.3934H13.3993H13.4051H13.4109H13.4167H13.4224H13.4282H13.4339H13.4396H13.4453H13.451H13.4566H13.4623H13.4679H13.4734H13.479H13.4846H13.4901H13.4956H13.5011H13.5065H13.512H13.5174H13.5228H13.5282H13.5336H13.5389H13.5442H13.5495H13.5548H13.5601H13.5653H13.5705H13.5757H13.5809H13.5861H13.5912H13.5963H13.6014H13.6065H13.6115H13.6166H13.6216H13.6266H13.6316H13.6365H13.6414H13.6463H13.6512H13.6561H13.661H13.6658H13.6706H13.6754H13.6801H13.6849H13.6896H13.6943H13.699H13.7036H13.7083H13.7129H13.7175H13.722H13.7266H13.7311H13.7356H13.7401H13.7446H13.749H13.7535H13.7579H13.7622H13.7666H13.7709H13.7753H13.7796H13.7838H13.7881H13.7923H13.7965H13.8007H13.8049H13.809H13.8131H13.8172H13.8213H13.8254H13.8294H13.8334H13.8374H13.8414H13.8453H13.8493H13.8532H13.857H13.8609H13.8647H13.8686H13.8724H13.8761H13.8799H13.8836H13.8873H13.891H13.8947H13.8983H13.9019H13.9055H13.9091H13.9126H13.9162H13.9197H13.9231H13.9266H13.93H13.9335H13.9369H13.9402H13.9436H13.9469H13.9502H13.9535H13.9568H13.96H13.9632H13.9664H13.9696H13.9727H13.9758H13.9789H13.982H13.9851H13.9881H13.9911H13.9941H13.9971H14C14.5523 4 15 3.55228 15 3C15 2.44772 14.5523 2 14
 2H13.9971H13.9941H13.9911H13.9881H13.9851H13.982H13.9789H13.9758H13.9727H13.9696H13.9664H13.9632H13.96H13.9568H13.9535H13.9502H13.9469H13.9436H13.9402H13.9369H13.9335H13.93H13.9266H13.9231H13.9197H13.9162H13.9126H13.9091H13.9055H13.9019H13.8983H13.8947H13.891H13.8873H13.8836H13.8799H13.8761H13.8724H13.8686H13.8647H13.8609H13.857H13.8532H13.8493H13.8453H13.8414H13.8374H13.8334H13.8294H13.8254H13.8213H13.8172H13.8131H13.809H13.8049H13.8007H13.7965H13.7923H13.7881H13.7838H13.7796H13.7753H13.7709H13.7666H13.7622H13.7579H13.7535H13.749H13.7446H13.7401H13.7356H13.7311H13.7266H13.722H13.7175H13.7129H13.7083H13.7036H13.699H13.6943H13.6896H13.6849H13.6801H13.6754H13.6706H13.6658H13.661H13.6561H13.6512H13.6463H13.6414H13.6365H13.6316H13.6266H13.6216H13.6166H13.6115H13.6065H13.6014H13.5963H13.5912H13.5861H13.5809H13.5757H13.5705H13.5653H13.5601H13.5548H13.5495H13.5442H13.5389H13.5336H13.5282H13.5228H13.5174H13.512H13.5065H13.5011H13.4956H13.4901H13.4846H13.479H13.4734H13.4679H13.4623H13.4566H13.451H13.4453H13.4396H13.4339H13.4282H13.4224H13.4167H13.4109H13.4051H13.3993H13.3934H13.3876H13.3817H13.3758H13.3698H13.3639H13.3579H13.3519H13.3459H13.3399H13.3339H13.3278H13.3217H13.3156H13.3095H13.3034H13.2972H13.291H13.2848H13.2786H13.2724H13.2661H13.2598H13.2535H13.2472H13.2409H13.2345H13.2282H13.2218H13.2154H13.2089H13.2025H13.196H13.1895H13.183H13.1765H13.1699H13.1634H13.1568H13.1502H13.1436H13.1369H13.1303H13.1236H13.1169H13.1102H13.1034H13.0967H13.0899H13.0831H13.0763H13.0695H13.0626H13.0558H13.0489H13.042H13.0351H13.0281H13.0212H13.0142H13.0072H13.0002H12.9932H12.9861H12.979H12.9719H12.9648H12.9577H12.9506H12.9434H12.9362H12.929H12.9218H12.9146H12.9073H12.9001H12.8928H12.8855H12.8781H12.8708H12.8634H12.8561H12.8487H12.8412H12.8338H12.8264H12.8189H12.8114H12.8039H12.7964H12.7888H12.7813H12.7737H12.7661H12.7585H12.7509H12.7432H12.7356H12.7279H12.7202H12.7125H12.7047H12.697H12.6892H12.6814H12.6736H12.6658H12.6579H12.6501H12.6422H12.6343H12.6264H12.6185H12.6105H12.6026H12.5946H12.5866H12.5786H12.5705H12.5625H12.5544H12.5464H12.5383H12.5301H12.522H12.5139H12.5057H12.4975H12.4893H12.4811H12.4728H12.4646H12.4563H12.448H12.4397H12.4314H12.4231H12.4147H12.4064H12.398H12.3896H12.3811H12.3727H12.3642H12.3558H12.3473H12.3388H12.3303H12.3217H12.3132H12.3046H12.296H12.2874H12.2788H12.2702H12.2615H12.2528H12.2442H12.2355H12.2267H12.218H12.2093H12.2005H12.1917H12.1829H12.1741H12.1653H12.1564H12.1476H12.1387H12.1298H12.1209H12.1119H12.103H12.094H12.0851H12.0761H12.0671H12.058H12.049H12.04H12.0309H12.0218H12.0127H12.0036H11.9944H11.9853H11.9761H11.967H11.9578H11.9485H11.9393H11.9301H11.9208H11.9115H11.9023H11.893H11.8836H11.8743H11.8649H11.8556H11.8462H11.8368H11.8274H11.818H11.8085H11.7991H11.7896H11.7801H11.7706H11.7611H11.7515H11.742H11.7324H11.7229H11.7133H11.7036H11.694H11.6844H11.6747H11.6651H11.6554H11.6457H11.636H11.6262H11.6165H11.6067H11.597H11.5872H11.5774H11.5676H11.5577H11.5479H11.538H11.5281H11.5183H11.5083H11.4984H11.4885H11.4785H11.4686H11.4586H11.4486H11.4386H11.4286H11.4186H11.4085H11.3984H11.3884H11.3783H11.3682H11.358H11.3479H11.3378H11.3276H11.3174H11.3072H11.297H11.2868H11.2766H11.2663H11.2561H11.2458H11.2355H11.2252H11.2149H11.2045H11.1942H11.1838H11.1735H11.1631H11.1527H11.1423H11.1318H11.1214H11.1109H11.1005H11.09H11.0795H11.069H11.0584H11.0479H11.0374H11.0268H11.0162H11.0056H10.995H10.9844H10.9738H10.9631H10.9525H10.9418H10.9311H10.9204H10.9097H10.899H10.8882H10.8775H10.8667H10.8559H10.8451H10.8343H10.8235H10.8127H10.8019H10.791H10.7801H10.7692H10.7583H10.7474H10.7365H10.7256H10.7146H10.7037H10.6927H10.6817H10.6707H10.6597H10.6487H10.6377H10.6266H10.6155H10.6045H10.5934H10.5823H10.5712H10.56H10.5489H10.5378H10.5266H10.5154H10.5042H10.493H10.4818H10.4706H10.4594H10.4481H10.4368H10.4256H10.4143H10.403H10.3917H10.3804H10.369H10.3577H10.3463H10.3349H10.3236H10.3122H10.3008H10.2893H10.2779H10.2665H10.255H10.2435H10.2321H10.2206H10.2091H10.1975H10.186H10.1745H10.1629H10.1514H10.1398H10.1282H10.1166H10.105H10.0934H10.0817H10.0701H10.0585H10.0468H10.0351H10.0234H10.0117H10Z"
                            fill="#1AB2FF"></path>
                        <path opacity="0.5" d="M9 6.5C9
 5.67157 9.67157 5 10.5 5H13.5C14.3284 5 15 5.67157 15 6.5V8H9V6.5Z" fill="#1AB2FF"></path>
                        <path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd"
                            d="M9 8C7.34315 8 6 9.34315 6 11V19C6 20.6569 7.34315 22 9 22H15C16.6569 22 18 20.6569 18 19V11C18 9.34315 16.6569 8 15 8H9ZM12 18C13.6569 18 15 16.6569 15 15C15 13.3431 13.6569 12 12 12C10.3431 12 9 13.3431 9 15C9 16.6569 10.3431 18 12 18Z"
                            fill="#1AB2FF"></path>
                        <path opacity="0.75"
                            d="M15 15C15 16.6569 13.6569 18 12 18C10.3431 18 9 16.6569 9 15C9 13.3431 10.3431 12 12 12C13.6569 12 15 13.3431 15 15Z"
                            fill="#1AB2FF"></path>
                    </svg> <span class="text-[14px] font-semibold hover:text-[#2c7ac7]">Maishiy kimyoviy <br>
                        moddalar</span>
                </div>
                <i class="text-[12px] fa-solid fa-chevron-right"></i>
            </div>
            <div class="flex items-center justify-between w-[253px] mt-4">
                <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd"
                            d="M7 4C5.34315 4 4 5.34315 4 7V18C4 19.6569 5.34315 21 7 21H17C18.6569 21 20 19.6569 20 18V7C20 5.34315 18.6569 4 17 4H7ZM7 11C7 10.4477 7.44772 10 8 10H16C16.5523 10 17 10.4477 17 11C17 11.5523 16.5523 12 16 12H8C7.44772 12 7 11.5523 7 11ZM7 15C7 14.4477 7.44772 14 8 14H16C16.5523 14 17 14.4477 17 15C17 15.5523 16.5523 16 16 16H8C7.44772 16 7 15.5523 7 15Z"
                            fill="#FF9500"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M8 2C8.55228 2 9 2.44772 9 3V6C9 6.55228 8.55228 7 8 7C7.44772 7 7 6.55228 7 6V3C7 2.44772 7.44772 2 8 2ZM12 2C12.5523 2 13 2.44772 13 3V6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6V3C11 2.44772 11.4477 2 12 2ZM17 3C17 2.44772 16.5523 2 16 2C15.4477 2 15 2.44772 15 3V6C15 6.55228 15.4477 7 16 7C16.5523 7 17 6.55228 17 6V3Z"
                            fill="#FF9500"></path>
                        <path opacity="0.75" fill-rule="evenodd" clip-rule="evenodd"
                            d="M8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12H16C16.5523 12 17 11.5523 17 11C17 10.4477 16.5523 10 16 10H8ZM8 14C7.44772 14 7 14.4477 7 15C7 15.5523 7.44772 16 8 16H16C16.5523 16 17 15.5523 17 15C17 14.4477 16.5523 14 16 14H8Z"
                            fill="#FF9500"></path>
                    </svg> <span class="text-[14px] font-semibold hover:text-[#2c7ac7]">Kanselyariya tovarlar</span>
                </div>
                <i class="text-[12px] fa-solid fa-chevron-right"></i>
            </div>
            <div class="flex items-center justify-between w-[253px] mt-4">
                <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5"
                            d="M15.75 13.2532C14.7499 12.2521 14.5042 10 12 10C9.49578 10 8.74967 12.753 8.25 13.2532C7.75033 13.7534 5 14.5005 5 17.0069C5 19.5132 7.74609 20.7567 9.5 19.5093C11.2539 18.262 12.7461 18.2581 14.5 19.5093C16.2539 20.7606 19 19.5081 19 17.0069C19 14.5057 16.7501 14.2543 15.75 13.2532Z"
                            fill="#76797F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M8.50005 3C7.25005 3 6.50005 4.25 6.50005 5.75C6.50005 7.25 7.50382 9.99929 9.50005 9.99929C10.75 9.99929 11.5 8.5 11.5 7C11.5 5.5 10.25 3 8.50005 3ZM15.5 3C16.75 3 17.5 4.25 17.5 5.75C17.5 7.25 16.4963 9.99929 14.5 9.99929C13.25 9.99929 12.5 8.5 12.5 7C12.5 5.5 13.75 3 15.5 3ZM22 9.69231C22 8.84288 21.3181 8 20.1813 8C18.3629 8 17 10.1154 17 11.3846C17 12.8654 17.9047 13.5 18.8174 13.5C20.3634 13.5 22 11.5962 22 9.69231ZM3.81865 8C2.68187 8 2 8.84288 2 9.69231C2 11.5962 3.63661 13.5 5.18264 13.5C6.09525 13.5 6.99995 12.8654 6.99995 11.3846C6.99995 10.1154 5.63712 8 3.81865 8Z"
                            fill="#76797F"></path>
                    </svg> <span class="text-[14px] font-semibold hover:text-[#2c7ac7]">Hayvonlar uchun tovarlar</span>
                </div>
                <i class="text-[12px] fa-solid fa-chevron-right"></i>
            </div>
            <div class="flex items-center justify-between w-[253px] mt-4">
                <div class="flex items-center gap-2">

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6 19.0009C10.002 19.0009 12 20.6542 12 20.6542V5.65C12 5.65 10 4 6 4C4.23282 4 2.96531 4.19987 2.37407 4.31704C2.15186 4.36108 2 4.55761 2 4.78414V18.7496C2 19.078 2.31256 19.3251 2.63604 19.2685C3.30039 19.1522 4.46062 19.0009 6 19.0009Z"
                            fill="#FF5319"></path>
                        <path opacity="0.75" fill-rule="evenodd" clip-rule="evenodd"
                            d="M14 4.63622C12.6673 5.10089 12 5.65 12 5.65V20.6542C12 20.6542 14.0033 19.0009 18.0053 19.0009C19.5429 19.0009 20.7002 19.1519 21.3634 19.2681C21.687 19.3248 21.9999 19.0776 21.9999 18.749V4.78378C21.9999 4.55742 21.8483 4.361 21.6262 4.3169C21.0363 4.19971 19.7717 4 18.0053 4C17.6549 4 17.3198 4.01266 17 4.03577V11L15.5 10L14 11V4.63622Z"
                            fill="#FF5319"></path>
                        <path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd"
                            d="M17 4.03571V11L15.5 9.99999L14 11V4.63616C14.7751 4.3659 15.7752 4.1242 17 4.03571Z"
                            fill="#FF5319"></path>
                    </svg> <span class="text-[14px] font-semibold hover:text-[#2c7ac7]">Kitoblar</span>
                </div>
                <i class="text-[12px] fa-solid fa-chevron-right"></i>
            </div>
            <div class="flex items-center justify-between w-[253px] mt-4">
                <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.75" fill-rule="evenodd" clip-rule="evenodd"
                            d="M13 16V21H11V15.8631C6.43508 15.2001 4 12.144 4 7C9.6809 7 12.8158 9.97084 12.9921 15.5H13V16Z"
                            fill="#40BF40"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M11.8296 8.49616C12.8934 9.61187 13.696 10.9877 14.2275 12.6137C18.0001 11.6087 20 8.66169 20 4C15.8958 4 13.1205 5.55057 11.8296 8.49616Z"
                            fill="#40BF40"></path>
                    </svg> <span class="text-[14px] font-semibold hover:text-[#2c7ac7]">Dacha, bog' va tomorqa</span>
                </div>
                <i class="text-[12px] fa-solid fa-chevron-right"></i>
            </div>
            <div class="flex items-center justify-between w-[253px] mt-4">
                <div class="flex items-center gap-2">
                    <svg class="mb-[40px]" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.75" fill-rule="evenodd" clip-rule="evenodd"
                            d="M12 21.4578C12.1915 21.4578 12.383 21.3921 12.5358 21.2605C12.9065 20.9414 13.369 20.5684 13.8889 20.149C16.9501 17.68 22 13.6069 22 9.5C22 6.3 19.45 4 16.5 4C13.65 4 12 6.33398 12 6.33398V21.4578Z"
                            fill="#FF5319"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M12 6.33398C12 6.33398 10.3532 4 7.5 4C4.55 4 2 6.3 2 9.5C2 13.6073 7.05204 17.682 10.1127 20.1505C10.632 20.5693 11.094 20.9419 11.4642 21.2606C11.617 21.3921 11.8085 21.4578 12 21.4578V6.33398Z"
                            fill="#FF5319"></path>
                    </svg> <span class="text-[14px] font-semibold hover:text-[#2c7ac7]">Reabilitatsiya uchun <br>
                        subsidiyalangan <br> mahsulotlar</span>
                </div>
                <i class="text-[12px] fa-solid fa-chevron-right"></i>
            </div>

        </div>
        <div class="mt-4 ml-[50px]">
            <div class="flex items-center gap-2">
                <h1 class="text-[18px] font-semibold">Salomatlik</h1>
                <i class="fa-solid fa-chevron-right"></i>
            </div>

            <div class="mt-4 flex items-center  gap-[50px]">
                <div>
                    <a class="text-[14px] font-semibold" href="#">Vitaminlar va BFQlar</a>
                    <p class="w-[240px] mt-2 text-[14px] text-[#7e818c] leading-8">Ovqat hazm qilish tizimi uchun
                        A va E vitaminlari
                        Erkak salomatligi
                        Vitamin va mineral komplekslar
                        Yana 33 <i class="fa-solid fa-chevron-down"></i></p>
                </div>
                <div>
                    <a class="text-[14px] font-semibold" href="#">Sportchilar uchun ozuqalar</a>
                    <p class="w-[240px] mt-2 text-[14px] text-[#7e818c] leading-8">Gaynerlar va oqsillar
                        BCAA va aminokislotalar
                        Maxsus preparatlar
                        Kreatinlar
                        Yana 33 <i class="fa-solid fa-chevron-down"></i></p>
                </div>
                <div>
                    <a class="text-[14px] font-semibold" href="#">Vitaminlar va BFQlar</a>
                    <p class="w-[240px] mt-2 text-[14px] text-[#7e818c] leading-8">Tana uchun massaj moslamalari
                        Oyoq uchun massaj moslamalari
                        Bosh uchun massaj moslamalari
                        Massaj gilamchalari
                        Yana 33 <i class="fa-solid fa-chevron-down"></i></p>
                </div>
            </div>
            <div class="mt-4 flex items-center  gap-[50px]">
                <div>
                    <a class="text-[14px] font-semibold" href="#">Vitaminlar va BFQlar</a>
                    <p class="w-[240px] mt-2 text-[14px] text-[#7e818c] leading-8">Ovqat hazm qilish tizimi uchun
                        A va E vitaminlari
                        Erkak salomatligi
                        Vitamin va mineral komplekslar
                        Yana 33 <i class="fa-solid fa-chevron-down"></i></p>
                </div>
                <div>
                    <a class="text-[14px] font-semibold" href="#">Sportchilar uchun ozuqalar</a>
                    <p class="w-[240px] mt-2 text-[14px] text-[#7e818c] leading-8">Gaynerlar va oqsillar
                        BCAA va aminokislotalar
                        Maxsus preparatlar
                        Kreatinlar
                        Yana 33 <i class="fa-solid fa-chevron-down"></i></p>
                </div>
                <div>
                    <a class="text-[14px] font-semibold" href="#">Vitaminlar va BFQlar</a>
                    <p class="w-[240px] mt-2 text-[14px] text-[#7e818c] leading-8">Tana uchun massaj moslamalari
                        Oyoq uchun massaj moslamalari
                        Bosh uchun massaj moslamalari
                        Massaj gilamchalari
                        Yana 33 <i class="fa-solid fa-chevron-down"></i></p>
                </div>
            </div>
            <div class="mt-4 flex items-center  gap-[50px]">
                <div>
                    <a class="text-[14px] font-semibold" href="#">Vitaminlar va BFQlar</a>
                    <p class="w-[240px] mt-2 text-[14px] text-[#7e818c] leading-8">Ovqat hazm qilish tizimi uchun
                        A va E vitaminlari
                        Erkak salomatligi
                        Vitamin va mineral komplekslar
                        Yana 33 <i class="fa-solid fa-chevron-down"></i></p>
                </div>
                <div>
                    <a class="text-[14px] font-semibold" href="#">Sportchilar uchun ozuqalar</a>
                    <p class="w-[240px] mt-2 text-[14px] text-[#7e818c] leading-8">Gaynerlar va oqsillar
                        BCAA va aminokislotalar
                        Maxsus preparatlar
                        Kreatinlar
                        Yana 33 <i class="fa-solid fa-chevron-down"></i></p>
                </div>
                <div>
                    <a class="text-[14px] font-semibold" href="#">Vitaminlar va BFQlar</a>
                    <p class="w-[240px] mt-2 text-[14px] text-[#7e818c] leading-8">Tana uchun massaj moslamalari
                        Oyoq uchun massaj moslamalari
                        Bosh uchun massaj moslamalari
                        Massaj gilamchalari
                        Yana 33 <i class="fa-solid fa-chevron-down"></i></p>
                </div>
            </div>

        </div>
    </div>

</template>
