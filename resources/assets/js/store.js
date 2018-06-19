import { getLocalUser } from "./ckcmHelpers/auth";
const user = getLocalUser();

export default {
   state: {
      accountLoginData: user,
      isIn: !!user,
      loading: false,
      auth_error: null,
   },
   getters: {
      isLoading(state) {
         return state.loading;
      },
      isIn(state) {
         return state.isIn;
      },
      accountLoginData(state) {
         return state.accountLoginData;
      },
      authError(state) {
         return state.auth_error;
      }
   },
   mutations: {
      loginSuccess(state, payload) {
         state.auth_error = null;
         state.isIn = true;
         state.loading = false;
         state.accountLoginData = Object.assign({}, payload.user, {token: payload.access_token});
         localStorage.setItem("user", JSON.stringify(state.accountLoginData));
         // localStorage.user = JSON.stringify(state.accountLoginData);
      },
      logout(state) {
         localStorage.removeItem("user");
         state.isIn = false;
         state.accountLoginData = null;
      },
      login(state) {
         state.loading = true;
         state.auth_error = null;
      }

      
   },
   actions: {
      login(context) {
         context.commit("login"); //calling the mutation login
      },
   }
}