<template>
<div class="navbar bg-white fixed z-50 px-0 lg:px-[60px] shadow-lg">
  <div class="navbar-start">
    <div class="dropdown group">
      <label class="flex lg:hidden">
        <button class="relative [group]">
          <div class="relative flex overflow-hidden items-center justify-center w-12 h-12 transform transition-all duration-200">
            <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
              <div class="menuLine w-7"></div>
              <div class="menuLine w-1/2 delay-75"></div>
              <div class="menuLine w-7"></div>
              <div class="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-hover:translate-x-0 flex w-0 group-hover:w-12">
                <div class="absolute bg-gray-900 h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-hover:rotate-45"></div>
                <div class="absolute bg-gray-900 h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-hover:-rotate-45"></div>
              </div>
            </div>
          </div>
        </button>
      </label>
      <ul class="menu menu-compact dropdownContent left-0 p-2 shadow-lg bg-white rounded-br-box w-52 text-[#818181]">
        <li>
          <a href="#!" class="dropBtn">
            about
            <i class="fa-solid fa-angle-right"></i>
          </a>
          <ul class="bg-white p-2">
            <li class="mb-2">
              <router-link to="/organize" class="linkStyle">organize</router-link>
            </li>
            <li>
              <router-link to="/member" class="linkStyle">member</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/research" class="uppercase hover:bg-white hover:text-gray-900">research</router-link>
        </li>
        <li>
          <router-link to="/news" class="uppercase hover:bg-white hover:text-gray-900">news</router-link>
        </li>
        <li>
          <a href="#!" class="dropBtn">
            info
            <i class="fa-solid fa-angle-right"></i>
          </a>
          <ul class="bg-white p-2">
            <li class="mb-2">
              <router-link to="/video" class="linkStyle">video</router-link>
            </li>
            <li>
              <router-link to="/publication" class="linkStyle">publication</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <router-link to="/" class="btn btn-ghost text-gray-900 normal-case tracking-widest text-3xl hover:bg-white p-0">IRUP</router-link>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0 text-[#818181]">
      <li class="justify-center">
        <a href="#!" class="dropBtn">
          about
          <i class="fa-solid fa-angle-down"></i>
        </a>
        <ul class="bg-white p-2">
          <li class="mb-2">
            <router-link to="/organize" class="linkStyle">organize</router-link>
          </li>
          <li>
            <router-link to="/member" class="linkStyle">member</router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link to="/research" class="uppercase hover:bg-white hover:text-gray-900">research</router-link>
      </li>
      <li>
        <router-link to="/news" class="uppercase hover:bg-white hover:text-gray-900">news</router-link>
      </li>
      <li class="justify-center">
        <a href="#!" class="dropBtn">
          info
          <i class="fa-solid fa-angle-down"></i>
        </a>
        <ul class="bg-white p-2">
          <li class="mb-2">
            <router-link to="/video" class="linkStyle">video</router-link>
          </li>
          <li>
            <router-link to="/publication" class="linkStyle">publication</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="dropdown navbar-end flex justify-end">
    <div class="flex flex-col items-end group">
      <label tabindex="0" class="btn btn-ghost h-12 w-12 rounded-full relative flex overflow-hidden items-center justify-center transform transition-all duration-200">
        <div class="w-10 rounded-full">
          <i class="fa-regular fa-user text-lg text-gray-900"></i>
        </div>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdownContent mt-12 right-0 p-2 shadow-lg lg:shadow-none bg-white rounded-bl-box lg:rounded-b-box w-32 text-[#818181]">
        <li v-if="!isLoggedIn">
          <router-link to="/login" class="linkStyle py-3">
            Sign In
          </router-link>
        </li>
        <li ref="setting" class="mt-2" v-if="isLoggedIn">
          <button  class="linkStyle py-3">
            <router-link to="/researchAdd">Settings</router-link>
          </button>
        </li>
        <li ref="out" class="mt-2" v-if="isLoggedIn">
          <button @click="handleSignOut" class="linkStyle py-3">Sign Out</button>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const isLoggedIn = ref(false);
const out = ref();
const setting = ref();
let auth;

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
      out.remove();
      setting.remove();
    }
  });
});
const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};




</script>

<style scoped>
.menuLine {
  @apply bg-gray-900 h-[2px] transform transition-all duration-300 origin-left group-hover:translate-x-10;
}
.linkStyle {
  @apply uppercase text-sm text-[#818181] hover:bg-gray-200 hover:text-black active:text-white active:bg-[#818181];
}
.dropBtn {
  @apply justify-between uppercase hover:bg-white hover:text-gray-900;
}

.dropdownContent {
  @apply invisible group-hover:visible absolute z-50 origin-top;
}
</style>