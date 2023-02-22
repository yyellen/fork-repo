<template>
  <BackNav />
  <section class="md:min-h-screen bg-white px-1 overflow-hidden">
    <div class="Container h-full py-20">
      <!-- TODO: tabBtn -->
      <ul
        id="tabs-tabJustify"
        class="nav nav-tabs nav-justified flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
        role="tablist"
      >
        <li class="nav-item flex-grow text-center" role="presentation">
          <a
            href="#tabs-videoJustify"
            id="tabs-video-tabJustify"
            class="tabBtnStyle active"
            data-bs-toggle="pill"
            data-bs-target="#tabs-videoJustify"
            role="tab"
            aria-controls="tabs-videoJustify"
            aria-selected="true"
            >Video</a
          >
        </li>
        <li class="nav-item flex-grow text-center" role="presentation">
          <a
            href="#tabs-publicationJustify"
            id="tabs-publication-tabJustify"
            class="tabBtnStyle"
            data-bs-toggle="pill"
            data-bs-target="#tabs-publicationJustify"
            role="tab"
            aria-controls="tabs-publicationJustify"
            aria-selected="false"
            >Publication</a
          >
        </li>
      </ul>

      <div class="tab-content" id="tabs-tabContentJustify">
        <!-- TODO: Video -->
        <div
          class="tab-pane fade show active"
          id="tabs-videoJustify"
          role="tabpanel"
          aria-labelledby="tabs-video-tabJustify"
        >
          <div class="grid-CMS-3to1">
            <!-- TODO: List -->
            <div class="overflow-hidden flex flex-col justify-between rounded-lg border-2 border-gray-300 p-2">
              <div class="h-full rounded-lg overflow-y-auto bg-gray-100 p-3">

                <!-- <div class="itemStyle">
                  <div class="itemTxtStyle">
                    2019 Rural UP Program at Liyu community
                  </div>
                  <div class="flex justify-end">
                    <div class="bg-blue-500 editBtn text-center cursor-pointer" >
                      <i class="fa-solid fa-pen t-1/2 translate-y-1/2"></i>
                    </div>
                    <div class="bg-red-500 editBtn flex justify-center items-center cursor-pointer">
                      <i class="fa-solid fa-trash"></i>
                    </div>
                  </div>
                </div>

                <div class="itemStyle">
                  <div class="itemTxtStyle">
                    「鱉」不住就慘了
                  </div>
                  <div class="flex justify-end">
                    <div class="bg-blue-500 editBtn text-center cursor-pointer" >
                      <i class="fa-solid fa-pen t-1/2 translate-y-1/2"></i>
                    </div>
                    <div class="bg-red-500 editBtn flex justify-center items-center cursor-pointer">
                      <i class="fa-solid fa-trash"></i>
                    </div>
                  </div>
                </div>

                <div class="itemStyle">
                  <div class="itemTxtStyle">
                    Satoyama landscape at Liyu community
                  </div>
                  <div class="flex justify-end">
                    <div class="bg-blue-500 editBtn text-center cursor-pointer" >
                      <i class="fa-solid fa-pen t-1/2 translate-y-1/2"></i>
                    </div>
                    <div class="bg-red-500 editBtn flex justify-center items-center cursor-pointer">
                      <i class="fa-solid fa-trash"></i>
                    </div>
                  </div>
                </div>

                <div class="itemStyle">
                  <div class="itemTxtStyle">
                    Satoyama landscape at Gonglaoping community
                  </div>
                  <div class="flex justify-end">
                    <div class="bg-blue-500 editBtn text-center cursor-pointer" >
                      <i class="fa-solid fa-pen t-1/2 translate-y-1/2"></i>
                    </div>
                    <div class="bg-red-500 editBtn flex justify-center items-center cursor-pointer">
                      <i class="fa-solid fa-trash"></i>
                    </div>
                  </div>
                </div> -->

                <VideoList />

              </div>
            </div>

            <div class="md:col-span-2 h-full overflow-hidden">
              <form class="md:col-span-2 flex flex-col tab-pane fade show active h-full" @submit.prevent="createVideo">
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
                      v-model="video.title"
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
                      v-model="video.about"
                    />
                  </div>
                  <div class="grid grid-cols-3">
                    <div class="col-span-1">
                      <label for="time" class="mr-2 whitespace-nowrap">時間</label>
                      <input
                        type="date"
                        v-model="video.today"
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
                        v-model="video.link"
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
                  <YouTube :src="video.link" @ready="onReady" ref="youtube" height="400px" width="100%" />
                </div>

                <!-- TODO: save / delete -->
                <div class="flex justify-around w-full my-1">
                  <button
                    class="py-2 px-5 rounded-full text-green-500 border border-green-500 hover:text-white hover:bg-green-500 transition duration-300 hover:scale-90"
                  >
                    保&emsp;存
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- TODO: Publication -->
        <div
          class="tab-pane fade"
          id="tabs-publicationJustify"
          role="tabpanel"
          aria-labelledby="tabs-publication-tabJustify"
        >
          <div class="grid-CMS-3to1">
            <!-- TODO: List -->
            <div class="overflow-hidden flex flex-col justify-between rounded-lg border-2 border-gray-300 p-2">
              <div class="h-full rounded-lg overflow-y-auto bg-gray-100 p-3">

                <!-- <div class="itemStyle">
                  <div class="itemTxtStyle">
                    2019 | Research&Policy
                  </div>
                  <div class="flex justify-end">
                    <div class="bg-blue-500 editBtn text-center cursor-pointer" >
                      <i class="fa-solid fa-pen t-1/2 translate-y-1/2"></i>
                    </div>
                    <div class="bg-red-500 editBtn flex justify-center items-center cursor-pointer">
                      <i class="fa-solid fa-trash"></i>
                    </div>
                  </div>
                </div>

                <div class="itemStyle">
                  <div class="itemTxtStyle">
                    2018 | Research&Policy
                  </div>
                  <div class="flex justify-end">
                    <div class="bg-blue-500 editBtn text-center cursor-pointer" >
                      <i class="fa-solid fa-pen t-1/2 translate-y-1/2"></i>
                    </div>
                    <div class="bg-red-500 editBtn flex justify-center items-center cursor-pointer">
                      <i class="fa-solid fa-trash"></i>
                    </div>
                  </div>
                </div>

                <div class="itemStyle">
                  <div class="itemTxtStyle">
                    2017 | Research&Policy
                  </div>
                  <div class="flex justify-end">
                    <div class="bg-blue-500 editBtn text-center cursor-pointer" >
                      <i class="fa-solid fa-pen t-1/2 translate-y-1/2"></i>
                    </div>
                    <div class="bg-red-500 editBtn flex justify-center items-center cursor-pointer">
                      <i class="fa-solid fa-trash"></i>
                    </div>
                  </div>
                </div>

                <div class="itemStyle">
                  <div class="itemTxtStyle">
                    2016 | Research&Policy
                  </div>
                  <div class="flex justify-end">
                    <div class="bg-blue-500 editBtn text-center cursor-pointer" >
                      <i class="fa-solid fa-pen t-1/2 translate-y-1/2"></i>
                    </div>
                    <div class="bg-red-500 editBtn flex justify-center items-center cursor-pointer">
                      <i class="fa-solid fa-trash"></i>
                    </div>
                  </div>
                </div>

                <div class="itemStyle">
                  <div class="itemTxtStyle">
                    2015 | Research&Policy
                  </div>
                  <div class="flex justify-end">
                    <div class="bg-blue-500 editBtn text-center cursor-pointer" >
                      <i class="fa-solid fa-pen t-1/2 translate-y-1/2"></i>
                    </div>
                    <div class="bg-red-500 editBtn flex justify-center items-center cursor-pointer">
                      <i class="fa-solid fa-trash"></i>
                    </div>
                  </div>
                </div> -->

                <PublicationList />

              </div>
            </div>

            <div class="md:col-span-2 h-full overflow-hidden">
              <form class="md:col-span-2 flex flex-col" @submit.prevent="createPublication">
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
                      v-model="publication.title"
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
                      v-model="publication.about"
                    />
                  </div>
                  <div class="grid grid-cols-3">
                    <div class="col-span-1">
                      <label for="time" class="mr-2 whitespace-nowrap">時間</label>
                      <input
                        type="date"
                        v-model="publication.today"
                        class="border-white rounded-md mt-2 px-2 disabled:text-gray-900"
                        disabled="disabled"
                      />
                    </div>
                    <div class="col-span-2 flex items-center">
                      <label for="title" class="mr-2 whitespace-nowrap">檔案</label>
                      <input
                        id="document"
                        type="url"
                        name="document"
                        v-model="publication.document"
                        placeholder="https://example.com"
                        pattern="https://.*"
                        class="w-full border-gray-900 rounded-md mt-1 mb-2 px-2"
                        required
                      />
                    </div>
                  </div>
                </div>

                <!-- TODO: iframe -->
                <div class="border-2 border-gray-300 rounded-lg overflow-hidden text-black mt-5 mb-3 grow">
                  <iframe :src="publication.document" class="min-h-[400px] w-full" />
                </div>

                <!-- TODO: save / delete -->
                <div class="flex justify-around w-full my-1">
                  <button
                    class="py-2 px-5 rounded-full text-green-500 border border-green-500 hover:text-white hover:bg-green-500 transition duration-300 hover:scale-90"
                  >
                    保&emsp;存
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import YouTube from 'vue3-youtube';
</script>

<script>
import BackNav from './BackNav.vue';

import { ref, uploadBytesResumable } from 'firebase/storage';
import { db } from '../../main';
import { query, orderBy, addDoc, serverTimestamp, collection } from 'firebase/firestore';

import PublicationList from '../CMS-UI/List/PublicationList.vue';
import VideoList from '../CMS-UI/List/VideoList.vue';

export default {
  data() {
    return {
      video: {
        title: '',
        about: '',
        today: new Date().toISOString().slice(0, 10),
        link: '',
        createdAt: serverTimestamp(),
      },
      publication: {
        title: '',
        about: '',
        today: new Date().toISOString().slice(0, 10),
        document: '',
        createdAt: serverTimestamp(),
      }
    }
  },
  methods: {
    async createVideo() {
      const video = this.video;
      console.log(video);
      if (video.title !== '' && video.link !== '' ) {
        const videoColRef = collection(db, 'video');
        const addedDoc = await addDoc(videoColRef, video);
        const q = query(videoColRef, orderBy('createdAt'));
        console.log('Creating Document');
        console.log(addedDoc);
        this.$router.go();
        return;
      } else {
        alert('未填寫！');
      }
    },
    async createPublication() {
      const publication = this.publication;
      console.log(publication);
      if (publication.title !== '' && publication.document !== '' ) {
        const publicationColRef = collection(db, 'publication');
        const addedDoc = await addDoc(publicationColRef, publication);
        const q = query(publicationColRef, orderBy('createdAt'));
        console.log('Creating Document');
        console.log(addedDoc);
        this.$router.go();
        return;
      } else {
        alert('未填寫！');
      }
    }
  }
}

</script>

<style scoped>
.tabBtnStyle {
  @apply nav-link w-full block font-medium text-xs leading-6 uppercase rounded-t-box px-6 py-3 my-2 hover:bg-gray-900 hover:text-white;
}
</style>
