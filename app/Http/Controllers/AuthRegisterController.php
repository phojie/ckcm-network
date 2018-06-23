<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
class AuthRegisterController extends Controller
{
   public function registerUser (Request $request){
      \
      Log::alert($request);
      
      User::create([
         'ckcm-network_token_id' => 'Godiswithme',
         'email' => $request->email,
         'password' => bcrypt($request->password),
         'secret' => $request->secret
         // 'secret' => \Request::ip(),
      ]);
         
      // get the ipaddress and data
      // http://api.ipstack.com/\Request::ip()?access_key=944b665d845fe88638d547eda3d002f1  
   }

   public function updateInfo (Request $request){
      \
      Log::alert($request);
      
      User::where('email', $request->email)
         ->update([
            'ckcm-network_token_id' => $request->uid,
            'displayName' => $request->displayName,
            'emailVerified' => $request->emailVerified,
            'photoUrl' => $request->photoUrl,
         ]);
   }

   public function deleteInfo (Request $request) {
      User::where('secret', $request->secret)->delete();
   }
}
