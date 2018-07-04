<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use DB;

class AuthController extends Controller
{
	/**
	 * Create a new AuthController instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		$this->middleware('auth:api', ['except' => ['login','registerUser']]);
	}

	/**
	 * Get a JWT via given credentials.
	 *
	 * @return \Illuminate\Http\JsonResponse
	 */
	public function login()
	{
      
		$credentials = request(['email', 'password']);
      
		if (! $token = auth('api')->attempt($credentials)) {
			return response()->json(['error' => 'Unauthorized, Stop! jie can caught you!'], 401);
		}

		return $this->respondWithToken($token);
	}

	/**
	 * Get the authenticated User.
	 *
	 * @return \Illuminate\Http\JsonResponse
	 */
	public function me()
	{
		return response()->json(auth()->user());
	}

	/**
	 * Log the user out (Invalidate the token).
	 *
	 * @return \Illuminate\Http\JsonResponse
	 */
	public function logout()
	{
		auth()->logout();

		return response()->json(['message' => 'Successfully logged out']);
	}

	/**
	 * Refresh a token.
	 *
	 * @return \Illuminate\Http\JsonResponse
	 */
	public function refresh()
	{
		return $this->respondWithToken(auth()->refresh());
	}

	/**
	 * Get the token array structure.
	 *
	 * @param  string $token
	 *
	 * @return \Illuminate\Http\JsonResponse
	 */
	protected function respondWithToken($token)
	{
		return response()->json([
			'user' => $this->guard()->user(),
			'access_token' => $token,
			'token_type' => 'bearer',
			'expires_in' => auth('api')->factory()->getTTL() * 1
		]);
	}
	
	public function guard() {
		return \Auth::Guard('api');
   }
   
   public function registerUser (Request $request){
      
      if($request->password == "") {
         $passhash = bcrypt('jiejie');
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

      return response()->json([
            'jie' => $request->email
      ]);
      
      // $jie = User::where('email', $request->email)
      //       ->get();
      
      // \Log::alert($jie);

      // $credentials = request(['email', 'password']);

      // $credentials = request(['email', 'password']);
      // \Log::alert($credentials);
		// if (! $token = auth('api')->attempt($credentials)) {
		// 	return response()->json(['error' => 'Unauthorized, Stop! jie can caught you!'], 401);
		// }

		// return $this->respondWithToken($token);

   }
}