import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import 'tw-elements';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: () => import("../components/Home.vue") },
    // about
    { path: "/organize", component: () => import("../components/items/About/Organize.vue") },
    { path: "/member", component: () => import("../components/items/About/Member.vue") },
    // research
    { path: "/research", component: () => import("../components/items/Research/Research.vue"), },
    { path: "/case-1", component: () => import("../components/items/Research/case-1.vue") },
    { path: "/case-2", component: () => import("../components/items/Research/case-2.vue") },
    { path: "/case-3", component: () => import("../components/items/Research/case-3.vue") },
    // news
    { path: "/news", component: () => import("../components/items/news/News.vue") },
    { path: "/new-1", component: () => import("../components/items/news/new-1.vue") },
    { path: "/new-2", component: () => import("../components/items/news/new-2.vue") },
    { path: "/new-3", component: () => import("../components/items/news/new-3.vue") },
    // info
    { path: "/video", component: () => import("../components/items/info/Videos.vue") },
    { path: "/publication", component: () => import("../components/items/info/Publication.vue") },
    // CMS
    { path: "/login", component: () => import("../components/CMS-UI/Login.vue") },
    // CMS Add
    { path: "/infoAdd", component: () => import("../components/CMS-UI/infoAdd.vue") },
    { path: "/newAdd", component: () => import("../components/CMS-UI/newsAdd.vue") },
    { path: "/researchAdd", component: () => import("../components/CMS-UI/researchAdd.vue"), meta: { requiresAuth: true } },
    // CMS Edit
    { path: "/research/:researchId", component: () => import("../components/CMS-UI/Edit/caseEdit.vue") },
    { path: "/now/:nowId", component: () => import("../components/CMS-UI/Edit/newEdit.vue") },
    { path: "/video/:videoId", component: () => import("../components/CMS-UI/Edit/videoEdit.vue") },
    { path: "/publication/:publicationId", component: () => import("../components/CMS-UI/Edit/publicationEdit.vue") },

    // Developers List
    { path: "/developers", component: () => import("../components/Developers.vue")}
  ]
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("無訪問權限 ! ");
      next("/");
    }
  } else {
    next();
  }
});
export default router;