import jieHome from './components/pages/jieHome.vue';
import authPage from './components/pages/authPage.vue';
import jie404 from './components/pages/jie404.vue';
import jieSignup from './components/jieAuthFolder/jieSignup.vue';
import jieLogin from './components/jieAuthFolder/jieLogin.vue';
import usesCases from './components/jieLandingFolder/page1.vue';
import authView from './components/jieLandingFolder/jieAuth.vue';
export const routes = [
   {
      path:'/',
      component: authPage,
   },
   {
      path: '/usecases',
      component: usesCases
      // meta: {
      //    requiresAuth: true,
      // }
   },
   {
      path:'/signup',
      component: jieSignup
   },
   {
      path:'/login',
      component: jieLogin
   },

   {  
      path: "*",
      component: jie404
   }
]