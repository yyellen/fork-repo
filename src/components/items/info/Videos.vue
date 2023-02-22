<template>
  <NavBar />
  <div id="video" class="min-h-screen bg-gray-100">
    <div class="Container sm:px-12 md:px-24 py-40">
      <h1 id="title" class="titleStyle">video</h1>
      <div class="px-5 grid grid-cols-1 lg:grid-cols-2 gap-10">

        <!-- <div id="card" class="h-auto text-black bg-white shadow-lg overflow-hidden rounded-box scale-1 hover:scale-110 transition" v-for="video in videos" :key="video.today">
          <YouTube :src="video.link" @ready="onReady" ref="youtube" height="300" width="100%" />
          <div id="info">
            <div id="title">
              <p class="text-[#818181] para">{{ video.today }}</p>
              <a target="_blank" href="https://www.youtube.com/watch?v=3F2DDJgNxpk">
                <h1 id="subtitle" class="md-title active:!text-gray-900">{{ video.title }}</h1>
              </a>
            </div>
            <p class="text-[#818181] para">關於：{{ video.about }}</p>
          </div>
        </div> -->

        <div id="card" class="h-auto text-black bg-white shadow-lg overflow-hidden rounded-box scale-1 hover:scale-110 transition">
          <iframe width="600" height="300" class="w-full" src="https://www.youtube-nocookie.com/embed/3F2DDJgNxpk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div id="info">
            <div id="title">
              <p class="text-[#818181] para">07/31/2019</p>
              <a target="_blank" href="https://www.youtube.com/watch?v=3F2DDJgNxpk">
                <h1 id="subtitle" class="md-title active:!text-gray-900">2019 Rural UP Program at Liyu community</h1>
              </a>
            </div>
            <p class="text-[#818181] para">關於：國際洄游駐村共學計畫</p>
          </div>
        </div>

        <div id="card" class="h-auto text-black bg-white shadow-lg overflow-hidden rounded-box scale-1 hover:scale-110 transition">
          <iframe width="600" height="300" class="w-full" src="https://www.youtube-nocookie.com/embed/GZDHQSjEcAo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div id="info">
            <div id="title">
              <p class="text-[#818181] para">07/31/2019</p>
              <a target="_blank" href="https://www.youtube.com/watch?v=GZDHQSjEcAo">
                <h1 id="subtitle" class="md-title active:!text-gray-900">「鱉」不住就慘了</h1>
              </a>
            </div>
            <p class="text-[#818181] para">關於：苗栗縣三義鄉鯉魚社區</p>
          </div>
        </div>

        <div id="card" class="h-auto text-black bg-white shadow-lg overflow-hidden rounded-box scale-1 hover:scale-110 transition">
          <iframe width="600" height="300" class="w-full" src="https://www.youtube.com/embed/NMI7qeVAK68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div id="info" class="xl:h-[33.5%] flex flex-col justify-between">
            <div id="title">
              <p class="text-[#818181] para">07/31/2019</p>
              <a target="_blank" href="https://www.youtube.com/watch?v=NMI7qeVAK68">
                <h1 id="subtitle" class="md-title active:!text-gray-900">Satoyama landscape at Liyu community</h1>
              </a>
            </div>
            <p class="text-[#818181] para">關於：苗栗縣三義鄉鯉魚社區</p>
          </div>
        </div>

        <div id="card" class="h-auto text-black bg-white shadow-lg overflow-hidden rounded-box scale-1 hover:scale-110 transition">
          <iframe width="600" height="300" class="w-full" src="https://www.youtube-nocookie.com/embed/ySTtauAddoI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div id="info">
            <div id="title">
              <p class="text-[#818181] para">07/31/2019</p>
              <a target="_blank" href="https://www.youtube.com/watch?v=ySTtauAddoI">
                <h1 id="subtitle" class="md-title active:!text-gray-900">Satoyama landscape at Gonglaoping community</h1>
              </a>
            </div>
            <p class="text-[#818181] para">關於：台中市豐原區公老坪社區</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from '../../NavBar.vue'
import YouTube from 'vue3-youtube';
</script>

<script>
import { db } from '../../../main';
import { getDocs, query, orderBy, collection } from 'firebase/firestore';

export default {
  data() {
    return {
      videos: [],
    }
  },
  methods: {
    async fetechVideo() {
      const videoColRef = collection(db, 'video');
      let videoSnapShot = await getDocs(query(videoColRef, orderBy('createdAt', 'desc')));
      let videos = [];
      videoSnapShot.forEach((video) => {
        let videoData = video.data();
        videoData.createdAt = video.time;
        console.log('title: ', videoData.title);
        console.log('about: ', videoData.about);
        console.log('link: ', videoData.link);
        console.log('time: ', videoData.today);
        videos.push(videoData);
      });
      this.videos = videos;
    },
  },
  created() {
    this.fetechVideo();
  },
}
</script>

<style scoped>
#info {
  @apply p-5 flex flex-col justify-between lg:h-52;
}
</style>