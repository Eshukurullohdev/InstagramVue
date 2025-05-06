<template>
    <div class="w-full h-[85vh] bg-[#2C7AC7] flex">
        <div class="w-[960px] container_large p-[70px]">
            <nav class="flex items-center justify-between">
                <RouterLink to="/">
                    <div class="flex items-center gap-4"><img class="w-[50px] h-[50px] rounded-full"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jybTGUSvxWxihbZMxwinqDCquA6PkMiC1Q&s"
                            alt="">
                        <blockquote style="line-height: 28px;" class="text-[#fff] font-bold text-[25px]">
                            Uzum <br> market
                        </blockquote>
                    </div>
                </RouterLink>
                <ul class="flex gap-7 items-center">
                    <li><a class="text-[14px] font-semibold text-[#fff]" href="#">Qanday ochiladi</a></li>
                    <li><a class="text-[14px] font-semibold text-[#fff]" href="#">Nimalar kerak bo'ladi</a></li>
                    <li><a class="text-[14px] font-semibold text-[#fff]" href="#">Brendbuk</a></li>
                    <li><a class="bg-[#ffffff26] flex gap-2 text-[15px] text-[#fff] font-semibold p-4 rounded-[30px]"
                            href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M21.5422 15C20.268 19.0571 16.4777 22 12 22C7.52238 22 3.73209 19.0571 2.45782 15H21.5422Z"
                                    fill="#D52B1E"></path>
                                <path
                                    d="M21.5422 9H2.45782C3.73209 4.94289 7.52238 2 12 2C16.4777 2 20.268 4.94289 21.5422 9Z"
                                    fill="#F7F9FC"></path>
                                <path
                                    d="M21.3704 15.5C21.7775 14.4107 22 13.2313 22 12C22 10.7687 21.7775 9.58934 21.3704 8.5H2.62961C2.22255 9.58934 2 10.7687 2 12C2 13.2313 2.22255 14.4107 2.62961 15.5H21.3704Z"
                                    fill="#0039A6"></path>
                            </svg> Ruskiy</a></li>
                </ul>
            </nav>
            <h1 style="line-height: 48px;" class="text-[42px] mt-[30px] text-[#fff] font-bold">Uzum Market topshirish
                <br> punktini oching
            </h1>
            <p class="text-[18px] text-[#fff] mt-[18px] mb-[30px]">Ishga tushirishga yordam beramiz va xodimlarni
                o‘qitamiz</p>
            <p class="flex items-center gap-3 text-[#fff] text-[18px]"><img class="w-[44px]"
                    src="https://uzum.uz/landings/_ipx/s_88x88/landings/img/pvz/icons/money.png" alt=""> Oyiga 15 mln
                so‘mdan boshlab mukofotlash</p>
            <p class="flex items-center gap-3 text-[#fff] text-[18px] mt-[18px]"><img class="w-[44px]"
                    src="https://uzum.uz/landings/_ipx/s_88x88/landings/img/pvz/icons/hand-money.png" alt=""> Sarmoya 40
                mln so‘mdan boshlab</p>
            <p class="flex items-center gap-3 text-[#fff] text-[18px] mt-[18px]"><img class="w-[44px]"
                    src="https://uzum.uz/landings/_ipx/s_88x88/landings/img/pvz/icons/up-arrow.png" alt=""> O‘zini
                qoplash 12 oydan boshlab</p>
            <button class="bg-[#fff] p-4 rounded-[15px] mt-[25px] font-semibold text-[15px] hover:bg-[#ffffff26]">Aloqa
                uchun ma'lumot qoldiring</button>
        </div>
        <div><img class="absolute top-[150px] right-[300px] w-[440px] h-[400px]"
                src="https://uzum.uz/landings/_ipx/_/landings/img/pvz/main-image.png" alt=""></div>
    </div>
    <div class="wrapper mt-4 p-4 w-[1040px] m-auto">
        <div style="letter-spacing:2px ; line-height:2px"
            class="text-left   text-black-400 text-[27px] font-[700] mb-[37px]">Bu nima uchun foydali</div>
        <div class="flex justify-between gap-4">
            <div class="text-left w-[320px] h-[260px] bg-[#F0F2F5] rounded-[20px] p-[25px]">
                <img class="w-[74px] h-[74px] mb-[6px]  bg-[#E1E5FF] rounded-[50%] p-[3px] " src="" alt="">
                <div style="letter-spacing:0.5px" class="text-[18px] font-[600] mb-[4px]">Birinchi ish oylining <br>
                    o'zidan daromad</div>
                <div class="text-[14px] text-[#A0A2A9]">Barqaror qo'shimcha daromadga ega bo'ling</div>
            </div>
            <div class="text-left w-[320px] h-[260px] bg-[#F0F2F5] rounded-[20px] p-[25px] ">
                <img class="w-[74px] h-[74px] mb-[6px]  bg-[#E1E5FF] rounded-[50%] p-[3px] " src="" alt="">
                <div class="text-[18px] font-[600] mb-[4px]">Eng yaxshi <br>texnalogiyalarni takif <br> qilamiz</div>
                <div class="text-[14px] text-[#A0A2A9]">Uzum market bilan qulay va samarali ishlashga</div>
            </div>
            <div class="text-left w-[320px] h-[260px] bg-[#F0F2F5] rounded-[20px] p-[25px] ">
                <img class="w-[74px] h-[74px] mb-[6px]  bg-[#E1E5FF] rounded-[50%] p-[3px] " src="" alt="">
                <div style="letter-spacing:0.5px" class="text-[18px] font-[600] mb-[4px]">Bizga ishonish mumkin</div>
                <div class="text-[14px] text-[#A0A2A9]">Mamlakatdagi 10 ta odamdan 9 tasi uzum market haqida bilishadi
                </div>
            </div>
        </div>
        <button
            class=" wrapper items-center m-auto flex justify-center font-[600] px-[20px] py-[15px] bg-[#7F4DFF] text-white rounded-[7px] mt-8 ">Aloqa
            uchun ma'lumot qoldirish</button>
    </div>

    <div class="wrapper mt-10 p-4 w-[1000px] m-auto">
        <div style="letter-spacing:2px ; line-height:2px"
            class="text-left   text-black-400 text-[27px] font-[700] mb-[37px]">Oson boshlash</div>
        <div>
            <div class="flex justify-between items-center gap-4">
                <div class="bg-[#F0F2F5] w-[460px] h-[195px] p-[24px]  rounded-[25px]">
                    <div
                        class="bg-[#fff] w-[40px] h-[40px] rounded-[50%] text-[#7F4DFF] text-[24px] font-[700] text-center mb-[25px]  ">
                        1</div>
                    <div style="letter-spacing:0.5px" class="text-[18px] font-[600] mb-[5px]">Joyni topish</div>
                    <div class="text-[14px] text-[#A0A2A9]">Biznesingiz hududidan foydalanishingiz yoki yangi joy
                        ijaraga olishingiz mumkin</div>
                </div>
                <div class="bg-[#F0F2F5] w-[460px] h-[195px] p-[24px]  rounded-[25px]">
                    <div
                        class="bg-[#fff] w-[40px] h-[40px] rounded-[50%] text-[#7F4DFF] text-[24px] font-[700] text-center mb-[25px]  ">
                        2</div>
                    <div style="letter-spacing:0.5px" class="text-[18px] font-[600] mb-[5px]">Ariza topshiring</div>
                    <div class="text-[14px] text-[#A0A2A9]">Tezda ko‘rib chiqamiz va foydali hamkorlik shartlarini
                        taklif qilamiz</div>
                </div>
            </div>
        </div>
        <div class="mt-[20px]">
            <div class="flex justify-between items-center gap-4">
                <div class="bg-[#F0F2F5] w-[460px] h-[195px] p-[24px]  rounded-[25px]">
                    <div
                        class="bg-[#fff] w-[40px] h-[40px] rounded-[50%] text-[#7F4DFF] text-[24px] font-[700] text-center mb-[25px]  ">
                        3</div>
                    <div style="letter-spacing:0.5px" class="text-[18px] font-[600] mb-[5px]">Ishga tushirishga
                        tayyorgarlik ko‘ramiz
                    </div>
                    <div class="text-[14px] text-[#A0A2A9]">Xodimlaringizni o‘qitamiz va xonani bezash uchun
                        materiallarni bepul tayyorlaymiz
                    </div>
                </div>
                <div class="bg-[#F0F2F5] w-[460px] h-[195px] p-[24px]  rounded-[25px]">
                    <div
                        class="bg-[#fff] w-[40px] h-[40px] rounded-[50%] text-[#7F4DFF] text-[24px] font-[700] text-center mb-[25px]  ">
                        4</div>

                    <div style="letter-spacing:0.5px" class="text-[18px] font-[600] mb-[5px] ">Ochilamiz
                    </div>
                    <div class="text-[14px] text-[#A0A2A9]">Siz daromadingizni oshirasiz, biz esa har bir bosqichda
                        qo‘llab-quvvatlaymiz
                    </div>
                </div>
            </div>
        </div>
        <button
            class=" wrapper flex justify-center items-center m-auto font-[600] font-[600]  px-[20px] py-[15px] bg-[#7F4DFF] text-white  rounded-[7px] mt-8 ">Aloqa
            uchun ma'lumot qoldirish</button>

    </div>

</template>
