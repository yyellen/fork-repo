<template>
  <NavBar />
  <div class="bg-gray-100">
    <div id="bg" class="h-[50vh] md:h-screen">
      <h1 class="lg-title">
        <p class="sm-title pb-1 xs:pb-5">
          <span id="author">admin</span>,&nbsp;
          <span id="date">12 / 4 / 2019</span>
        </p>
        IPSI-7 Summary Report and Presentation Abstracts now available
      </h1>
    </div>

    <div class="bgContainer">
      <div class="bg-config">

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <p class="para">
            The official report for the Seventh IPSI Global Conference (IPSI-7), including a compilation of presentation abstracts from all speakers, has been completed and is now available for download by clicking the image below.
            <br><br>
            The report contains a great deal of information about IPSI-7, which was held 9/29/2018 ~ 10/2/2018 in Kanazawa, Ishikawa Prefecture, Japan. More information about the event is available on the event announcement page here.
          </p>
          <div class="grid2img py-10 lg:p-0">
            <img src="../../../assets/img/news/new-1/IPSI-7-cover.jpeg">
          </div>
        </div>

      </div>

      <ul class="pageBtnStyle justify-end">
        <!-- <li>
          <router-link to="/case-2" id="previous" class="group flex items-center">
            <i class="pageIcon mx-5 md:m-0 fa-solid fa-reply"></i>
            <span class="pageTxt hidden md:block">previous page</span>
          </router-link>
        </li> -->
        <li>
          <router-link to="/new-2" id="next" class="group flex items-center">
            <span class="pageTxt hidden md:block">next page</span>
            <i class="pageIcon mx-5 md:m-0 fa-solid fa-share"></i>
          </router-link>
        </li>
      </ul>

    </div>
  </div>
</template>

<script setup>
import NavBar from '../../NavBar.vue'
</script>

<style scoped>
#bg {
  background-image: url('../../../assets/img/公老坪地景圖.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>