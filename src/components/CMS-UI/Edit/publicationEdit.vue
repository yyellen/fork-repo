<template>
  <BackNav />
  <section class="md:h-screen bg-white px-1 overflow-hidden">
    <div class="Container h-full py-20">
      <form class="md:col-span-2 flex flex-col h-full" @submit.prevent="updatePublication">
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
              <label for="title" class="mr-2 whitespace-nowrap">檔案</label>
              <input
                id="document"
                type="url"
                name="document"
                v-model="document"
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
          <iframe :src="document" class="min-h-[400px] w-full h-full" />
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
import BackNav from '../BackNav.vue';
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
      document: '',
    };
  },
  methods: {
    async getPublication() {
      const publicationColRef = collection(db, 'publication');
      let publicationRef = doc(publicationColRef, this.publicationId);
      this.docRef = publicationRef;
      let publication = await getDoc(this.docRef);
      let publicationData = publication.data();
      this.title = publicationData.title;
      this.about = publicationData.about;
      this.today = publicationData.today;
      this.document = publicationData.document;

      console.log(publicationData);
    },
    async updatePublication() {
      const publicationColRef = collection(db, 'publication');
      let publicationRef = doc(publicationColRef, this.publicationId);
      this.docRef = publicationRef;
      await updateDoc(this.docRef, this.$data);
      alert(
        `名稱為 ${this.title} 更新成功!`
      );
      this.$router.push("/infoAdd");
    },
  },
  created() {
    let publicationId = this.$route.params.publicationId;
    this.publicationId = publicationId;
    this.getPublication();
  },
};
</script> 