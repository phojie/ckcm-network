export function initialize(store, router) {
   router.beforeEach((to, from, next) => {
      const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
      const currentUser = store.state.accountLoginData;

      if(requiresAuth && !currentUser) {
         next('/login');
         //kng wla pa ka login 
      } else if(to.path == '/login' && currentUser) {
         next('/');
         // kng nka login mo dretso sa "/"
      } else if(to.path == '/signup' && currentUser) {
         next('/');
      } else {
         next();
      }
   });
   
   axios.interceptors.response.use(null, (error) => {
      if (error.response.status == 401 && !currentUser) {
         alert("please relogin");
         // store.commit('logout');
         router.push('/login');
         // mo logout ni sya after 60min of afk
      }

         return Promise.reject(error);
      });

   // axios.defaults.headers.common["Authorization"] = `Bearer ${store.getters.accountLoginData.token}`
}