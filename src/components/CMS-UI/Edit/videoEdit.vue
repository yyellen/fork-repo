<template>
  <BackNav />
  <section class="md:h-screen bg-white px-1 overflow-hidden">
    <div class="Container h-full py-20">
      <form class="md:col-span-2 flex flex-col h-full" @submit.prevent="updateVideo">
        <!-- TODO: config -->
        <div class="text-gray-900 border-2 border-gray-300 rounded-lg p-2 flex flex-col justify-between">
          <div class="flex items-center col-span-2">
            <label for="title" class="mr-2 whitespace-nowrap">標題</label>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="title"
              class="w-full border-gray-900 rounded-md mt-1 mb-2 px-2"
              v-model="title"
            />
          </div>
          <div class="flex items-center col-span-2">
            <label for="title" class="mr-2 whitespace-nowrap">關於</label>
            <input
              id="about"
              type="text"
              name="about"
              placeholder="about"
              class="w-full border-gray-900 rounded-md mt-1 mb-2 px-2"
              v-model="about"
            />
          </div>
          <div class="grid grid-cols-3">
            <div class="col-span-1">
              <label for="time" class="mr-2 whitespace-nowrap">時間</label>
              <input
                type="date"
                v-model="today"
                class="border-white rounded-md mt-2 px-2 disabled:text-gray-900"
                disabled="disabled"
              />
            </div>
            <div class="col-span-2 flex items-center">
              <label for="title" class="mr-2 whitespace-nowrap">影片</label>
              <input
                id="link"
                type="url"
                name="link"
                v-model="link"
                placeholder="only youtube url"
                pattern="https://.*"
                class="w-full border-gray-900 rounded-md mt-1 mb-2 px-2"
                required
              />
            </div>
          </div>
        </div>

        <!-- TODO:  -->
        <div class="min-h-[400px] rounded-lg overflow-hidden text-black mt-5 mb-3">
          <YouTube :src="link" @ready="onReady" ref="youtube" height="600px" width="100%" />
        </div>

        <!-- TODO: save / delete -->
        <div class="flex justify-around w-full my-1">
          <button
            class="py-2 px-5 rounded-full text-green-500 border border-green-500 hover:text-white hover:bg-green-500 transition duration-300 hover:scale-90">
            保&emsp;存
          </button>
          <!-- <div
            class="py-2 px-5 rounded-full text-gray-500 border border-gray-500 hover:text-white hover:bg-gray-500 transition duration-300 hover:scale-90 cursor-pointer"
            @click="refresh"
          >
            取&emsp;消
          </div> -->
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import BackNav from '../BackNav.vue';
import YouTube from 'vue3-youtube';
</script>

<script>
import { db } from '../../../main.js';
import { getDoc, doc, updateDoc, collection } from 'firebase/firestore';
export default {
  data() {
    return {
      title: '',
      about: '',
      today: new Date().toISOString().slice(0, 10),
      link: '',
    };
  },
  methods: {
    async getVideo() {
      const videoColRef = collection(db, 'video');
      let videoRef = doc(videoColRef, this.videoId);
      this.docRef = videoRef;
      let video = await getDoc(this.docRef);
      let videoData = video.data();
      this.title = videoData.title;
      this.about = videoData.about;
      this.today = videoData.today;
      this.link = videoData.link;
      console.log(videoData);
    },
    async updateVideo() {
      const videoColRef = collection(db, 'video');
      let videoRef = doc(videoColRef, this.videoId);
      this.docRef = videoRef;
      await updateDoc(this.docRef, this.$data);
      alert(
        `名稱為 ${this.title} 更新成功!`
      );
      this.$router.push("/infoAdd");
    },
  },
  created() {
    let videoId = this.$route.params.videoId;
    this.videoId = videoId;
    this.getVideo();
  },
};
</script> 