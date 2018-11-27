export function initialize(store, router) {
 
   router.beforeEach((to, from, next) => {
      const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
      const currentUser = store.state.accountLoginData;
      const fdetails = store.state.AccountFdetails;
		const ckcmcode =    Math.random().toString(36).substring(2, 15)  + Math.random().toString(36).substring(2, 15)  + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      if(requiresAuth && !currentUser) {
         // nex 
         next(`/auth?stype=lo&jlou=jie_${ckcmcode}-AfcXyKTxpz7sQ68VmX5mkDW-v78XPvqoICwwqRFwSZgox8TG0GBDSY0Cd9F9pxUwnqr_c2aOJL4xk0WPhFml466P75gCuUkm2Lkm7ZaR2obLnw&smuh=2724&lh=Ac-yQn60G1vPxGhw`);
         // next('/auth')
         //kng wla pa ka login 
      } else if(to.path == '/auth' && currentUser && fdetails.firsttime === false) {
         axios.defaults.headers.common["Authorization"] = `Bearer ${store.getters.accountLoginData.token}`
         next('/');
         // kng nka login mo dretso sa "/"
      } else if(to.path != '/welcome' && currentUser && fdetails.firsttime === true) {
         axios.defaults.headers.common["Authorization"] = `Bearer ${store.getters.accountLoginData.token}`
         next(`/welcome?stype=lo&jlou=jie_${ckcmcode}-AfcXyKTxpz7sQ68VmX5mkDW-v78XPvqoICwwqRFwSZgox8TG0GBDSY0Cd9F9pxUwnqr_c2aOJL4xk0WPhFml466P75gCuUkm2Lkm7ZaR2obLnw&smuh=2724&lh=Ac-yQn60G1vPxGhw`);
         console.log(fdetails)
      } else if(to.path == '/signup' && currentUser) {
         next('/');
      } else {
         next();
         console.log(record => record.meta.requiresAuth)
      }
 
  

   });
   
   axios.interceptors.response.use(null, (error) => {
      if (error.response.status == 401 && !currentUser) {
         alert("please relogin");
         // store.commit('logout');
         router.push('/auth');
         // mo logout ni sya after 60min of afk
      }
         return Promise.reject(error);
      });

   // axios.defaults.headers.common["Authorization"] = `Bearer ${store.getters.accountLoginData.token}`
}