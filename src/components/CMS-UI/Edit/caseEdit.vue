<template>
  <BackNav />
  <section class="md:h-screen bg-white px-1 overflow-hidden">
    <div class="Container h-full py-20">
      <form class="md:col-span-2 flex flex-col h-full" @submit.prevent="updateresearch">
        <!-- TODO: config -->
        <div class="text-gray-900 border-2 border-gray-300 rounded-lg p-2 flex flex-col justify-between">
          <div class="grid grid-cols-2">
            <div class="flex items-center col-span-2">
              <label for="title" class="mr-2 whitespace-nowrap">標題</label>
              <input id="title" type="text" name="title" placeholder="title"
                class="w-full border-gray-900 rounded-md mt-1 mb-2 px-2" v-model="title" />
            </div>
            <div class="flex items-center col-span-2">
              <label for="subTitle" class="mr-2 whitespace-nowrap">副標</label>
              <input id="subTitle" type="text" name="subTitle" placeholder="subtitle"
                class="w-full border-gray-900 rounded-md mt-1 mb-2 px-2" v-model="subTitle" />
            </div>
            <div class="sm:col-span-1 col-span-2">
              <div>
                <label for="user" class="mr-2 whitespace-nowrap">作者</label>
                <input id="user" type="text" name="user" placeholder="admin"
                  class="border-gray-900 rounded-md my-2 px-2 w-10/12" v-model="user" />
              </div>
              <div>
                <label for="time" class="mr-2 whitespace-nowrap">時間</label>
                <input type="date" v-model="today"
                  class="border-white rounded-md mt-2 px-2 disabled:text-gray-900" disabled="disabled" />
              </div>
            </div>
            <div class="sm:mx-3 sm:col-span-1 col-span-2">
              <div class="my-3 mb-6">
                <label for="file" class="whitespace-nowrap">背景</label>
                <input id="file" type="file" name="file" ref="casePhoto" @change="fileChange" accept=".png, .jpg, ,jpeg"
                  class="w-[80%] file:mx-2 file:py-1 file:px-3 file:font-light file:rounded-full file:border file:text-md file:bg-white file:border-gray-900 file:text-gray-900 hover:file:bg-gray-900 hover:file:text-white hover:file:cursor-pointer active:file:scale-90 file:transition file:duration-300" />
              </div>
            </div>
          </div>
        </div>

        <!-- TODO: txt -->
        <div class="h-[500px] md:h-[70%] max-h-max rounded-lg border border-gray-300 overflow-hidden text-black mt-5 mb-3">
          <vue-editor toolbar="full" :editorOptions="editorSettings" class="h-full" v-model="paras"
            useCustomImageHandler @image-added="imageHandler" />
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
import { VueEditor, Quill } from 'vue3-editor';
import { ImageDrop } from 'quill-image-drop-module';
import ImageEdit from 'quill-image-edit-module';
Quill.register('modules/imageEdit', ImageEdit);
Quill.register('modules/imageDrop', ImageDrop);
const today = new Date().toISOString().slice(0, 10);
const editorSettings = {
  modules: {
    imageDrop: true,
    imageEdit: {
      modules: ['Resize', 'DisplaySize', 'Toolbar', 'Delete'],
    },
  },
};
</script>

<script>
import { db } from '../../../main.js';
import { getDoc, doc, updateDoc, collection } from 'firebase/firestore';
export default {
  data() {
    return {
      title: '',
      subTitle: '',
      user: '',
      today: new Date().toISOString().slice(0, 10),
      paras: '',
      casePhotoURL: '',
      casePhotoName: '',
    };
  },
  methods: {
    async getresearch() {
      const researchColRef = collection(db, 'research');
      let researchRef = doc(researchColRef, this.researchId);
      this.docRef = researchRef;
      let research = await getDoc(this.docRef);
      let researchData = research.data();
      this.title = researchData.title;
      this.subTitle = researchData.subTitle;
      this.user = researchData.user;
      this.today = researchData.today;
      this.paras = researchData.paras;
      this.casePhotoURL = researchData.casePhotoURL;

      console.log(researchData);
    },
    async fileChange(event) {
      this.file = event.target.files[0];
      const fileName = this.file.name;
      console.log(fileName);
      this.casePhotoName = fileName;
      this.casePhotoURL = URL.createObjectURL(this.file);
    },
    async updateresearch() {
      const researchColRef = collection(db, 'research');
      let researchRef = doc(researchColRef, this.researchId);
      this.docRef = researchRef;
      await updateDoc(this.docRef, this.$data);
      alert(
        `${this.title} 更新成功!`
      );
      this.$router.push("/researchAdd");
    },
  },
  created() {
    let researchId = this.$route.params.researchId;
    this.researchId = researchId;
    this.getresearch();
  },
};
</script> 