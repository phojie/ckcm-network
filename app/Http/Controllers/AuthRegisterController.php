<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
class AuthRegisterController extends Controller
{
   public function register (Request $request){
      \
      Log::alert($request);
      
      User::create([
         'ckcm-network_token_id' => $request->uid,
         'displayName' => $request->displayName,
         'email' => $request->email,
         'secret' => \Request::ip(),
      ]);
   
   }
}
