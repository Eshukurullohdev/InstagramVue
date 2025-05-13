<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';

const MenuOchil = ref(false)
</script>

<template>
    <div class="w- h-[64px] flex items-center bg-[#1f20268f]">
            <div class="w-[1310px] m-auto mt-[20px]">
                <nav class="flex items-center justify-between container_large">
                    <RouterLink to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="114" height="36" fill="none" viewBox="0 0 114 36" class="layout__header-logo" data-v-c5e31979=""><path fill="#ABABAB" d="M18.035 35.815c9.772 0 17.695-7.973 17.695-17.807S27.807.202 18.035.202.34 8.174.34 18.008s7.922 17.807 17.695 17.807"></path><path fill="#3B1082" d="M5.008 20.175c-.716-4.087-1.074-6.13-.593-7.84A7.76 7.76 0 0 1 7.327 8.15c1.432-1.039 3.463-1.4 7.524-2.12l1.99-.353c4.06-.72 6.091-1.08 7.79-.597a7.7 7.7 0 0 1 4.159 2.93c1.032 1.441 1.39 3.485 2.107 7.572.716 4.086 1.074 6.13.593 7.84a7.76 7.76 0 0 1-2.912 4.185c-1.432 1.039-3.463 1.399-7.524 2.12l-1.99.352c-4.06.721-6.091 1.081-7.79.598a7.7 7.7 0 0 1-4.159-2.93c-1.032-1.442-1.39-3.485-2.107-7.572"></path><path fill="#fff" d="M22.933 12.375c.534.118 1.05.22 1.557.35.54.138 1.073.305 1.607.456.075.022.105.051.105.138-.003 1.678.015 3.358-.007 5.036a8.05 8.05 0 0 1-1.68 4.869c-1.215 1.599-2.804 2.629-4.748 3.097a7.9 7.9 0 0 1-2.333.2c-1.868-.111-3.524-.774-4.939-2.004-1.46-1.264-2.38-2.855-2.75-4.762A8.6 8.6 0 0 1 9.6 18.11c-.003-1.59 0-3.176-.005-4.765 0-.106.034-.143.13-.173a25 25 0 0 1 3.107-.778c.01-.003.02 0 .044-.003v.123c0 1.994-.008 3.99.005 5.983.007 1.005.142 1.998.482 2.952.27.756.668 1.431 1.263 1.978.559.51 1.212.833 1.945.99 1.035.225 2.069.208 3.085-.115 1.2-.38 2.032-1.183 2.566-2.314.286-.603.457-1.244.565-1.902.12-.732.15-1.47.15-2.21v-5.34c-.003-.046-.003-.09-.003-.162"></path><path fill="#fff" d="M19.358 16.07H16.44V9.205c.304-.096 2.339-.104 2.917-.008zm56.981-5.497c0 1.56-.876 2.28-2.18 2.28s-2.15-.71-2.15-2.28V5.421h-2.814v5.248c0 3.42 2.845 4.762 4.979 4.762s4.983-1.342 4.983-4.761V5.42h-2.813zm-9.516-2.761v-2.39h-9.137v2.39h5.407l-5.628 5.046v2.391h9.695v-2.391h-5.955zm26.414-2.579c-1.782 0-3.126.73-3.79 1.84-.68-1.11-2.15-1.84-3.68-1.84-3.006 0-4.572 1.925-4.572 4.306v5.71h2.815V9.945c0-1.14.593-2.138 1.958-2.138a1.98 1.98 0 0 1 1.51.578c.196.197.347.435.448.698.096.264.14.542.12.821v5.35h2.815v-5.35c0-1.14.67-2.102 2.018-2.102 1.35 0 2 1.003 2 2.138v5.303h2.813V9.55c0-2.38-1.45-4.305-4.475-4.305zm-40.317 5.34c0 1.56-.875 2.28-2.169 2.28s-2.16-.71-2.16-2.28V5.421h-2.814v5.248c0 3.42 2.835 4.762 4.98 4.762 2.149 0 4.973-1.342 4.973-4.761V5.42h-2.814zm7.498 16.173c0 1.093.583 2.177 2.43 2.177 1.694 0 1.939-.996 1.939-.996h3.175s-.297 3.203-5.11 3.203c-3.357 0-5.47-1.848-5.47-5.149 0-3.29 2.113-5.128 5.429-5.128 3.284 0 5.386 1.838 5.386 5.128 0 .37-.053.765-.053.765zm.041-1.735h4.662c0-.79-.47-1.935-2.315-1.935-1.81 0-2.347 1.14-2.347 1.935m23.701 1.735c0 1.093.584 2.177 2.43 2.177 1.694 0 1.939-.996 1.939-.996h3.175s-.297 3.203-5.11 3.203c-3.357 0-5.469-1.848-5.469-5.149 0-3.29 2.112-5.128 5.428-5.128 3.284 0 5.386 1.838 5.386 5.128 0 .37-.052.765-.052.765zm.041-1.735h4.661c0-.79-.469-1.935-2.315-1.935-1.803 0-2.346 1.14-2.346 1.935m-28.413-.986c0-2.156-1.632-3.25-4.917-3.245-2.263 0-4.896.611-4.896 2.993 0 1.263.767 2.259 1.888 2.598 1.163.349 2.325.523 3.52.61.661.052 1.897.242 1.897.965-.01.673-.777 1.006-2.283 1.006-1.57 0-2.248-.338-2.248-1.242v-.303h-2.972v.303c0 2.238 1.726 3.352 5.214 3.352 3.499.01 5.266-1.042 5.266-3.141 0-1.587-1.152-2.552-2.58-2.829-1.388-.282-2.827-.313-3.979-.61-.5-.134-.756-.406-.756-.688 0-.601.61-.904 1.867-.904 1.235 0 2.013.17 2.013 1.134zm56.905 0c0-2.156-1.632-3.25-4.917-3.245-2.263 0-4.896.611-4.896 2.993 0 1.263.767 2.259 1.888 2.598 1.162.349 2.325.523 3.519.61.662.052 1.898.242 1.898.965-.011.673-.777 1.006-2.284 1.006-1.569 0-2.247-.338-2.247-1.242v-.303h-2.966v.303c0 2.238 1.725 3.352 5.213 3.352 3.499.01 5.266-1.042 5.266-3.141 0-1.587-1.152-2.552-2.581-2.829-1.386-.282-2.825-.313-3.978-.61-.5-.129-.756-.401-.756-.683 0-.6.61-.904 1.867-.904 1.236 0
 2.012.17 2.012 1.135h2.962zm-18.798.312v6.504h2.888v-4.363c0-1.679 1.246-2.762 2.815-2.762h1.888v-2.941h-1.418c-1.747 0-3.009 1.463-3.285 2.32v-2.12h-2.889zM73.498 17.12h-2.889v13.721h2.889zm5.668 0h-2.889v13.721h2.889z"></path></svg>
                    </RouterLink>
                <div class="flex items-center gap-2">
                    <button class="bg-[#ffffff4c] p-2 text-[#fff] text-[14px] rounded-[7px]">Инструкция продавца</button>
                    <button @click="MenuOchil = !MenuOchil" class="x flex items-center gap-2 bg-[#ffffff4c] p-2 text-[#fff] text-[14px] rounded-[7px]"><img class="w-[16px] h-[16px] rounded-[50%]" src="" alt=""> RU <i class="fa-solid fa-chevron-down text-[10px]"></i></button>
                    <RouterLink to="/kirishsotuv">
                       
                        <button class="bg-[#ffffff4c] p-2 text-[#fff] text-[14px] rounded-[7px]">Войти</button>
                    </RouterLink>
                    <RouterLink to="/registersotuv">
                        <button class="bg-[#fff] p-2 text-[14px] rounded-[7px]">Стать продавцом</button>
                    </RouterLink>
                </div>
            </nav>
            </div>
        </div>
        <div v-if="MenuOchil" style="transition: all 0.3s;" class="bg-[#ffffff] w-[173px] p-[10px] rounded-[15px] absolute left-[1030px]">
            <button class="flex items-center gap-3 bg-[#ffffff] p-1 text-[14px]"><img class="w-[20px] h-[20px] rounded-[50%]" src="" alt=""> O'zbekcha <input type="radio"></button>
            <button class="flex items-center gap-[19px] p-1 text-[14px]"><img class="w-[20px] h-[20px] rounded-[50%]" src="" alt=""> Русский <input type="radio"></button>
    </div>
    <section class="bg-[#1f20268f]">
        <div class="flex justify-center">
            <div class="flex justify-center ml-[100px]">
            <div class="w-[606px] mt-[70px]">
            <h1 class="text-[36px] font-bold text-[#fff]">Продавайте по всему <br> Узбекистану на Uzum Market!</h1>
            <p class="text-[20px] text-[#fff]">С нами уже тысячи продавцов. <br> Присоединяйтесь — и получайте доступ к миллионам <br> покупателей по всей стране</p>
            <div class="flex gap gap-14 mt-[50px]">
                <p class="w-[151] text-[#ffffffb3]"><span class="text-[28px] font-bold text-[#fff]">10 млн</span> <br> покупателей <br> зарегистрировано <br> в Uzum Market</p>
                <p class="w-[151] text-[#ffffffb3]"><span class="text-[28px] font-bold text-[#fff]">x23</span> <br> рост продаж <br> на маркетплейсе <br> за последний год</p>
                <p class="w-[151] text-[#ffffffb3]"><span class="text-[28px] font-bold text-[#fff]">14 дней</span> <br> среднее время получения <br> первой выручки с момента <br> регистрации</p>
            </div>
          
                <button class="bg-[#fff] mt-[50px] px-[22px] py-[14px] rounded-[10px]">Стать продавцом</button>
          
        </div>
        </div>
        <div><img class="w-[700px] h-[800px] object-cover ml-[100px] mt-[81px]" src="https://seller.uzum.uz/_nuxt/first-uz.RJHhsVWQ.png" alt="">
        </div>
        </div>
    </section>
    <div class="container_large w-[1300px] bg-[#ceccff] p-[50px] rounded-[24px] relative top-[-220px]">
        <h1 class="text-[36px] font-bold">Продавать на Uzum Market <span class="bg-[#fefd35] px-[10px] py-[5px] text-[36px] font-bold"> - это просто!</span></h1>
        <p class="text-[18px] mt-[12px]">Предлагаем бонусы и услуги, которые помогут вести бизнес в разы эффективнее</p>
        <div class="w-[1100px] mt-[36px]">
            <div class="flex">
                <div class="w-[280px]">

                <div class="w-[56px] h-[58px] bg-[#fff] rounded-[10px] flex items-center justify-center"><svg class="w-[32px]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" data-v-e259d758=""><path fill-rule="evenodd" d="M19.12 1.26a.75.75 0 0 1 .55.405l.889 1.776 1.776.888a.75.75 0 0 1 .195 1.201l-3 3a.75.75 0 0 1-.53.22h-2.69l-3.78 3.78a.75.75 0 0 1-1.06-1.06l3.78-3.78V5a.75.75 0 0 1 .22-.53l3-3a.75.75 0 0 1 .65-.21Zm-2.37 5.99h1.94l2.044-2.045-1.07-.534a.75.75 0 0 1-.335-.336l-.535-1.069-2.044 2.045V7.25ZM12 2.75A9.25 9.25 0 1 0 21.25 12a.75.75 0 0 1 1.5 0c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12 6.063 1.25 12 1.25a.75.75 0 0 1 0 1.5Zm0 5A4.25 4.25 0 1 0 16.25 12a.75.75 0 0 1 1.5 0A5.75 5.75 0 1 1 12 6.25a.75.75 0 0 1 0 1.5Z" clip-rule="evenodd"></path></svg></div>
                <p class="text-[18px] font-bold mt-[10px]">Привлекаем клиентов</p>
                <p class="mt-[3px]">Забудьте о расходах на рекламу — на Uzum Market покупатели уже ищут ваш товар</p>
            </div>
                <div class="w-[280px] mr-[100px] ml-[100px]">
                <div class="w-[56px] h-[58px] bg-[#fff] rounded-[10px] flex items-center justify-center"><svg class="w-[32px]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" data-v-e259d758=""><path fill-rule="evenodd" d="M3 2.25a.75.75 0 0 1 .75.75v16.4c0 .292 0 .467.011.596a.625.625 0 0 0 .018.12.25.25 0 0 0 .104.105.638.638 0 0 0 .121.018c.13.01.304.011.596.011H21a.75.75 0 0 1 0 1.5H4.574c-.258 0-.494 0-.692-.016a1.775 1.775 0 0 1-.676-.175 1.75 1.75 0 0 1-.765-.765 1.774 1.774 0 0 1-.175-.676 9.053 9.053 0 0 1-.016-.692V3A.75.75 0 0 1 3 2.25Zm.88 17.97h.002-.001Zm-.1-.1v-.002.001ZM16.25 7a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V8.81l-4.168 4.169c-.087.086-.18.18-.268.255a1.26 1.26 0 0 1-.428.248 1.25 1.25 0 0 1-.772 0 1.26 1.26 0 0 1-.428-.248 4.746 4.746 0 0 1-.268-.255l-1.883-1.883-.035-.035-.035.035L7.53 15.53a.75.75 0 0 1-1.06-1.06l4.448-4.449c.087-.086.18-.18.268-.254.1-.085.239-.187.428-.249a1.25 1.25 0 0 1 .772 0c.189.062.329.164.428.249.088.074.181.168.268.254l.014.014 1.869 1.869.035.035.035-.035L19.19 7.75H17a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"></path></svg></div>
                <p class="text-[18px] font-bold mt-[10px]">Помогаем с продвижением</p>
                <p class="mt-[3px]">Акции, скидки, размещение <br> в топе — делаем ваши товары заметнее и выгоднее</p>
            </div>
            <div class="w-[280px]">
                <div class="w-[56px] h-[58px] bg-[#fff] rounded-[10px] flex items-center justify-center"><svg class="w-[32px]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" data-v-e259d758=""><path fill-rule="evenodd" d="M10 3.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5ZM4.75 7.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0ZM19 14.25a.75.75 0 0 1 .75.75v2.25H22a.75.75 0 1 1 0 1.5h-2.25V21a.75.75 0 1 1-1.5 0v-2.25H16a.75.75 0 0 1 0-1.5h2.25V15a.75.75 0 0 1 .75-.75Zm-11.643.5H12a.75.75 0 1 1 0 1.5H7.5c-1.45 0-2.009.008-2.443.14a3.25 3.25 0 0 0-2.167 2.167c-.132.434-.14.993-.14 2.443a.75.75 0 0 1-1.5 0v-.143c0-1.258 0-2.06.205-2.736a4.75 4.75 0 0 1 3.166-3.166c.676-.206 1.478-.205 2.736-.205Z" clip-rule="evenodd"></path></svg></div>
                <p class="text-[18px] font-bold mt-[10px]">Расширяем аудиторию</p>
                <p class="mt-[3px]">Рассрочки и кредиты <br> для покупателей, чтобы сделать ваши товары доступнее</p>
            </div>
            </div>
            <div class="flex mt-[30px]">
                <div class="w-[280px]">

                <div class="w-[56px] h-[58px] bg-[#fff] rounded-[10px] flex items-center justify-center"><svg class="w-[32px]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" data-v-e259d758=""><path fill-rule="evenodd" d="M5.17 3.25h5.66c.535 0 .98 0 1.345.03.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.162.316.23.65.264 1.003.014.152.023.317.028.495h1.595c.306 0 .608.032.909.156.3.125.537.316.753.532l4.063 4.063c.216.216.407.452.532.753.124.3.156.603.156.909v2.859c0 .214 0 .41-.011.576-.012.178-.04.373-.122.572a1.75 1.75 0 0 1-1.375 1.061 3.25 3.25 0 0 1-6.483.019h-4.084a3.751 3.751 0 0 1-7.367-.088A2.751 2.751 0 0 1 1.25 15V7.17c0-.535 0-.98.03-1.345.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 2.752 3.55c.337-.172.693-.24 1.073-.27.365-.03.81-.03 1.345-.03ZM3.365 16.077a3.752 3.752 0 0 1 7.31.173h2.575v-2.562c.001-2.23.002-4.458 0-6.687 0-.502-.004-.842-.03-1.104-.023-.253-.063-.38-.106-.464a1.25 1.25 0 0 0-.546-.547c-.091-.046-.228-.088-.515-.111-.296-.024-.68-.025-1.253-.025H5.2c-.572 0-.957 0-1.253.025-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514-.024.296-.025.68-.025 1.253V15c0 .458.247.86.615 1.077Zm11.385.173H15a3.25 3.25 0 0 1 6 0 .37.37 0 0 0 .096-.019.25.25 0 0 0 .134-.132.632.632 0 0 0 .012-.103c.008-.108.008-.253.008-.496v-2.837c0-.204-.023-.287-.042-.335-.02-.047-.063-.122-.207-.266l-4.063-4.063c-.144-.144-.219-.187-.266-.207-.047-.02-.13-.042-.335-.042h-1.586a7348.78 7348.78 0 0 1-.001 8.5ZM7 14.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm11 1a1.75 1.75 0 1 0 0 3.502 1.75 1.75 0 0 0 0-3.502Z" clip-rule="evenodd"></path></svg></div>
                <p class="text-[18px] font-bold mt-[10px]">Работаем по всей стране</p>
                <p class="mt-[3px]">Зона покрытия Uzum Market — 200 городов, и это не предел</p>
            </div>
            <div class="w-[280px] mr-[100px] ml-[100px]">
                <div class="w-[56px] h-[58px] bg-[#fff] rounded-[10px] flex items-center justify-center"><svg class="w-[32px]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" data-v-e259d758=""><path fill-rule="evenodd" d="M11.854 3.074a7.33 7.33 0 0 0-.376.282L4.696 8.631c-.487.379-.613.485-.701.604a1.25 1.25 0 0 0-.199.406c-.04.142-.046.307-.046.924V17.8c0 .572 0 .957.025 1.252.023.288.065.425.111.515.12.236.311.427.547.547.09.046.227.088.514.111.296.024.68.025 1.253.025h11.6c.572 0 .957 0 1.252-.025.288-.023.425-.065.515-.111a1.25 1.25 0 0 0 .547-.547c.046-.09.088-.227.111-.515.024-.295.025-.68.025-1.252v-7.235c0-.617-.006-.782-.046-.924a1.248 1.248 0 0 0-.199-.406c-.088-.119-.214-.225-.7-.604l-6.783-5.275a7.418 7.418 0 0 0-.376-.282c-.106-.071-.192-.067-.292 0Zm.603-1.496c.346.093.64.323.915.539l.07.055 6.783 5.275.068.053c.387.3.692.537.918.843.199.269.347.572.437.894.103.366.102.752.102 1.242v7.351c0 .535 0 .98-.03 1.345-.03.38-.098.736-.27 1.073a2.751 2.751 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27-.364.03-.81.03-1.345.03H6.17c-.535 0-.98 0-1.345-.03-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.2c-.172-.338-.24-.694-.27-1.074-.03-.365-.03-.81-.03-1.345V10.48c0-.49 0-.876.102-1.242a2.75 2.75 0 0 1 .437-.894c.226-.306.53-.542.918-.843l.068-.053 6.782-5.275.071-.055c.276-.216.57-.446.915-.54.3-.08.615-.08.914 0ZM9.25 9a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v3.25H16a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .75-.75h1.25V9Zm1.5 3.25h2.5v-2.5h-2.5v2.5Zm-2 1.5v2.5h2.5v-2.5h-2.5Zm4 0v2.5h2.5v-2.5h-2.5Z" clip-rule="evenodd"></path></svg></div>
                <p class="text-[18px] font-bold mt-[10px]">Храним ваши товары</p>
                <p class="mt-[3px]">Современный склад больше <br> 112 000 м² — поместится всё</p>
            </div>
            <div class="w-[280px]">

                <div class="w-[56px] h-[58px] bg-[#fff] rounded-[10px] flex items-center justify-center"><svg class="w-[32px]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" data-v-e259d758=""><path fill-rule="evenodd" d="M12 2.75a.934.934 0 0 0-.95.917v7.222a.75.75 0 0 1-1.5 0V4.778a.934.934 0 0 0-.95-.917.934.934 0 0 0-.95.917v9.444a.75.75 0 0 1-1.5 0v-2.778a.934.934 0 0 0-.95-.916.934.934 0 0 0-.95.916v2.223c0 4.174 3.456 7.583 7.75 7.583 4.294 0 7.75-3.41 7.75-7.583V8.11a.934.934 0 0 0-.95-.917.934.934 0 0 0-.95.917v2.778a.75.75 0 0 1-1.5 0v-6.11a.934.934 0 0 0-.95-.917.934.934 0 0 0-.95.917v6.11a.75.75 0 0 1-1.5 0v-7.22A.934.934 0 0 0 12 2.75Zm2.227-.094A2.456 2.456 0 0 0 12 1.25c-.98 0-1.837.571-2.227 1.406A2.468 2.468 0 0 0 8.6 2.361c-1.339 0-2.45 1.068-2.45 2.417v4.439a2.471 2.471 0 0 0-.95-.19c-1.339 0-2.45 1.069-2.45 2.417v2.223c0 5.03 4.155 9.083 9.25 9.083s9.25-4.053 9.25-9.083V8.11c0-1.349-1.111-2.417-2.45-2.417-.336 0-.657.068-.95.19V4.777c0-1.349-1.111-2.417-2.45-2.417a2.47 2.47 0 0 0-1.173.295Z" clip-rule="evenodd"></path></svg></div>
                <p class="text-[18px] font-bold mt-[10px]">Помощь в подготовке</p>
                <p class="mt-[3px]">Сфотографируем и упакуем, чтобы сберечь ваше время для важного</p>
            </div>
            </div>
        </div>
    </div>




     <div>
        <div class="container_large flex justify-between items-center mt-[100px]">
            <div class="w-[428px]">
                <div style="line-height: 44px; letter-spacing: 2px;" class="  text-[36px] font-bold text-left">Nimadan boshlash va biznesni qanday qilib samaraliroq qilish kerak</div>
                <div style="line-height: 28px; letter-spacing: 0.6px;" class="mt-[16px] font-[400]  text-[18px]">Uzum Academy yordam beradi! Top sotuvchilardan tajribali ma’ruzachilar va Uzum ekspertlari, real holatlar, biznes jamiyat va juda koʻp foydali bilimlar — biznesingiz rivojlanishiga yordam beradigan hamma narsa</div>
                <button class="mt-[40px]  text-[#fff] bg-[#000] px-4 py-3 rounded-[15px] font-[500]">Batafsil ma’lumot olish
                </button>
            </div>
            <img class="object-cover rounded-[25px] w-[429px] h-[500px]" src="https://seller.uzum.uz/_nuxt/second.B3RCPCpy.png" alt="stage">
        </div>
        <div class="container_large flex justify-between items-center mt-[100px] ">
            <img class="object-cover rounded-[25px] w-[429px] h-[500px]" src="https://seller.uzum.uz/_nuxt/third.CXRV74iB.png" alt="stage">
            <div class="w-[428px]">
                <div style="line-height: 44px; letter-spacing: 2px;" class="  text-[36px] font-bold text-left">Birinchi oyda komissiyasiz savdo qiling</div>
                <div style="line-height: 28px; letter-spacing: 0.6px;" class="mt-[16px] font-[400]  text-[18px]">Kapitalbankda hisob raqamini ro‘yxatdan o‘tkazing, Uzum Marketda do‘kon oching va savdoning birinchi oyi uchun komissiya kompensatsiyasini oling</div>
                <button class="mt-[40px]  text-[#fff] bg-[#000] px-4 py-3 rounded-[15px] font-[500]">Bu qanday ishlaydi
                </button>
            </div>
        </div>
        <div>
            <div class="container_large flex justify-between items-center mb-[30px] h-[700px] ">
                <div class="w-[428px] pt-[170px] ">
                <div style="line-height: 44px; letter-spacing: 2px;" class="  text-[36px] font-bold text-left">Istalgan joydan ishlang
                </div>
                <div style="line-height: 28px; letter-spacing: 0.6px;" class="mt-[16px] font-[400]  text-[18px]">Biznesingizni masofadan boshqaring — sotuvchilar uchun qulay veb-sayt yoki mobil ilova orqali</div>
                <button class="mt-[40px] inline-block mt-2 text-[#fff] bg-[#7F4DFF] px-4 py-3 rounded-[15px] font-[500]">Sotuvchi boʻlish
                </button>
                 </div>
            <div class="container_large">
                <img class="absolute right-[-1px] mt-[-200px]  z-40  h-[616px] object-cover " src="https://seller.uzum.uz/_nuxt/iphone-uz.BUK7saXJ.png" alt="laptop">
              
            </div>
            </div>
        </div>

    </div>


        <section class="mt-[100px]">
        <div class="container w-[1190px] h-[441px] m-auto">
            <p class="text-[36px] font-bold w-full">Men Uzumda sotmoqchiman. <br> Nimadan boshlash kerak?</p>
            <div class="w-full h-[305px] flex justify-between items-center mt-12">
                <div class="w-[380px] h-[305px] bg-[#F1F1F1] p-[24px] rounded-3xl">
                    <div>
                        <div class="w-[45px] h-[45px] p-[12px] rounded-lg bg-[#ffffff]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" data-v-ed92202a=""><path fill="#7F4DFF" d="M12.088 6.2 8 9.42V5.724L12.508 2h3.052v19.6h-3.472z"></path></svg>
                        </div>
                        <h1 class="font-bold mt-[30px]">Biznesingizni roʻyxatdan oʻtkazing</h1>
                    </div>
                    <p>MChJ, YTT oching yoki roʻyxatdan oʻtgan biznesingiz boʻlmasa, oʻz-oʻzini band qiluvchi sifatida roʻyxatdan oʻting.</p>
                </div>
                <div class="w-[380px] h-[305px] bg-[#F1F1F1] p-[24px] rounded-3xl">
                    <div>
                        <div class="w-[45px] h-[45px] p-[12px] rounded-lg bg-[#ffffff]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 25 24" data-v-ed92202a=""><path fill="#7F4DFF" d="M4.667 19.304q0-1.288.532-2.24a6.1 6.1 0 0 1 1.456-1.708 10.4 10.4 0 0 1 2.072-1.26q1.148-.56 2.352-1.036a105 105 0 0 1 2.352-.952 14 14 0 0 0 2.044-1.036q.924-.56 1.456-1.26a2.68 2.68 0 0 0 .56-1.68q0-1.568-1.148-2.324-1.12-.784-3.248-.784-4.395 0-4.396 3.556v.672H5.227V8.58q0-3.22 2.072-4.9T13.095 2q3.696 0 5.768 1.596 2.1 1.596 2.1 4.536 0 1.793-.924 3.024a8.8 8.8 0 0 1-2.324 2.128 16.8 16.8 0 0 1-2.996 1.54q-1.624.644-3.024 1.232-1.372.588-2.296 1.26-.924.645-.924 1.54h12.544v3.024H4.667z"></path></svg>
                        </div>
                        <h1 class="font-bold mt-[30px]">Hisob raqami oching</h1>
                    </div>
                    <p>Sizda mavjudidan foydalaning yoki Kapitalbankda yangisini oching — u bilan savdoning birinchi oyi uchun komissiya olinmaydi</p>
                    <button class="w-[318px] h-[47px] p-3 bg-[#E6E8F7] rounded-lg mt-4 flex items-center justify-center hover:bg-slate-400">Kapitalbank hisob raqamini ochish</button>
                </div>
                <div class="w-[380px] h-[305px] bg-[#F1F1F1] p-[24px] rounded-3xl">
                    <div>
                        <div class="w-[45px] h-[45px] p-[12px] rounded-lg bg-[#ffffff]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 25 24" data-v-ed92202a=""><path fill="#7F4DFF" d="M12.481 21.88q-1.876 0-3.388-.42-1.485-.42-2.548-1.232a5.65 5.65 0 0 1-1.652-1.988q-.56-1.204-.56-2.744v-.532h3.472v.532q0 .924.336 1.568.365.645.98 1.036.645.392 1.484.588a10 10 0 0 0 1.876.168q1.035 0 1.904-.168.868-.196 1.484-.588.616-.42.952-1.036t.336-1.512q0-.924-.364-1.54a2.5 2.5 0 0 0-.98-.98q-.615-.392-1.484-.56a9.4 9.4 0 0 0-1.848-.168H7.105V9.56l7.532-4.424v-.112H5.061V2h14.588v3.024l-7.448 4.368v.112h2.1q1.428 0 2.604.448 1.176.42 1.988 1.232.84.784 1.288 1.904t.448 2.464q0 1.512-.588 2.688a5.4 5.4 0 0 1-1.624 1.988q-1.065.812-2.576 1.232-1.485.42-3.36.42"></path></svg>
                        </div>
                        <h1 class="font-bold mt-[30px]">Zarregistriruytes</h1>
                    </div>
                    <p>Akkaunt oching, shaklni toʻldiring va Uzum Marketda daromad qilishni boshlash mumkin</p>
                    <button class="w-[170px] h-[47px] p-3 bg-[#7000ff] text-blue-50 mt-[40px] rounded-lg hover:bg-blue-800">Ro'yhatdan o'tish</button>
                </div>
            </div>
        </div>
    </section>



    <div class="flex items-center justify-center">
        <div>
            <h1 style="letter-spacing: 1px;" class="text-[36px] text-[#1f2026] font-[700] mr-[700px] mt-[80px] mb-[50px]">Tez-tez beriladigan savollar</h1>
            <div class="w-[1190px] h-[750px] bg-[#f0f2f5] rounded-[20px] py-[56px] px-[73px] text-[18px] mb-[50px]">
                <div class=" hover:bg-[grey] rounded-[15px]">
                    <div class="flex justify-between items-center mb-[20px]">
                        <h2 class="font-[700] ml-[20px] mt-[25px]">Roʻyxatdan oʻtish uchun qanday hujjatlar kerak?</h2>
                        <i class="fa-solid fa-chevron-down mr-[20px] mt-[25px]"></i>
                </div>
                <hr style="height: 5px; border-color: grey; width: 97%; margin-left: 20px;">
                </div>
                <div class=" hover:bg-[grey] rounded-[15px]">
                    <div class="flex justify-between items-center mb-[20px]">
                        <h2 class="font-[700] ml-[20px] mt-[25px]">Uzum Marketda komissiya qancha?</h2>
                        <i class="fa-solid fa-chevron-down mr-[20px] mt-[25px]"></i>
                </div>
                <hr style="height: 5px; border-color: grey; width: 97%; margin-left: 20px;">
                </div>
                <div class=" hover:bg-[grey] rounded-[15px]">
                    <div class="flex justify-between items-center mb-[20px]">
                        <h2 class="font-[700] ml-[20px] mt-[25px]">Tovarlarni omborga topshirish kerakmi?</h2>
                        <i class="fa-solid fa-chevron-down mr-[20px] mt-[25px]"></i>
                </div>
                <hr style="height: 5px; border-color: grey; width: 97%; margin-left: 20px;">
                </div>
                <div class=" hover:bg-[grey] rounded-[15px]">
                    <div class="flex justify-between items-center mb-[20px]">
                        <h2 class="font-[700] ml-[20px] mt-[25px]">Uzum Marketni qanday qilib komissioner sifatida kiritish mumkin?</h2>
                        <i class="fa-solid fa-chevron-down mr-[20px] mt-[25px]"></i>
                </div>
                <hr style="height: 5px; border-color: grey; width: 97%; margin-left: 20px;">
                </div>
                <div class=" hover:bg-[grey] rounded-[15px]">
                    <div class="flex justify-between items-center mb-[20px]">
                        <h2 class="font-[700] ml-[20px] mt-[25px]">Uzum Marketni qanday qilib komissioner sifatida kiritish mumkin?</h2>
                        <i class="fa-solid fa-chevron-down mr-[20px] mt-[25px]"></i>
                </div>
                <hr style="height: 5px; border-color: grey; width: 97%; margin-left: 20px;">
                </div>
                <div class=" hover:bg-[grey] rounded-[15px]">
                    <div class="flex justify-between items-center mb-[20px]">
                        <h2 class="font-[700] ml-[20px] mt-[25px]">Komissioner belgisi yoʻqligi sababli kartochkalar bloklanishini nima qilish kerak?</h2>
                        <i class="fa-solid fa-chevron-down mr-[20px] mt-[25px]"></i>
                </div>
                <hr style="height: 5px; border-color: grey; width: 97%; margin-left: 20px;">
                </div>
                <div class=" hover:bg-[grey] rounded-[15px]">
                    <div class="flex justify-between items-center mb-[20px]">
                        <h2 class="font-[700] ml-[20px] mt-[25px]">Shartnoma sanasini qayerda koʻrish mumkin?</h2>
                        <i class="fa-solid fa-chevron-down mr-[20px] mt-[25px]"></i>
                </div>
                <hr style="height: 5px; border-color: grey; width: 97%; margin-left: 20px;">
                </div>
                <div class=" hover:bg-[grey] rounded-[15px]">
                    <div class="flex justify-between items-center mb-[20px]">
                        <h2 class="font-[700] ml-[20px] mt-[25px]">Uzum Market ombori qayerda joylashgan?</h2>

                        <i class="fa-solid fa-chevron-down mr-[20px] mt-[25px]"></i>
                </div>
                <hr style="height: 5px; border-color: grey; width: 97%; margin-left: 20px;">
                </div>
                <div class=" hover:bg-[grey] rounded-[15px]">
                    <div class="flex justify-between items-center mb-[20px]">
                        <h2 class="font-[700] ml-[20px] mt-[25px]">18+ tovarlarni sotish mumkinmi?</h2>
                        <i class="fa-solid fa-chevron-down mr-[20px] mt-[25px]"></i>
                </div>
                <hr style="height: 5px; border-color: grey; width: 97%; margin-left: 20px;">
                </div>
            </div>
        
        </div>
    </div>



  
    <div class="flex items-center justify-center mt-[50px]">
        <div>
            <div class="w-[650px] flex items-center justify-between mb-[50px]">
                <h1 class="text-[36px] font-[700] text-[#1f2026]">Отвечаем на вопросы</h1>
                <div class="flex gap-3">
                    <i class="text-[25px] bg-[#f0f2f5] px-4 py-3 rounded-[50%] fa-solid fa-chevron-left"></i>
                    <i class="text-[25px] bg-[#f0f0f0] px-4 py-3 rounded-[50%] fa-solid fa-chevron-right"></i>
                </div>
            </div>
            <div class="flex gap-10">
                <iframe class="rounded-[20px]" width="560" height="315" src="https://www.youtube.com/embed/Bh-Eq_i8dUY?si=1f5QfnaPdayuqsug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe class="rounded-[20px]" width="560" height="315" src="https://www.youtube.com/embed/QMD2eBQGJtg?si=666JvWe1Kc7j-GSG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="w-[650px] flex items-center justify-between mb-[50px] mt-[50px]">
                <h1 class="text-[36px] font-[700] text-[#1f2026]">Новости</h1>
                <div class="flex gap-3">
                    <i class="text-[25px] bg-[#f0f2f5] px-4 py-3 rounded-[50%] fa-solid fa-chevron-left"></i>
                    <i class="text-[25px] bg-[#f0f0f0] px-4 py-3 rounded-[50%] fa-solid fa-chevron-right"></i>
                </div>
            </div>
            <div class="flex gap-11">
                <div class="w-[359px] rounded-[20px] p-7  h-[300px] mb-[50px] shadow-lg hover:shadow-2xl border">
                    <h1 class="text-[20px] font-[600] mb-[10px]">Новые категории товаров <br> на Uzum Market</h1>
                    <p class="text-[15px] text-[#4d4f59]">Теперь у продавцов со всей страны появится новый канал продаж, а покупатели со всей страны могут найти товары для пчеловодства в отдельном разделе на национальном маркетплейсе. С 16 мая продавцы смогут размещать товары для...</p>
                    <p class="text-[#7e818c] text-[12px] ml-[250px] mt-[5px]">5/1/2025</p>
                </div>
                <div class="w-[359px] rounded-[20px] p-7  h-[300px] mb-[50px] shadow-lg hover:shadow-2xl border">
                    <h1 class="text-[20px] font-[600] mb-[10px]">Новые категории товаров <br> на Uzum Market</h1>
                    <p class="text-[15px] text-[#4d4f59]">Теперь у продавцов со всей страны появится новый канал продаж, а покупатели со всей страны могут найти товары для пчеловодства в отдельном разделе на национальном маркетплейсе. С 16 мая продавцы смогут размещать товары для...</p>
                    <p class="text-[#7e818c] text-[12px] ml-[250px] mt-[5px]">5/1/2025</p>
                </div>
                <div class="w-[359px] rounded-[20px] p-7  h-[300px] mb-[50px] shadow-lg hover:shadow-2xl border">
                    <h1 class="text-[20px] font-[600] mb-[10px]">Новые категории товаров <br> на Uzum Market</h1>
                    <p class="text-[15px] text-[#4d4f59]">Теперь у продавцов со всей страны появится новый канал продаж, а покупатели со всей страны могут найти товары для пчеловодства в отдельном разделе на национальном маркетплейсе. С 16 мая продавцы смогут размещать товары для...</p>
                    <p class="text-[#7e818c] text-[12px] ml-[250px] mt-[5px]">5/1/2025</p>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-[#1f2026] w-full flex items-center justify-center">
        <div>
            <h1 class="mt-[80px] text-[36px] font-[700] text-[#fff] mr-[550px]">Uzum — это не только маркетплейс</h1>

            <p class="mt-[20px] text-[#fff] text-[18px] mb-[40px]">Cоздаём целую экосистему сервисов для комфортной <br> жизни и продуктивного бизнеса</p>
            <div class="flex gap-4 mb-[20px]">
                <div class="w-[587px] bg-[#ffffff1a] p-[36px] rounded-[15px]">
                    <h2 class="text-[24px] text-[#fff] mb-[20px]">Рассрочка</h2>
                    <div class="flex items-center justify-between">
                        <img class="w-[100px] h-[100px]" src="https://seller.uzum.uz/_nuxt/nasiya.N0ph2TWp.png" alt="">
                        <img class="w-[100px] h-[100px] mr-[100px]" src="https://seller.uzum.uz/_nuxt/nasiya-business.BtOXt0Q_.png" alt="">
                    </div>
                    <div class="flex items-center justify-between mt-[20px]">
                        <div>
                            <h3 class="text-[#fff]  text-[20px]">Uzum Nasiya <i class="fa-solid fa-chevron-right"></i> </h3>
                            <p class="text-[#ffffffb3]">Удобная и честная <br> рассрочка для любых <br> покупок</p>
                        </div>
                        <div class="mr-[25px]">
                            <h3 class="text-[#fff]  text-[20px]">Uzum Nasiya <i class="fa-solid fa-chevron-right"></i> <br> Business </h3>
                            <p class="text-[#ffffffb3]">Рассрочка как способ <br> оплаты в своём бизнесе</p>
                        </div>
                    </div>
                </div> 
                <div class="w-[587px] bg-[#ffffff1a] p-[36px] rounded-[15px]">
                    <h2 class="text-[24px] text-[#fff] mb-[20px]">Банкинг</h2>
                    <div class="flex items-center justify-between">
                        <img class="w-[100px] h-[100px]" src="https://seller.uzum.uz/_nuxt/bank.CH1KUh3k.png" alt="">
                        <img class="w-[100px] h-[100px] mr-[100px]" src="https://seller.uzum.uz/_nuxt/bank-partners.DH8LkGUa.png" alt="">
                    </div>
                    <div class="flex items-center justify-between mt-[20px]">
                        <div>
                            <h2 class="text-[20px] text-[#fff]"> Uzum Bank <i class="fa-solid fa-chevron-right"></i> </h2>
                            <p class="text-[#ffffffb3]">Платёжная система <br> и надёжный онлайн-банк</p>
                        </div>
                        <div class="mr-[25px]">
                            <h2 class="text-[20px] text-[#fff]">Uzum Bank <i class="fa-solid fa-chevron-right"></i>  <br> Partners</h2>
                            <p class="text-[#ffffffb3]">Управление оплатами <br> для бизнеса</p>
                        </div>
                    </div>
                </div> 
            </div>
            <div class="flex items-center justify-center gap-4 mb-[150px]">
                <div class="w-[332px] p-[36px] bg-[#ffffff1a] rounded-[15px] text-[24px] text-[#fff]">
                    <h1 class="mb-[20px]">Бизнес</h1>
                    <img class="w-[100px] h-[100px] mb-[15px] ml-[5px]" src="https://seller.uzum.uz/_nuxt/business.Dm3toxbu.png" alt="">
                    <h2 class="text-[20px]">Uzum Business <i class="fa-solid fa-chevron-right"></i> </h2>
                    <p class="text-[16px] text-[#ffffffb3]">Сервис для управления бизнесом</p>
                </div>
                <div class="w-[332px] p-[36px] bg-[#ffffff1a] rounded-[15px] text-[24px] text-[#fff]">
                    <h1 class="mb-[20px]">Доставка</h1>
                    <img class="w-[100px] h-[75px] mb-[15px] ml-[5px]" src="https://seller.uzum.uz/_nuxt/business.Dm3toxbu.png" alt="">
                    <h2 class="text-[20px]">Uzum Tezkor<i class="fa-solid fa-chevron-right"></i> </h2>
                    <p class="text-[16px] text-[#ffffffb3]">Быстрая доставка еды <br> из кафе, ресторанов <br> и магазинов</p>
                </div>
                <div class="w-[493px] bg-[#ffffff1a] text-[#fff] px-[36px] pb-[240px] pt-[20px] rounded-[15px]">
                    <h1 class="text-[24px]">Уже готовим новый сервис!</h1>

                    <p class="text-[#ffffffb3]">Следите за обновлениями..</p>
                </div>
            </div>
            <div class="flex gap-[170px]">
                <div class="text-[#fff]">
                    <h2 class="text-[18px] mb-[20px] font-[500]">Для продавцов</h2>
                        <div class="mb-[15px]">
                            <a class="underline text-[#8b8e99]" href="#">Инструкция продавца </a>
                        </div>
                        <div class="mb-[15px]">
                            <a class="underline text-[#8b8e99]" href="#">Инструкция по регистрации </a>
                        </div>
                        <div class="mb-[15px]">
                            <a class="underline text-[#8b8e99]" href="#">Сопровождение новых партнёров</a>
                        </div>
                </div>
                <div class="text-[#fff]">
                    <h2 class="text-[18px] mb-[20px] font-[500]">Компания</h2>
                        <div class="mb-[15px]">
                            <a class="underline text-[#8b8e99]" href="#">Вакансии </a>
                        </div>
                        <div class="mb-[15px]">
                            <a class="underline text-[#8b8e99]" href="#">Публичная оферта </a>
                        </div>
                        <div class="mb-[15px]">
                            <a class="underline text-[#8b8e99]" href="#">Политика конфиденциальности</a>
                        </div>
                </div>
                <div class="text-[#fff]">
                    <h1 class="text-[18px] font-[500] mb-[20px]">Соцсети Uzum Sellers</h1>
                    <div class="flex gap-4 mb-[25px]">
                        <i class="text-[#000] py-2.5 px-3 text-[30px] bg-[#fff] rounded-[50%] fa-brands fa-instagram"></i>
                        <i class="text-[#000] py-2.5 px-2.5 text-[28px] bg-[#fff] rounded-[50%] fa-brands fa-youtube"></i>
                        <i class="text-[#000] py-2.5 px-2.5 text-[30px] bg-[#fff] rounded-[50%] fa-brands fa-telegram"></i>
                    </div>
                    <h1 class="font-[500]">Мобильное приложение <br> для продавцов Uzum Sellers</h1>
                    <div>
                        <div class="mt-[20px] flex gap-4 mb-[50px]">
                            <i class="text-[#000] py-2.5 px-3 text-[30px] bg-[#fff] rounded-[12px] fa-solid fa-play"></i>
                            <i class="text-[#000] py-2.5 px-3 text-[30px] bg-[#fff] rounded-[12px] fa-brands fa-apple"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



