import axios from 'axios';
import {db} from '../firebase';
export function login(credentials) {
   return new Promise((res, rej) =>{
		let ckcmcode =  Math.random().toString(36).substring(2, 15) + "I love you God" + Math.random().toString(36).substring(2, 15);
      let getdata = db.ref('CKCMDATA/accountUser')
      getdata.on('value', function(snapshot) {
         console.log(credentials.email)
         let filterdata = _.filter(snapshot.val(), {'email': credentials.email, 'password': credentials.password})
         console.log(filterdata.length )
         if(filterdata.length == 0) {
            rej()
         } else {
           
         }
      })
      // axios.post(`/api/auth/Ckcm-network-api/${ckcmcode}/login`, credentials)
      //    .then((response) =>{
      //       res(response.data);
      //    })
      //    .catch((error) =>{
      //       rej(error);
      //    })
   })
}
export function signUp(credentials) {
   return new Promise((res, rej) => {
      let ckcmcode2 =  Math.random().toString(36).substring(2, 15) + "I love you God" + Math.random().toString(36).substring(2, 15);
         // const ckcmcode =    Math.random().toString(36).substring(2, 15)  + Math.random().toString(36).substring(2, 15)  + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      axios.post(`api/auth/Ckcm-network-api/${ckcmcode2}/register`, credentials)
         .then((response) => {
            res(response.data.jie);
         })
         .catch((error) => {
            rej(error);
            const userData = firebase.auth().currentUser;
            userData.delete()
            axios.post(`api/auth/Ckcm-network-api/${ckcmcode2}/deleteinfo`, userData)
         })
   })
}

export function getLocalUser() {
	const userStr = localStorage.getItem("user");
	console.log(JSON.parse(userStr))
	if(!userStr) {
		return null;
	}
	return JSON.parse(userStr);
}

export function getLocalfdetails() {
   const userStr2 = localStorage.getItem("fdetails");
   if(!userStr2) {
		return null;
	}
	return JSON.parse(userStr2);

}