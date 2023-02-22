<template>
  <NavBar />
  <section class="text-gray-600 body-font overflow-hidden bg-gray-100 min-h-screen [dark:bg-gray-900]">
    <div class="Container lg:px-56 px-24 py-40">
      <h1 class="titleStyle">Publication</h1>
      <div class="-my-8 divide-y-2 divide-gray-100 w-full flex flex-col items-center">

        <div class="w-full" v-for="publication in publications" :key="publication.today">
          <div id="card">
            <div id="author">
              <span class="subTitleStyle">IRUP</span>
              <span class="subTitleStyle pl-5 md:pl-0 text-red-500 font-light pb-2">{{ publication.today }}</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="subTitleStyle">{{ publication.title }}</h2>
              <p class="font-light text-[#818181] text-base pb-2">{{ publication.about }}</p>
              <a class="text-base font-semibold text-indigo-500 inline-flex items-center mt-4" :href="publication.document">Reference&emsp;
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- <div class="w-full">
          <div id="card">
            <div id="author">
              <span class="subTitleStyle">IRUP</span>
              <span class="subTitleStyle pl-5 md:pl-0 text-red-500 font-light pb-2">2019</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="subTitleStyle">Research&Policy</h2>
              <p class="font-light text-[#818181] text-base pb-2">Understanding the multiple values associated with sustainable use in SEPLS</p>
              <a class="text-base font-semibold text-indigo-500 inline-flex items-center mt-4"
                href="https://collections.unu.edu/eserv/UNU:7506/SITR_vol5_fullset_web.pdf">Reference&emsp;
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="w-full">
          <div id="card">
            <div id="author">
              <span class="subTitleStyle">IRUP</span>
              <span class="subTitleStyle pl-5 md:pl-0 text-red-500 font-light pb-2">2018</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="subTitleStyle">Research&Policy</h2>
              <p class="font-light text-[#818181] text-base pb-2">Understanding the multiple values associated with sustainable use in SEPLS</p>
              <a class="text-base font-semibold text-indigo-500 inline-flex items-center mt-4"
                href="https://collections.unu.edu/eserv/UNU:7506/SITR_vol5_fullset_web.pdf">Reference&emsp;
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="w-full">
          <div id="card">
            <div id="author">
              <span class="subTitleStyle">IRUP</span>
              <span class="subTitleStyle pl-5 md:pl-0 text-red-500 font-light pb-2">2017</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="subTitleStyle">Research&Policy
              </h2>
              <p class="font-light text-[#818181] text-base pb-2">Understanding the multiple values associated with sustainable use in SEPLS</p>
              <a class="text-base font-semibold text-indigo-500 inline-flex items-center mt-4"
                href="https://collections.unu.edu/eserv/UNU:7506/SITR_vol5_fullset_web.pdf">Reference&emsp;
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
        </div>
        </div>

        <div class="w-full">
          <div id="card">
            <div id="author">
              <span class="subTitleStyle">IRUP</span>
              <span class="subTitleStyle pl-5 md:pl-0 text-red-500 font-light pb-2">2016</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="subTitleStyle">Research&Policy</h2>
              <p class="font-light text-[#818181] text-base pb-2">Understanding the multiple values associated with sustainable use in SEPLS</p>
              <a class="text-base font-semibold text-indigo-500 inline-flex items-center mt-4"
                href="https://collections.unu.edu/eserv/UNU:7506/SITR_vol5_fullset_web.pdf">Reference&emsp;
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="w-full">
          <div id="card">
            <div id="author">
              <span class="subTitleStyle">IRUP</span>
              <span class="subTitleStyle pl-5 md:pl-0 text-red-500 font-light pb-2">2015</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="subTitleStyle">Research&Policy</h2>
              <p class="font-light text-[#818181] text-base pb-2">Understanding the multiple values associated with sustainable use in SEPLS</p>
              <a class="text-base font-semibold text-indigo-500 inline-flex items-center mt-4"
                href="https://collections.unu.edu/eserv/UNU:7506/SITR_vol5_fullset_web.pdf">Reference&emsp;
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div> -->

      </div>
    </div>
  </section> 
</template>

<script setup>
import NavBar from '../../NavBar.vue'
</script>

<script>
import { db } from '../../../main';
import { getDocs, query, orderBy, collection } from 'firebase/firestore';

export default {
  data() {
    return {
      publications: [],
    }
  },
  methods: {
    async fetechPublication() {
      const publicationColRef = collection(db, 'publication');
      let publicationSnapShot = await getDocs(query(publicationColRef, orderBy('createdAt', 'desc')));
      let publications = [];
      publicationSnapShot.forEach((publication) => {
        let publicationData = publication.data();
        publicationData.createdAt = publication.time;
        console.log('title: ', publicationData.title);
        console.log('about: ', publicationData.about);
        console.log('time: ', publicationData.today);
        publications.push(publicationData);
      });
      this.publications = publications;
    },
  },
  created() {
    this.fetechPublication();
  },
}
</script>

<style scoped>
#card {
  @apply px-8 py-4 md:flex flex-wrap md:flex-nowrap;
  border-bottom: 1px solid rgb(209, 209, 209);
}
#author {
  @apply xl:w-64 md:w-32 md:mb-0 mb-6 flex-shrink-0 flex flex-row md:flex-col;
}
.subTitleStyle {
  @apply !h-auto w-auto;
}
</style>