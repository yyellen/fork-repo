<template>
  <div class="itemStyle" v-for="video in videos" :key="video.id">
    <div class="itemTxtStyle">
      {{ video.title }}
    </div>
    <div class="flex justify-end">
      <!-- <button class="bg-blue-500 editBtn" @click="editHandler(esearch.id)">
        <i class="fa-solid fa-pen"></i>
      </button> -->
      <router-link :to="{ path: `/video/${video.id}` }" class="bg-blue-500 editBtn text-center " >
        <i class="fa-solid fa-pen t-1/2 translate-y-1/2"></i>
      </router-link>
      <button class="bg-red-500 editBtn" @click="deleteVideo(video.id)">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { db } from '../../../main';
import { getDocs, doc, deleteDoc, query, orderBy, collection } from 'firebase/firestore';

export default {
  data() {
    return {
      videos: []
    };
  },
  methods: {
    async fetechVideo() {
      const videoColRef = collection(db, 'video');
      let videoSnapShot = await getDocs(query(videoColRef, orderBy('createdAt', 'desc')));
      let videos = [];
      videoSnapShot.forEach((video) => {
        let videoData = video.data();
        videoData.id = video.id;
        console.log('title: ', videoData.title);
        videos.push(videoData);
      });
      // console.log(videos);
      this.videos = videos;
    },
    deleteVideo(id) {
      // console.log(id);
      const videoColRef = collection(db, 'video');
      const videoRef = doc(videoColRef, id);
      deleteDoc(videoRef)
        .then(() => {
          alert('video deleted successully!');
          this.$router.go();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.fetechVideo();
  },
};
</script>
