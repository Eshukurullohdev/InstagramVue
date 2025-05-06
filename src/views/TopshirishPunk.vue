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
                <img class="w-[74px] h-[74px] mb-[6px]  bg-[#E1E5FF] rounded-[50%] p-[3px] " src="https://uzum.uz/landings/_ipx/s_148x148/landings/img/pvz/icons/money-lg.png" alt="">
                <div style="letter-spacing:0.5px" class="text-[18px] font-[600] mb-[4px]">Birinchi ish oylining <br>
                    o'zidan daromad</div>
                <div class="text-[14px] text-[#A0A2A9]">Barqaror qo'shimcha daromadga ega bo'ling</div>
            </div>
            <div class="text-left w-[320px] h-[260px] bg-[#F0F2F5] rounded-[20px] p-[25px] ">
                <img class="w-[74px] h-[74px] mb-[6px]  bg-[#E1E5FF] rounded-[50%] p-[3px] " src="https://uzum.uz/landings/_ipx/s_148x148/landings/img/pvz/icons/circle-check.png" alt="">
                <div class="text-[18px] font-[600] mb-[4px]">Eng yaxshi <br>texnalogiyalarni takif <br> qilamiz</div>
                <div class="text-[14px] text-[#A0A2A9]">Uzum market bilan qulay va samarali ishlashga</div>
            </div>
            <div class="text-left w-[320px] h-[260px] bg-[#F0F2F5] rounded-[20px] p-[25px] ">
                <img class="w-[74px] h-[74px] mb-[6px]  bg-[#E1E5FF] rounded-[50%] p-[3px] " src="https://uzum.uz/landings/_ipx/s_148x148/landings/img/pvz/icons/delivery.png" alt="">
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

    <div class="flex justify-center items-center">
        <div>
            <h1 class="text-[36px] font-bold mr-[450px] mt-[70px]">Nimalarni tayyorlash kerak</h1>
            <div class="flex gap-3 mb-[50px]">
                <div class="w-[291px] h-[116px] bg-[#f0f2f5] rounded-[30px] mt-[30px] p-[24px]">
                    <h2 class="font-extrabold">Joy</h2>
                    <p class="text-[14px]">Buyurtmalar topshirish zonasi sig‘ishiga 20-50 m² joy mos keladi</p>
                </div>
                <div class="w-[291px] h-[116px] bg-[#f0f2f5] rounded-[30px] mt-[30px] p-[24px]">
                    <h2 class="font-extrabold">Texnika</h2>
                    <p class="text-[14px]">Videokameralar, telefon, noutbuk, skaner va mebel</p>
                </div>
                <div class="w-[291px] h-[116px] bg-[#f0f2f5] rounded-[30px] mt-[30px] p-[24px]">
                    <h2 class="font-extrabold">Ishlash jadvali</h2>
                    <p class="text-[14px]">Mijozlarni har kuni qabul qilishga — 10:00 dan 20:00 gacha</p>
                </div>
            </div>
            <h1 class="text-[36px] font-bold mr-[450px] mt-[70px]">Nega aynan bizni tanlash kerak</h1>
            <div class="flex gap-4">
                <div class="w-[442px] h-[138px] bg-[#f0f2f5] rounded-[30px] mt-[30px] p-[24px]">
                    <h2 class="font-extrabold text-[42px] text-[#7f4dff]">1,2 mln ta</h2>
                    <p class="text-[18px]">mijozlar</p>
                </div>
                <div class="w-[442px] h-[138px] bg-[#f0f2f5] rounded-[30px] mt-[30px] p-[24px]">
                    <h2 class="font-extrabold text-[42px] text-[#7f4dff]">20 mln ta</h2>
                    <p class="text-[18px]">yil davomida topshirilgan buyurtmalar</p>
                </div>
            </div>
            <div class="flex gap-4 mb-[50px]">
                <div class="w-[442px] h-[138px] bg-[#f0f2f5] rounded-[30px] mt-[30px] p-[24px]">
                    <h2 class="font-extrabold text-[42px] text-[#7f4dff]">14 000 nafar</h2>
                    <p class="text-[18px]">Uzum Market’dagi sotuvchilar</p>
                </div>
                <div class="w-[442px] h-[138px] bg-[#f0f2f5] rounded-[30px] mt-[30px] p-[24px]">
                    <h2 class="font-extrabold text-[42px] text-[#7f4dff]">250 ta</h2>
                    <p class="text-[18px]">shahar</p>
                </div>
            </div>
            <div class="flex justify-between mb-[40px]">
                <div>
                    <h1 class="text-[36px] font-bold mr-[450px] mt-[70px]">Brending materiallari</h1>
                    <p class="text-[18px]">Batafsil <a class="text-[#7f4dff]" href="#">Brendbuk.pdf</a></p>
                </div>
                <div class="mt-[100px] flex gap-5 mr-[60px]">
                    <i class="text-[25px] bg-[#f0f2f5] text-[grey] p-3 rounded-[50%] fa-solid fa-chevron-left"></i>
                    <i class="text-[25px] bg-[#f0f0f0] p-3 rounded-[50%] fa-solid fa-chevron-right"></i>
                </div>
            </div>
            <div class="flex gap-5 mb-[100px]">
                <img class="w-[528px] h-[448px] rounded-[40px]" src="https://static.uzum.uz/PVZ/pvz-21.jpg" alt="">
                <img class="w-[360px] h-[448px] rounded-l-[30px]" src="https://static.uzum.uz/PVZ/pvz-22.jpg" alt="">
            </div>
            <div class="w-[900px] h-[305px] bg-[blue] rounded-[30px] p-[40px] mb-[70px]">
                <div>
                    <h1 class="text-[36px] text-[#fff]">Hozir ayni vaqti</h1>
                    <p class="text-[#fff] mt-[10px] text-[18px]">Bizga qo‘shiling, balki siz birinchi Uzum Market topshirish <br> punktini ocharsiz oʻz shahringizda!</p>
                    <a class="bg-[#fff] py-[15px] px-[50px] font-[600] inline-block rounded-[10px] mt-[30px]" href="#">Aloqa uchun ma'lumot qoldirish</a>
                    <p class="text-[11px] mt-[20px] text-[#ffffffb3]">Davom etish orqali siz, <a class="underline" href="#">shaxsiy ma’lumotlarni qayta ishlash siyosatiga </a>rozilik bildirasiz</p>
                </div>
            </div>
            
        </div>
    </div>
    <section class="justify-center flex">
        <div class="mt-52">
        <h2 class="font-bold text-[40px] ml-[30px]">Savollarga javob beramiz</h2>
        <div class="mt-8">
            <div class="relative w-[990px] h-[80px] text-[25px] hover:bg-[#f1ebeb] hover:rounded-[15px]">
                <a class="absolute top-[22px] left-[30px] flex justify-between font-semibold" href="#">Qanday joylar topshirish punkitlari mos keladi? <i class="absolute right-[-400px] top-[10px] text-[20px] fa-solid fa-chevron-down"></i></a>
            </div>
            <hr class="w-[940px] ml-[30px]">
            <div class="relative w-[990px] h-[80px] text-[25px] hover:bg-[#f1ebeb] hover:rounded-[15px]">
                <a class="absolute top-[22px] left-[30px] flex justify-between font-semibold" href="#">Nechta topshirish punktini ochish mumkin?<i class="absolute right-[-440px] top-[10px] text-[20px] fa-solid fa-chevron-down"></i></a>
            </div>
            <hr class="w-[940px] ml-[30px]">
            <div class="relative w-[990px] h-[80px] text-[25px] hover:bg-[#f1ebeb] hover:rounded-[15px] mb-[50px]">
                <a class="absolute top-[22px] left-[30px] flex justify-between font-semibold" href="#">Yana savollaringiz bo'lsa<i class="absolute right-[-660px] top-[10px] text-[20px] fa-solid fa-chevron-down"></i></a>
            </div>
        </div>
    </div>
    </section>
    <footer class="h-[162px] mt-[25px] flex items-center justify-center bg-[#f0f2f5]">
        <div class="flex items-center justify-between w-[990px]">
            <img class="w-[137px] h-[40px]" src="https://uzum.uz/landings/_ipx/_/landings/img/uzum-logo-accented.svg" alt="">
            <a class="text-[14px] font-semibold" href="#">Sotuvchi bo'lish</a>
            <a class="text-[14px] font-semibold" href="#">Oferta shartnomasi</a>
            <a class="text-[14px] font-semibold" href="#">Maxfiylik siyosati</a>
            <a class="text-[14px] font-semibold" href="#">Bredbuk.pdf</a>
            <a class="ml-[50px] text-[14px]" href="#">@2025</a>
        </div>
    </footer>

</template>
