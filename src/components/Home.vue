<template>
  <NavBar />
  <!-- TODO: Title OK -->
  <div id="index">
    <div id="indexImg" class="h-screen overflow-hidden">
      <div class="w-full h-full text-white flex flex-col justify-center text-center absolute z-10">
        <h1 class="title">International Rural-Up Partnership</h1>
        <p  class="para w-4/5 md:max-w-2/3 place-self-center text-center !font-normal">Members of IRUP are also expected to submit at least one case study report in English, on their areas of expertise or activities in relation to Rural development, within 6 months of the successful approval of their application for Rural-up membership.</p>
        <a href="http://vis.ntc.im/formmaker/1">
          <button class="place-self-center w-32 py-2 btnStyle1 border-white rounded-full hover:bg-gray-200 hover:text-black">JOIN US</button>
        </a>
      </div>
      <div class="h-full w-full absolute -z-10 overflow-hidden">
        <!-- <div id="mask" class="w-full h-full bg-black opacity-30 absolute -z-10"></div> -->
        <div id="titleIMG" class="min-h-screen block l:hidden"></div>

        <div id="titleVIDEO" class="min-h-screen aspect-video absolute -z-20 left-1/2 -translate-x-1/2 hidden l:block">
          <iframe class="w-full h-screen object-cover scale-150 border-4 border-red-500 " src="https://www.youtube.com/embed/wAMaCt6catY?rel=0&playlist=wAMaCt6catY&autoplay=1&mute=1&controls=0&loop=1&disablekb=1&modestbranding=1"></iframe>
        </div>
        <!-- <video src="../assets/img/10秒前導片-1.mp4" autoplay muted loop class="object-cover h-screen absolute -z-20 w-full" /> -->
        <!-- <video autoplay="autoplay" loop="loop" muted defaultMuted playsinline  oncontextmenu="return false;"  preload="auto"  id="myVideo" class="object-cover h-screen absolute -z-20 w-full">
          <source src="../assets/img/10秒前導片-1.mp4" type="video/mp4">
        </video> -->

      </div>
    </div>
  </div>

  <!-- TODO: About OK -->
  <div id="about">
    <div class="lg:h-screen grid grid-cols-1 lg:grid-cols-4 bg-gray-100 text-black items-center py-10 lg:py-0">
      <div id="info" class="col-span-2 px-10">
        <h1 class="title pb-5 2xl:pb-10">What is<br>International Rural-Up<br>Partnership (IRUP)</h1>
        <p class="para [text-justify]">
          IRUP is a partnership made up of member organizations dedicated to working together to pursue humansociety in harmony with nature.
          <br><br>
          In the emerging global society, people have developed ways to utilize and manage their surrounding environments on purposes to improve and sustain both daily lives and agricultural production.
          <br><br>
          Based on knowledge and practices locally accumulated in such human-nature interactions over time, rural development and their management mechanisms should have created elaborate systems that can continued to support local communities to sustain not only local economics (e.g., production) but also social (e.g., traditional wisdom) and environmental aspects (e.g., maintaining biodiversity).
        </p>
      </div>
      <div id="aboutImg" class="col-span-2 h-0 lg:h-3/5"></div>
    </div>
  </div>

  <!-- TODO: News OK -->
  <div id="News" class="bg-white text-black">
    <div class="flex flex-col justify-center lg:min-h-screen p-10 md:px-24 lg:px-32">
      <h1 id="title" class="title text-center">news</h1>
      <div id="card" class="py-5 md:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        <!-- TODO: new-test -->
        <!-- <router-link :to="{ path: `/${now.today}` }" v-for="now in nows" :key="now.today" class="scale-100 hover:scale-105 transition cardStyle shadow-xl">
          <img :src="now.newPhotoURL" class="w-full">
          <div class="p-5 bg-white z-10">
            <div class="cardTitle">{{ now.title }}</div>
            <div class="pt-5 text-base text-light text-[#818181]">by {{ now.user }}, {{ now.today }}</div>
          </div>
        </router-link> -->

        <!-- TODO: new-1 -->
        <router-link to="/new-1" class="scale-100 hover:scale-105 transition cardStyle shadow-xl">
          <img src="../assets/img/公老坪地景圖.png" class="w-full">
          <div class="p-5 bg-white z-10">
            <h1 class="cardTitle">IPSI-7 Summary Report and Presentation Abstracts now available</h1>
            <p class="pt-5 text-base text-light text-[#818181]">by admin, <span>12/4/2019</span></p>
          </div>
        </router-link>

        <!-- TODO: new-2 -->
        <router-link to="/new-2" class="scale-100 hover:scale-105 transition cardStyle shadow-xl">
          <img src="../assets/img/公老坪地景圖.png" class="w-full">
          <div class="p-5 bg-white z-10">
            <h1 class="cardTitle">29 May 2019: Seminar on “Satoyama Landscapes and Seascapes from around the World for Sustainable Development”</h1>
            <p class="pt-5 text-base text-light text-[#818181]">by admin, <span>12/4/2019</span></p>
          </div>
        </router-link>

        <!-- TODO: new-3 -->
        <router-link to="/new-3" class="scale-100 hover:scale-105 transition cardStyle shadow-xl">
          <img src="../assets/img/公老坪地景圖.png" class="w-full">
          <div class="p-5 bg-white z-10">
            <h1 class="cardTitle">Gonglaoping Community, Fengyuan Dist., Taichung</h1>
            <p class="pt-5 text-base text-light text-[#818181]">by admin, <span>12/4/2019</span></p>
          </div>
        </router-link>

      </div>
      <router-link to="/news" class="flex justify-center">
        <button class="btnStyle1 border-black hover:bg-black hover:text-white">read more</button>
      </router-link>
    </div>
  </div>

  <!-- TODO: About-2 OK -->
  <div id="about-2">
    <div class="bg-gray-900 text-gray-300 p-10 lg:py-20 text-center">
      <div class="">
        <h1 class="title">Our Mission & Vision</h1>
        <p class="para text-center">To tackle the critical issue, the National Chung Hsing University and Texas A&M University set up joint center to promote sustainable agriculture and rural development.Implementation promotes activities consistent with existing fundamental principles and nation's policy, such as the Rural Regeneration in Taiwan .Our core vision is to pursue human society in harmony with nature, that is, built on positive human-agriculture-nature relationships.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from './NavBar.vue'

const isRendered = ref(false);
const touchScreen = navigator.maxTouchPoints;
const titleVIDEO = ref('');
</script>

<script>
import { db } from '../main';
import { getDocs, query, orderBy, collection } from 'firebase/firestore';
import { ref } from 'vue';

export default {
  data() {
    return {
      nows: [],
    }
  },
  methods: {
    async fetechNow() {
      const nowColRef = collection(db, 'new');
      let nowSnapShot = await getDocs(query(nowColRef, orderBy('createdAt', 'desc')));
      let nows = [];
      nowSnapShot.forEach((now) => {
        let nowData = now.data();
        nowData.createdAt = now.time;
        console.log('bg: ', nowData.newPhotoURL);
        console.log('title: ', nowData.title);
        console.log('time: ', nowData.today);
        nows.push(nowData);
      });
      this.nows = nows;
    },
    // changeBG() {
    //   if (touchScreen >= 1) {
    //     // 浏览器支持多点触控
    //     isRendered.value = true;
    //     titleVIDEO.remove();
    //     console.log('success');
    //   } else {
    //     isRendered.value = false;
    //   }
    // }
  },
  created() {
    this.fetechNow();
    // this.changeBG();
  },
}
</script>

<style>
#titleIMG {
  background-image: url('../assets/img/index.jpeg');
  background-repeat: no-repeat;
  background-position: left center;
  background-size: cover;
}
#aboutImg {
  background-image: url('../assets/img/index-3.jpeg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>

<style scoped>
.title {
  @apply mb-5 text-xl lg:text-3xl font-bold uppercase md:pb-5;
}
.para {
  @apply mb-5 text-sm lg:text-base font-light;
}

.btnStyle1 {
  @apply mt-5 px-5 py-2 text-base text-center uppercase transition border rounded-full font-bold;
}

.cardTitle {
  @apply text-xl w-full h-[3.5rem] lg:h-[5.5rem] text-ellipsis overflow-hidden font-semibold line-clamp-3;
}
</style>