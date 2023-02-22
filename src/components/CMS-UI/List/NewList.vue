<template>
  <div class="itemStyle" v-for="now in nows" :key="now.id">
    <div class="itemTxtStyle">
      {{ now.title }}
    </div>
    <div class="flex justify-end">
      <!-- <button class="bg-blue-500 editBtn" @click="editHandler(esearch.id)">
        <i class="fa-solid fa-pen"></i>
      </button> -->
      <router-link :to="{ path: `/now/${now.id}` }" class="bg-blue-500 editBtn text-center " >
        <i class="fa-solid fa-pen t-1/2 translate-y-1/2"></i>
      </router-link>
      <button class="bg-red-500 editBtn" @click="deleteNow(now.id)">
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
      nows: []
    };
  },
  methods: {
    async fetechNow() {
      const nowColRef = collection(db, 'new');
      let nowSnapShot = await getDocs(query(nowColRef, orderBy('createdAt', 'desc')));
      let nows = [];
      nowSnapShot.forEach((now) => {
        let nowData = now.data();
        nowData.id = now.id;
        console.log('title: ', nowData.title);
        nows.push(nowData);
      });
      // console.log(nows);
      this.nows = nows;
    },
    deleteNow(id) {
      // console.log(id);
      const nowColRef = collection(db, 'new');
      const nowRef = doc(nowColRef, id);
      deleteDoc(nowRef)
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
    this.fetechNow();
  },
};
</script>
