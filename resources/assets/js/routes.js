import authPage from './components/pages/authPage.vue';
import jie404 from './components/pages/jie404.vue';
import jieSignup from './components/jieAuthFolder/jieSignup.vue';
import jieLogin from './components/jieAuthFolder/jieLogin.vue';
import jieUserHome from './components/jieUserFolder/jieHome.vue';
export const routes = [
   {
      path:'/auth',
      component: authPage,
   },
   {
      path: '/',
      component: jieUserHome,
      meta: {
         requiresAuth: true,
      }
   },
   {
      path:'/signup',
      name: 'signup',
      component: jieSignup
   },
   {
      path:'/login',
      component: jieLogin
   },

   {  
      path: "*",
      component: jie404,
      meta: {
         title: 'Home Page - Example App',
         metaTags: [
           {
             name: 'description',
             content: 'The home page of our example app.'
           },
           {
             property: 'og:description',
             content: 'The home page of our example app.'
           }
         ]
       }
   }
]