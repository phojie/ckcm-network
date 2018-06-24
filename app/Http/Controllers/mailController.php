<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\Controller;
use App\Mail\SendMailable;

class mailController extends Controller
{
   public function send() {
      $data = ['message' => 'This is a test!'];

      Mail::to('phojrengel@gmail.com')->send(new SendMailable($data));
   }
}
