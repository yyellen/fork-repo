<template>
  <div class="itemStyle" v-for="research in researchs" :key="research.id">
    <div class="itemTxtStyle">
      {{ research.title }}
    </div>
    <div class="flex justify-end">
      <!-- <button class="bg-blue-500 editBtn" @click="editHandler(esearch.id)">
        <i class="fa-solid fa-pen"></i>
      </button> -->
      <router-link :to="{ path: `/research/${research.id}` }" class="bg-blue-500 editBtn text-center " >
        <i class="fa-solid fa-pen t-1/2 translate-y-1/2"></i>
      </router-link>
      <button class="bg-red-500 editBtn" @click="deleteResearch(research.id)">
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
      researchs: []
    };
  },
  methods: {
    async fetechResearch() {
      const researchColRef = collection(db, 'research');
      let researchSnapShot = await getDocs(query(researchColRef, orderBy('createdAt', 'desc')));
      let researchs = [];
      researchSnapShot.forEach((research) => {
        let researchData = research.data();
        researchData.id = research.id;
        console.log('title: ', researchData.title);
        researchs.push(researchData);
      });
      // console.log(researchs);
      this.researchs = researchs;
    },
    deleteResearch(id) {
      // console.log(id);
      const researchColRef = collection(db, 'research');
      const researchRef = doc(researchColRef, id);
      deleteDoc(researchRef)
        .then(() => {
          alert('文章刪除成功');
          this.$router.go();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.fetechResearch();
  },
};
</script>
