<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use DB;
class AuthRegisterController extends Controller
{
   public function registerUser (Request $request){
      
      if($request->password == "") {
         $passhash = 'jiejie' ;
         $type= "false";
      } else {
         $passhash = bcrypt($request->password);
         $type= "true";
      }
      
      $reqEmail = DB::table('users')
         ->where('email', $request->email)
         ->count();
      
      if($reqEmail != 1) {
         User::create([
            'ckcm-network_token_id' => $request->uid,
            'emailVerified' => $request->emailVerified,
            'photoUrl' =>  $request->photoURL,
            'displayName' => $request->displayName,
            'email' => $request->email,
            'password' => $passhash,
            'secret' => $type
            // 'secret' => \Request::ip(),
         ]);
      } else {
         User::where('email', $request->email)
            ->update([
               'displayName' => $request->displayName,
               'emailVerified' => $request->emailVerified,
               'photoUrl' => $request->photoURL,
            ]);
      }

      $jie = User::where('email', $request->email)
            ->get();
      
      \Log::alert($jie);
      
      // return response()->json([
      //    'jie' => [{"password":$passhash,"email":$request->email}]
      // ]);

      
         
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
      User::where('ckcm-network_token_id', $request->uid)->delete();
   }
}
