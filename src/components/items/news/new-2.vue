<template>
  <NavBar />
  <div class="bg-gray-100">
    <div id="bg" class="h-[50vh] md:h-screen">
      <h1 class="lg-title">
        <p class="sm-title pb-1 xs:pb-5">
          <span id="author">admin</span>,&nbsp;
          <span id="date">12 / 4 / 2019</span>
        </p>
        29 May 2019: Seminar on “Satoyama Landscapes and Seascapes from around the World for Sustainable Development”
      </h1>
    </div>

    <div class="bgContainer">
      <div class="bg-config">

        <p class="para">
          A seminar will be held on Wednesday, 29 May in the Global Environment Outreach Centre (GEOC) office in the United Nations University Headquarters building in Tokyo, Japan. This seminar is organized under a IPSI Collaborative Activity, the GEF-Satoyama Project, by Conservation International Japan. Two subgrantees under the GEF-Satoyama Project - The Energy and Resources Institute (TERI) from India, and the Environmental Protection and Conservation Organization (EPCO) from Mauritius - will present their work, followed by discussion of relevant issues. The seminar will be in English and Japanese with interpretation. IPSI members and other readers in the Tokyo area are encouraged to attend and learn about different kinds of SEPLS-related practices around the world, as well as ongoing work related to IPSI. For more information and to register, please see the Conservation International Japan website here (in Japanese only).
        </p>

      </div>

      <ul class="pageBtnStyle justify-between">
        <li>
          <router-link to="/new-1" id="previous" class="group flex items-center">
            <i class="pageIcon mx-5 md:m-0 fa-solid fa-reply"></i>
            <span class="pageTxt hidden md:block">previous page</span>
          </router-link>
        </li>
        <li>
          <router-link to="/new-3" id="next" class="group flex items-center">
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