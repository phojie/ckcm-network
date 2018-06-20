import axios from 'axios'

export function login(credentials) {
   return new Promise((res, rej) =>{
		let ckcmcode =  Math.random().toString(36).substring(2, 15) + "I love you God" + Math.random().toString(36).substring(2, 15);
      axios.post(`/api/auth/Ckcm-network-api/${ckcmcode}/login`, credentials)  
         .then((response) =>{
            res(response.data);
         })
         .catch((error) =>{
            rej(error);
         })
   })
}

export function getLocalUser() {
	const userStr = localStorage.getItem("user");
	
	if(!userStr) {
		return null;
	}
	return JSON.parse(userStr);
}