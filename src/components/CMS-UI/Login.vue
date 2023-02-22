<template>
  <NavBar />
  <div class="bg-gray-100 md:h-screen overflow-hidden">
    <div class="absolute z-10 w-full h-full flex items-center md:py-40 px-5">

      <div class="flex flex-row max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl md:max-w-2xl">
        <div class="hidden bg-cover md:block lg:w-[45%] md:w-[75%]">
          <img src="../../assets/img/back-end/login.jpeg" />
        </div>

        <div class="md:w-2/3 px-6 py-8 lg:px-8 flex flex-col justify-center">
          <h2 class="md:text-3xl text-xl text-gray-900 w-full uppercase font-bold text-center">IRUP</h2>
          <p class="infoStyle text-center text-gray-900">Content Management System</p>

          <div class="mt-4">
            <label class="block mb-2 text-sm font-medium text-[#818181]" for="LoggingEmailAddress">Email Address</label>
            <input v-model="email" id="LoggingEmailAddress"
              class="block w-full px-4 py-2 text-[#818181] bg-white border rounded-md focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email" placeholder="Email" />
          </div>

          <div class="mt-4">
            <div class="flex justify-between">
              <label class="block mb-2 text-sm font-medium text-[#818181]" for="loggingPassword">Password</label>
              <a href="https://line.me/R/ti/p/%40iqh4627l" class="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</a>
            </div>

            <input v-model="password" id="loggingPassword"
              class="block w-full px-4 py-2 text-[#818181] bg-white border rounded-md focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="password" placeholder="Password" />
          </div>
          <p v-if="errMsg">{{ errMsg }}</p>
          <p id="warn" class="text-lg text-center text-red-500 pt-5"></p>

          <div class="mt-8">
            <button id="login" @click="register"
              class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-900 rounded active:bg-gray-500 focus:outline-none focus:bg-gray-500">Login</button>
          </div>
        </div>
      </div>

    </div>
    <div id="bg" class="md:hidden h-screen overflow-hidden flex items-center"></div>
  </div>
</template>

<script setup>
import NavBar from '../NavBar.vue'
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';
const email = ref("");
const password = ref("");
const errMsg = ref();
const router = useRouter();
const register = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log('登入成功!');
      console.log(auth.currentUser);
      router.push("/researchAdd");
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "格式不符合";
          break;
        case "auth/user-not-found":
          errMsg.value = "找不到使用者";
          break;
        case "auth/wrong-password":
          errMsg.value = "密碼錯誤";
          break;
        default:
          errMsg.value = "電子郵件或密碼不正確";
          break;
      }
    });
};
</script>

<style scoped>
#bg {
  background-image: url('../../assets/img/back-end/login.jpeg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>