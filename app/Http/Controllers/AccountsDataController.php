<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use DB;

class AccountsDataController extends Controller
{
   public function friendList() {
      // $myid=auth::user()
      $friendList= User::all();
      
      return response()->json([
         'friendList'=>$friendList
      ]);
   }
}
