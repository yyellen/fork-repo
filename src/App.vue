<template>
  <!-- <NavBar /> -->
  <router-view />
  <FooTer />
</template>

<script setup>
// import NavBar from './components/NavBar.vue'
import FooTer from './components/FooTer.vue'

import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push('/');
  });
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;800&display=swap');
* {
  font-family: 'Inter';
  box-sizing: border-box;
}
/* container 設定組 */
.Container {
  @apply container mx-auto py-[20%] xl:py-[5%] md:py-[10%];
}
/* 文字內陰影 */
.text-shadow {
  background-color: #818181;
  color: transparent;
  text-shadow: 3px 3px 5px rgba(255,255,255,0.5);
  background-clip: text;
}

/* -------------------- *\
        文章相關設定
\* -------------------- */

/* 大標題 */
.lg-title {
  @apply xs:mx-[15%] bg-white bg-opacity-80 text-black text-xl lg:text-3xl font-bold p-5 md:p-10 relative top-[100%] -translate-y-[100%];
}
/* 中標題 */
.md-title {
  @apply text-base md:text-xl pb-5 font-semibold md:leading-7;
}
/* 小標題 */
.sm-title {
  @apply text-sm md:text-lg font-light text-[#818181];
}
/* 內文 */
.para {
  @apply text-xs md:text-base font-light md:leading-7;
  /* @apply text-justify; */
}
/* 數字清單 */
.list-num-config {
  @apply text-xs md:text-base font-light list-decimal pl-4 md:pl-8 md:leading-7 py-3 md:py-5;
  /* @apply text-justify; */
}
/* 黑點清單 */
.list-disc-config {
  @apply text-xs md:text-base font-light list-disc pl-4 md:pl-8 md:leading-7 py-3 md:py-5;
  /* @apply text-justify; */
}
/* 文章圖片網格系統 (grid) */
.grid-2to1 {
  @apply text-[#818181] text-xl grid grid-cols-1 md:grid-cols-2 gap-10 w-full pt-5;
}
/* 文章圖片網格系統 (flex) */
.grid2img {
  @apply flex flex-col items-center;
}
/* 兩張圖 + 一個註解 */
.colSpan2-config {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center items-center overflow-hidden w-full;
}
/* 文章內文範圍 */
.bgContainer {
  @apply xs:mx-[15%];
}
/* 文章白底設定 */
.bg-config {
  @apply bg-white p-5 md:p-10 text-gray-900 grid grid-cols-1 gap-5;
  /* 背景漸層 */
  /* @apply !bg-gradient-to-b from-white to-gray-100; */
}
/* 文章圖片註解設定 */
.img-ps {
  @apply text-xs md:text-base text-[#818181] font-light md:leading-7 pt-5;
  /* @apply text-justify; */
}

/* -------------------- *\
          跳頁設定
\* -------------------- */
.pageBtnStyle {
  @apply flex uppercase text-[#818181] py-10;
}
.pageIcon {
  @apply 
    bg-gray-100 text-sm text-gray-900 border-2 border-gray-900 px-2 py-[5px] rounded-full transition duration-300
    group-hover:text-gray-100 group-hover:bg-gray-900 group-active:scale-110;
}
.pageTxt {
  @apply group-hover:text-gray-900 text-lg mx-4 font-bold transition duration-300;
}

/* -------------------- *\
        卡片相關設定
\* -------------------- */
/* 卡片外觀設定 */
.cardStyle {
  @apply shadow-xl rounded-box overflow-hidden flex flex-col justify-between;
}
/* 卡片大標題設定（ 不包含首頁 ） */
.titleStyle {
  @apply text-3xl text-gray-900 w-full uppercase font-bold text-center pb-10;
}
/* 卡片副標題設定（ 不包含首頁 ） */
.subTitleStyle {
  @apply md:h-20 text-sm md:text-xl w-full text-ellipsis overflow-hidden font-semibold line-clamp-3;
}
/* 卡片內文設定（ 不包含首頁 ） */
.infoStyle {
  @apply text-xs xl:text-base md:text-base overflow-hidden font-light;
  /* @apply text-justify; */
}
/* 卡片內按鈕設定（ 父層要先設定 class="group"、不包含首頁 ） */
.btnStyle {
  @apply bg-gray-200 w-full py-3 text-lg font-bold tracking-[3px] uppercase group-hover:text-white group-hover:bg-gray-800 transition;
}

/* -------------------- *\
          後台設定
\* -------------------- */
/* 網格系統（3>1） */
.grid-CMS-3to1 {
  @apply grid md:grid-cols-3 gap-5;
}
/* 項目 */
.itemStyle {
  @apply rounded-lg bg-white shadow-md hover:border-gray-900 hover:bg-gray-900 hover:text-white transition duration-300 p-3 mb-3 cursor-pointer flex justify-between;
}
/* 項目內文 */
.itemTxtStyle {
  @apply overflow-hidden line-clamp-2;
}
/* 按鈕 */
.editBtn {
  @apply text-white text-xl w-12 h-12 rounded-full scale-75 hover:scale-90 transition duration-300;
}


</style>