import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import { store } from './store'

import './assets/tailwind.css'

import { initializeApp } from "firebase/app"
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAD_tHLMaNSotA-Rif3Vu7OHcVICNoJBqg",
  authDomain: "irup-team-2.firebaseapp.com",
  projectId: "irup-team-2",
  storageBucket: "irup-team-2.appspot.com",
  messagingSenderId: "284229758902",
  appId: "1:284229758902:web:9e1f90702ff23ffa975b17",
  measurementId: "G-PMX869C131"
};
initializeApp(firebaseConfig);

// 讓資料可傳送至Firebase
const db = getFirestore();
const auth = getAuth();
const timestamp = serverTimestamp();

const fileStorage = getStorage();
export { db, timestamp, auth, fileStorage};


// 讓 Vue 每次換頁都能在最上方的方法
router.afterEach((to, from, next) => {
	window.scrollTo(0, 0);
});

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')