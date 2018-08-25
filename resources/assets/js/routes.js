import authPage from './components/pages/authPage.vue';
import jie404 from './components/pages/jie404.vue';
import jieSignup from './components/jieAuthFolder/jieSignup.vue';
import jieLogin from './components/jieAuthFolder/jieLogin.vue';

import jieUserLayout from './components/jieLayoutsFolder/userLayout.vue';

import jieUserWelcome from './components/jieUserFolder/jieWelcome.vue';
import jieUserHome from './components/jieUserFolder/jieHome.vue';
import jieProfile from './components/jieUserFolder/jieProfile.vue';

import jieVpOffice from './components/jieMyApps/jieVpOffice.vue';
import api from './components/api.vue';
export const routes = [
   {
      path:'/auth',
      component: authPage,
   },
   {
      path: '/',
      component: jieUserLayout,
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
      },
      children: [
         {
            path: '/',
            component: jieUserHome
         },
         {
            path: '/profile/:username',
            component: jieProfile,
         },
         {
            path: '/welcome',
            component: jieUserWelcome
         },
         {
            path: '/vpoffice',
            component: jieVpOffice
         }
      ]
   },
   {
      path:'/api',
      component: api
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