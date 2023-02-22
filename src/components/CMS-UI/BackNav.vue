<template>
<div class="navbar bg-white fixed z-50 px-0 lg:px-[60px] shadow-lg">
  <div class="navbar-start">
    <div class="dropdown group">
      <label class="flex lg:hidden">
        <button class="relative [group]">
          <div class="relative flex overflow-hidden items-center justify-center w-[50px] h-[50px] transform transition-all duration-200">
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
      <ul class="menu menu-compact [dropdown-content] dropdownContent left-0 p-2 shadow-lg bg-white rounded-br-box w-52 text-[#818181]">
        <li>
          <router-link to="/researchAdd" class="itemBtn">research</router-link>
        </li>
        <li>
          <router-link to="/newAdd" class="itemBtn">news</router-link>
        </li>
        <li>
          <router-link to="/infoAdd" class="itemBtn">info</router-link>
        </li>
      </ul>
    </div>
    <router-link to="" class="btn btn-ghost text-gray-900 normal-case text-3xl hover:bg-white p-0">後台管理</router-link>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0 text-[#818181]">
      <li>
        <router-link to="/researchAdd" class="itemBtn">research</router-link>
      </li>
      <li>
        <router-link to="/newAdd" class="itemBtn">news</router-link>
      </li>
      <li>
        <router-link to="/infoAdd" class="itemBtn">info</router-link>
      </li>
    </ul>
  </div>
  <div class="navbar-end">
    <i class="fa-solid fa-right-from-bracket text-gray-900 text-3xl btn btn-ghost hover:bg-white pr-[10px]" @click="handleSignOut" ></i>
  </div>
</div>
</template>

<script setup>
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

let auth = getAuth();
const router = useRouter();

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
  @apply uppercase hover:bg-gray-200 active:text-white active:bg-[#818181];
}
.itemBtn {
  @apply uppercase text-[#818181] bg-white hover:bg-gray-900 hover:text-white active:bg-gray-900 mx-4;
}

.dropdownContent {
  @apply invisible group-hover:visible absolute z-50 origin-top;
}
</style>