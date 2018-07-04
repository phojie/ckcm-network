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
         // progress: {
         //    func: [
         //       {call: 'color', modifier: 'temp', argument: '#ffb000'},
         //       {call: 'fail', modifier: 'temp', argument: '#6e0000'},
         //       {call: 'location', modifier: 'temp', argument: 'top'},
         //       {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
         //    ]
         // }
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