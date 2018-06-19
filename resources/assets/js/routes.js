import jieHome from './components/pages/jieHome.vue';
import jie404 from './components/pages/jie404.vue';
import jieSignup from './components/jieAuthFolder/jieSignup.vue';
import jieLogin from './components/jieAuthFolder/jieLogin.vue';
export const routes = [
   {
      path:'/',
      component: jieHome,
      meta: {
         requiresAuth: true
      }
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