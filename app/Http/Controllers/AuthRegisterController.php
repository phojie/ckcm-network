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
         'id' => '23',
         'name' => 'phojie',
         'email' => $request->email,
         'password' => $request->password
      ]);
   
   }
}
