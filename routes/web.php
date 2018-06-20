<?php
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\User;

Route::get('{any}', function () {
    return view('jie network.application');
})->where('any', '.*');

// Route::get('/signup', function() {
//    return view('jie network.application');
// });


// Route::post('Ckcm-network-api/{any}/register', function(Request $request){
//    \
//    Log::alert($request);
//    return response()->json([
//       'msg'=> $request
//    ]);

//    // User::create([
//    //    'id' => '131',
//    //    'name' => $request->email,
//    //    'password' => bcrypt($request->password) ,
//    // ]);
// })->where('any', '.*');
