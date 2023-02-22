<template>
  <NavBar />
  <div id="news" class="bg-gray-100 min-h-screen">
    <div class="CContainer xl:px-80 lg:px-60 md:px-40 sm:px-20 px-10 py-40 text-black">
      <h1 id="title" class="titleStyle">news</h1>
      <div class="grid grid-cols-1 gap-10">

        <!-- <div id="card"  class="cardStyle" v-for="now in nows" :key="now.today">
          <router-link :to="{ path: `/${now.title}` }">
            <img :src="now.newPhotoURL" class="w-full">
          </router-link>
          <div class="p-5 bg-white z-10 group">
            <div id="subTitle">
              <router-link :to="{ path: `/${now.title}` }" class="subTitleStyle">
                <h1>{{ now.title }}</h1>              
              </router-link>
              <p class="pt-5 text-sm md:text-xl text-[#818181] font-normal">by {{ now.user }}, {{ now.today }}</p>
            </div>
            <p id="info" class="infoStyle">{{ now.subTitle }}</p>
          </div>
        </div> -->

        <div id="card"  class="cardStyle">
          <router-link to="/new-1">
            <img src="../../../assets/img/公老坪地景圖.png" class="w-full">
          </router-link>
          <div class="p-5 bg-white z-10 group">
            <div id="subTitle">
              <router-link to="/new-1" class="subTitleStyle">
                <h1>IPSI-7 Summary Report and Presentation Abstracts now available</h1>              
              </router-link>
              <p class="pt-5 text-sm md:text-xl text-[#818181] font-normal">by admin, <span>12/4/2019</span></p>
            </div>
            <p id="info" class="infoStyle">The official report for the Seventh IPSI Global Conference (IPSI-7), including a compilation of presentation abstracts from all speakers...</p>
          </div>
        </div>
        <div id="card"  class="cardStyle">
          <router-link to="/new-2">
            <img src="../../../assets/img/公老坪地景圖.png" class="w-full">
          </router-link>
          <div class="p-5 bg-white z-10 group">
            <div id="subTitle">
              <router-link to="/new-2" class="subTitleStyle">
                <h1>29 May 2019: Seminar on “Satoyama Landscapes and Seascapes from around the World for Sustainable Development”</h1>              
              </router-link>
              <p class="pt-5 text-sm md:text-xl text-[#818181] font-normal">by admin, <span>12/4/2019</span></p>
            </div>
            <p id="info" class="infoStyle">A seminar will be held on Wednesday, 29 May in the Global Environment Outreach Centre (GEOC) office in the United Nations University Headquarters building in Tokyo...</p>
          </div>
        </div>
        <div id="card"  class="cardStyle">
          <router-link to="/new-3">
            <img src="../../../assets/img/公老坪地景圖.png" class="w-full">
          </router-link>
          <div class="p-5 bg-white z-10 group">
            <div id="subTitle">
              <router-link to="/new-3" class="subTitleStyle">Gonglaoping Community, Fengyuan Dist., Taichung</router-link>
              <p class="pt-5 text-sm md:text-xl text-[#818181] font-normal">by admin, <span>12/4/2019</span></p>
            </div>
            <p id="info" class="infoStyle">Gonglaping Community builds a healthy production environment and enhances system services of water resources, ecological habitats, landscape beauty and culture together, leading to a healthy landscape environment where living quality, production and ecology coexist.</p>
          </div>
        </div>

        <div id="comingSoon" class="pt-10 text-base lg:text-3xl md:text-2xl text-center text-[#818181] font-black uppercase tracking-widest -shadow-md grid grid-cols-7 gap-5 items-center">
          <div class="w-full h-0 col-span-2 border-b-4 border-gray-300"></div>
          <h1 class="text-shadow col-span-3">coming soon</h1>
          <div class="w-full h-0 col-span-2 border-b-4 border-gray-300"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from '../../NavBar.vue'

$('#card').click(() => {
  
});
</script>

<script>
import { db } from '../../../main';
import { getDocs, query, orderBy, collection } from 'firebase/firestore';

export default {
  data() {
    return {
      nows: [],
    }
  },
  methods: {
    async fetechNew() {
      const nowColRef = collection(db, 'new');
      let nowSnapShot = await getDocs(query(nowColRef, orderBy('createdAt', 'desc')));
      let nows = [];
      nowSnapShot.forEach((now) => {
        let nowData = now.data();
        nowData.createdAt = now.time;
        console.log('bg: ', nowData.newPhotoURL);
        console.log('title: ', nowData.title);
        console.log('sub title: ', nowData.subTitle);
        console.log('time: ', nowData.today);
        nows.push(nowData);
      });
      this.nows = nows;
    },
  },
  created() {
    this.fetechNew();
  },
}
</script>

<style scoped>
.subTitleStyle {
  @apply group-hover:text-black;
}
.infoStyle {
  @apply h-0 pt-2 opacity-0 invisible group-hover:h-auto group-hover:opacity-100 group-hover:visible transition duration-1000;
}
</style>