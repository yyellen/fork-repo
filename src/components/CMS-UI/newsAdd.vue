<template>
  <BackNav />
  <section class="md:min-h-screen bg-white px-1 overflow-hidden">
    <div class="Container grid-CMS-3to1 h-hull py-20">
      <!-- TODO: List -->
      <div class="h-full flex flex-col justify-between rounded-lg border-2 border-gray-300 p-2">
        <div class="h-full rounded-lg overflow-y-auto p-3 bg-gray-100">
          <NowsList />
        </div>
      </div>

      <form class="md:col-span-2 flex flex-col" @submit.prevent="createNow">
        <!-- TODO: config -->
        <div class="text-gray-900 border-2 border-gray-300 rounded-lg p-2 flex flex-col justify-between">
          <div class="grid grid-cols-2">
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
              <label for="title" class="mr-2 whitespace-nowrap">副標</label>
              <input
                id="subtitle"
                type="text"
                name="subtitle"
                placeholder="subtitle"
                class="w-full border-gray-900 rounded-md mt-1 mb-2 px-2"
                v-model="subTitle"
              />
            </div>
            <div class="sm:col-span-1 col-span-2">
              <div>
                <label for="user" class="mr-2 whitespace-nowrap">作者</label>
                <input
                  id="user"
                  type="text"
                  name="user"
                  placeholder="admin"
                  class="border-gray-900 rounded-md my-2 px-2 w-10/12"
                  v-model="user"
                />
              </div>
              <div>
                <label for="time" class="mr-2 whitespace-nowrap">時間</label>
                <input
                  type="date"
                  v-model="today"
                  class="border-white rounded-md mt-2 px-2 disabled:text-gray-900"
                  disabled="disabled"
                />
              </div>
            </div>
            <div class="sm:mx-3 sm:col-span-1 col-span-2">
              <div class="my-3 mb-6">
                <label for="file" class="whitespace-nowrap">背景</label>
                <input
                  id="file"
                  type="file"
                  name="file"
                  ref="nowPhoto"
                  @change="fileChange"
                  accept=".png, .jpg, ,jpeg"
                  class="w-[80%] file:mx-2 file:py-1 file:px-3 file:font-light file:rounded-full file:border file:text-md file:bg-white file:border-gray-900 file:text-gray-900 hover:file:bg-gray-900 hover:file:text-white hover:file:cursor-pointer active:file:scale-90 file:transition file:duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- TODO: txt -->
        <div class="h-[500px] md:max-h-[70%] rounded-lg border border-gray-300 overflow-hidden text-black mt-5 mb-3">
          <vue-editor
            toolbar="full"
            :editorOptions="editorSettings"
            class="h-full"
            v-model="paras"
            useCustomImageHandler
            @image-added="imageHandler"
          />
        </div>

        <!-- TODO: save / delete -->
        <div class="flex justify-around w-full my-1">
          <button
            class="py-2 px-5 rounded-full text-green-500 border border-green-500 hover:text-white hover:bg-green-500 transition duration-300 hover:scale-90">
            保&emsp;存
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import BackNav from './BackNav.vue';
import NowsList from '../CMS-UI/List/NewList.vue'
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
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { fileStorage, db } from '../../main';
import { query, orderBy, addDoc, serverTimestamp, collection } from 'firebase/firestore';
export default {
  data() {
    return {
      title: '',
      subTitle: '',
      user: '',
      today: new Date().toISOString().slice(0, 10),
      paras: '',
      newPhotoURL: '',
      newPhotoName: '',
      createdAt: serverTimestamp(),
    };
  },
  methods: {
    async createNow() {
      // if ( this.paras == '') {
      //   alert('文章內容未填寫！');
      //   return;
      // }

      const nowColRef = collection(db, 'new');
      const addedDoc = await addDoc(nowColRef, this.$data);
      const q = query(nowColRef, orderBy('createdAt'));
      console.log('Creating Document');
      console.log(addedDoc);
      this.$router.go();
    },
    fileChange(event) {
      this.file = event.target.files[0];
      const fileName = this.file.name;
      console.log(fileName);
      this.newPhotoName = fileName;
      this.newPhotoURL = URL.createObjectURL(this.file);
    },
    imageHandler(file, Editor, cursorLocation, resetUploader) {
      const nowColRef = ref(fileStorage, `now/innerImg/${file.name}`);
      const uploadTask = uploadBytesResumable(nowColRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          console.log(snapshot);
        },
        (_error) => {},
        async () => {
          await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            Editor.insertEmbed(cursorLocation, 'image', downloadURL);
            resetUploader();
          });
        },
      );
    },
    redirectnow(id) {
      this.$router.push(`/nowColref/${id}`);
    }
  }
};
</script>