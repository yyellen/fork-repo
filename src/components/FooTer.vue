<template>
  <div id="footer" class="bg-white text-black">
    <div class="md:py-5 p-10 md:Container">
      <div class="md:pb-10 px-5">
        <router-link to="/" class="title tracking-[2px]">IRUP</router-link>
      </div>
      <div class="grid grid-cols-1 xxs:grid-cols-3 lg:grid-cols-5 gap-10 text-lg">

        <div>
          <h1 class="subTitle px-5">about</h1>
          <hr class="border my-1 md:my-3">
          <ul class="px-5 text-[#818181]">
            <li>
              <router-link to="/organize" class="para active:text-black">organize</router-link>
            </li>
            <li>
              <router-link to="/member" class="para active:text-black">member</router-link>
            </li>
          </ul>
        </div>

        <div>
          <h1 class="subTitle px-5">items</h1>
          <hr class="border my-1 md:my-3">
          <ul class="px-5 text-[#818181]">
            <li>
              <router-link to="/research" class="para active:text-black">research</router-link>
            </li>
            <li>
              <router-link to="/news" class="para active:text-black">news</router-link>
            </li>
          </ul>
        </div>

        <div>
          <h1 class="subTitle px-5">info</h1>
          <hr class="border my-1 md:my-3">
          <ul class="px-5 text-[#818181]">
            <li>
              <router-link to="/video" class="para active:text-black">video</router-link>
            </li>
            <li>
              <router-link to="/publication" class="para active:text-black">publication</router-link>
            </li>
          </ul>
        </div>

        <div class="xxs:col-span-3 lg:col-span-2">
          <h1 class="subTitle px-5 uppercase">contact</h1>
          <hr class="border my-1 md:my-3">
          <ul class="px-5 text-[#818181]">
            <li class="flex items-start para">
              <i class="fa-solid fa-map-location-dot mr-3 text-black"></i>
              <a target="_blank" href="https://goo.gl/maps/1heG1sWQvpwFeEyPA" class="text-black">145 Xingda Rd., Taichung 402, Taiwan R.O.C.</a>
            </li>
            <li class="flex items-start para">
              <i class="fa-solid fa-phone mr-3"></i>
              <a target="_blank" href="tel:+886-4-22859125" class="active:text-black">+886-4-22859125</a>
            </li>
            <li class="flex items-start para">
              <i class="fa-solid fa-envelope mr-3"></i>
              <a target="_blank" href="mailto:cfwu@dragon.nchu.edu.tw" class="active:text-black break-all">cfwu@dragon.nchu.edu.tw</a>
            </li>
          </ul>
        </div>

      </div>
      <div class="mt-5">
        <div class="para px-5 py-0 [opacity-0] overflow-hidden [hover:opacity-100] [transition] [duration-1000] [delay-500]">
          </div>
        <div class="other px-5">
          <div class="para">
            <span class="font-bold">Powered by </span><a href="#!">IRUP - International Rural-Up Partnership</a>
            <!-- 開發者 -->
            <br>
            <span class="font-bold pt-2">Create by 
              <router-link to="/developers" class="font-light text-gray-900">Taiwan Developers</router-link>
            </span>

          </div>
          <div id="follow" class="grid grid-cols-3 gap-5 text-2xl text-center">
            <a target="_blank" href="https://www.facebook.com/">
              <i class="text-blue-500 fa-brands fa-facebook-f"></i>
            </a>
            <a target="_blank" href="https://www.youtube.com/">
              <i class="text-red-500 fa-brands fa-youtube"></i>
            </a>
            <a target="_blank" href="https://line.me/R/ti/p/%40iqh4627l">
              <i class="text-green-500 fa-brands fa-line"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  line-height: 40px;
}
.title {
  @apply text-xl lg:text-3xl font-bold uppercase;
}
.subTitle {
  @apply text-base lg:text-xl uppercase font-bold;
}
.para {
  @apply text-sm lg:text-base font-light;
}

.other {
  @apply flex flex-col md:flex-row justify-between items-center;
}
</style>