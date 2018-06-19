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
	Route::post('logout', 'AuthController@logout');
	Route::post('refresh', 'AuthController@refresh');
	Route::post('me', 'AuthController@me');

	Route::get('Ckcm-network-api/{any}/register', function (){
		$jie=DB::table('users')->insert([
				'id' => '3',
				'name' =>'phojie',
				'email' =>'phoj@y.com',
				'password' => bcrypt('jiengpinas')
			]);
			
		if($jie) {
			return response()->json([
				'msg' => 'success'
			]);
		} elseif(!$jie) {
			return response()->json([
				'msg' => 'fail'
			]);
		} else{
			return response()->json([
				'msg' => 'out of the way'
			]);
		}

	})->where('any', '.*');
	});

	Route::group(['prefix' => 'jwt'], function() {
		//
	});
