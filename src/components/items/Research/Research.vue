<template>
  <NavBar />
  <section id="news" class="bg-gray-100 min-h-screen">
    <div class="Container px-12 py-40 text-black">
      <h1 id="title" class="titleStyle">
        Research
        <br>
        <span class="infoStyle">
          How to become a member?
          <a href="#!" class="text-blue-500 font-normal">Join Us Now!</a>
        </span>
      </h1>
      <div class="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-10">

        <!-- <div v-for="research in researchs" :key="research.today">
          <div id="card"  class="cardStyle group scale-100 hover:scale-105 transition">
            <router-link :to="{ path: `/${research.title}` }" class="flex flex-col justify-end h-full">
              <img :src="research.newPhotoURL" class="h-full object-cover scale-105">
              <div class="p-5 bg-white z-10">
                <div id="subTitle" class="flex flex-col justify-between">
                  <h1 class="subTitleStyle">{{ research.title }}</h1>
                  <p id="date">{{ research.today }}</p>
                </div>
                <p id="info" class="infoStyle">{{ research.subTitle }}</p>
              </div>
              <button class="btnStyle z-20 relative">read more</button>
            </router-link>
          </div>
        </div> -->

        <div id="card"  class="cardStyle group scale-100 hover:scale-105 transition">
          <router-link to="/case-1" class="flex flex-col justify-end h-full">
            <img src="../../../assets/img/Research/case-1/title.png" class="h-full object-cover scale-105">
            <div class="p-5 bg-white z-10">
              <div id="subTitle" class="flex flex-col justify-between">
                <h1 class="subTitleStyle">Linkages among Biodiversity Conservation, Green Production, and Rural Development</h1>
                <p id="date">12/2020</p>
              </div>
              <p id="info" class="infoStyle">A Case Study of Liyu Community, Miaoli County, Taiwan</p>
            </div>
            <button class="btnStyle z-20 relative">read more</button>
          </router-link>
        </div>
        
        <div id="card"  class="cardStyle group scale-100 hover:scale-105 transition">
          <router-link to="/case-2" class="flex flex-col justify-end h-full">
            <img src="../../../assets/img/Research/case-2/title.png" class="h-full object-cover scale-105">
            <div class="p-5 bg-white z-10">
              <div id="subTitle" class="flex flex-col justify-between">
                <h1 class="subTitleStyle">Sustainable Rural Development Practice</h1>
                <p id="date">12/2020</p>
              </div>
              <p id="info" class="infoStyle">A Case Study of Gonglaoping, Taichung, Taiwan</p>
            </div>
            <button class="btnStyle z-20 relative">read more</button>
          </router-link>
        </div>

        <div id="card"  class="cardStyle group scale-100 hover:scale-105 transition">
          <router-link to="/case-3" class="flex flex-col justify-end h-full">
            <img src="../../../assets/img/Research/case-3/title.png" class="h-full object-cover scale-105">
            <div class="p-5 bg-white z-10">
              <div id="subTitle" class="flex flex-col justify-between">
                <h1 class="subTitleStyle">Taichung</h1>
                <p id="date">11/2019</p>
              </div>
              <p id="info" class="infoStyle">Gonglaoping Community, Taiwan</p>
            </div>
            <button class="btnStyle z-20 relative">read more</button>
          </router-link>
        </div>

        <div id="comingSoon" class="pt-10 col-span-1 xl:col-span-3 md:col-span-2 text-base lg:text-3xl md:text-2xl text-center text-[#818181] font-black uppercase tracking-widest -shadow-md grid grid-cols-7 gap-5 items-center">
          <div class="w-full h-0 col-span-2 border-b-4 border-gray-300"></div>
          <h1 class="text-shadow col-span-3">coming soon</h1>
          <div class="w-full h-0 col-span-2 border-b-4 border-gray-300"></div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import NavBar from '../../NavBar.vue'
</script>

<script>
import { db } from '../../../main';
import { getDocs, query, orderBy, collection } from 'firebase/firestore';

export default {
  data() {
    return {
      researchs: [],
    }
  },
  methods: {
    async fetechResearch() {
      const researchColRef = collection(db, 'research');
      let researchSnapShot = await getDocs(query(researchColRef, orderBy('createdAt', 'desc')));
      let researchs = [];
      researchSnapShot.forEach((research) => {
        let researchData = research.data();
        researchData.createdAt = research.time;
        console.log('bg: ', researchData.newPhotoURL);
        console.log('title: ', researchData.title);
        console.log('sub title: ', researchData.subTitle);
        console.log('time: ', researchData.today);
        researchs.push(researchData);
      });
      this.researchs = researchs;
    },
  },
  created() {
    this.fetechResearch();
  },
}
</script>

<style scoped>
.infoStyle {
  @apply md:h-12 text-[#818181];
}
#date {
  @apply py-5 text-xs md:text-base text-[#818181] font-normal;
}
</style>