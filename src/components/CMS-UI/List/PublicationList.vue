<template>
  <div class="itemStyle" v-for="publication in publications" :key="publication.id">
    <div class="itemTxtStyle">
      {{ publication.title }}
    </div>
    <div class="flex justify-end">
      <router-link :to="{ path: `/publication/${publication.id}` }" class="bg-blue-500 editBtn text-center " >
        <i class="fa-solid fa-pen t-1/2 translate-y-1/2"></i>
      </router-link>
      <button class="bg-red-500 editBtn" @click="deletePublication(publication.id)">
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
      publications: []
    };
  },
  methods: {
    async fetechPublication() {
      const publicationColRef = collection(db, 'publication');
      let publicationSnapShot = await getDocs(query(publicationColRef, orderBy('createdAt', 'desc')));
      let publications = [];
      publicationSnapShot.forEach((publication) => {
        let publicationData = publication.data();
        publicationData.id = publication.id;
        console.log('title: ', publicationData.title);
        publications.push(publicationData);
      });
      // console.log(publications);
      this.publications = publications;
    },
    deletePublication(id) {
      // console.log(id);
      const publicationColRef = collection(db, 'publication');
      const publicationRef = doc(publicationColRef, id);
      deleteDoc(publicationRef)
        .then(() => {
          alert('publication deleted successully!');
          this.$router.go();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.fetechPublication();
  },
};
</script>
