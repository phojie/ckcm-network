<?php

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\DB;
// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
	 
// Route::group(['prefix' => 'auth'], function ($router) {

// 	Route::post('login', 'AuthController@login');
// 	Route::post('logout', 'AuthController@logout');
// 	Route::post('refresh', 'AuthController@refresh');
// 	Route::post('me', 'AuthController@me');

// });

// Route::group(['middleware' => 'api','prefix' => 'auth'], function ($router) {
Route::group(['prefix' => 'auth'], function ($router) {
   Route::post('Ckcm-network-api/{any}/login', 'AuthController@login')->where('any', '.*');
	// Route::post('login', 'AuthController@login');
	Route::post('logout', 'AuthController@logout');
	Route::post('refresh', 'AuthController@refresh');
   Route::post('me', 'AuthController@me');
   Route::post('Ckcm-network-api/{any}/register', 'AuthRegisterController@registerUser')->where('any', '.*');
   Route::post('Ckcm-network-api/{any}/updateinfo', 'AuthRegisterController@updateInfo')->where('any', '.*');
   Route::post('Ckcm-network-api/{any}/deleteinfo', 'AuthRegisterController@deleteInfo')->where('any', '.*');
});
   
   
	Route::group(['prefix' => 'jwt'], function() {
		//s
	});
