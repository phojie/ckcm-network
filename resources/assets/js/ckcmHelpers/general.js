export function initialize(store, router) {
 
   router.beforeEach((to, from, next) => {
      const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
      const currentUser = store.state.accountLoginData;
      const ckcmcode =    Math.random().toString(36).substring(2, 15)  + Math.random().toString(36).substring(2, 15)  + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      if(requiresAuth && !currentUser) {
         next(`/auth?stype=lo&jlou=jie_${ckcmcode}-AfcXyKTxpz7sQ68VmX5mkDW-v78XPvqoICwwqRFwSZgox8TG0GBDSY0Cd9F9pxUwnqr_c2aOJL4xk0WPhFml466P75gCuUkm2Lkm7ZaR2obLnw&smuh=2724&lh=Ac-yQn60G1vPxGhw`);
         console.log("kng wla pa ka login")

      } else if(to.path == '/auth' && currentUser) {
         axios.defaults.headers.common["Authorization"] = `Bearer ${store.getters.accountLoginData.token}`
         next('/');
         console.log("from 2")
         // kng nka login mo dretso sa "/"
         // && 
      } else if(to.path == '/signup' && currentUser) {
         next('/');
         console.log("from 4")
      } else {
         next();
         axios.defaults.headers.common["Authorization"] = `Bearer ${store.getters.accountLoginData.token}`
         if(to.path != '/welcome' && currentUser.user.firsttime == 1) {
            next(`/welcome?stype=lo&jlou=jie_${ckcmcode}-AfcXyKTxpz7sQ68VmX5mkDW-v78XPvqoICwwqRFwSZgox8TG0GBDSY0Cd9F9pxUwnqr_c2aOJL4xk0WPhFml466P75gCuUkm2Lkm7ZaR2obLnw&smuh=2724&lh=Ac-yQn60G1vPxGhw`);
            // console.log(fdetails)
            console.log("from 3")
         } else {
            next();     
         }
         // console.log(currentUser)
      }
 
      // else if(to.path != '/welcome' && fdetails.firsttime == true) {
      //    axios.defaults.headers.common["Authorization"] = `Bearer ${store.getters.accountLoginData.token}`
      //    next(`/welcome?stype=lo&jlou=jie_${ckcmcode}-AfcXyKTxpz7sQ68VmX5mkDW-v78XPvqoICwwqRFwSZgox8TG0GBDSY0Cd9F9pxUwnqr_c2aOJL4xk0WPhFml466P75gCuUkm2Lkm7ZaR2obLnw&smuh=2724&lh=Ac-yQn60G1vPxGhw`);
      //    // console.log(fdetails)
      //    console.log("from 3")
      // } 
  

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