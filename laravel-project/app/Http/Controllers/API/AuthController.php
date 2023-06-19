<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

/**
 * @OA\Info(
 *     version="1.0",
 *     title="API Documentation",
 * )
 */

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

 /**
 * @OA\Post(
 *     path="/api/login",
 *     operationId="login",
 *     tags={"Auth"},
 *     summary="Login",
 *     description="Authenticate user and generate an access token",
 *     @OA\RequestBody(
 *         required=true,
 *         @OA\JsonContent(
 *             @OA\Property(property="email", type="string", example="user@example.com"),
 *             @OA\Property(property="password", type="string", example="password")
 *         )
 *     ),
 *     @OA\Response(
 *         response=200,
 *         description="Successful operation",
 *         @OA\JsonContent(
 *             @OA\Property(property="user", ref="#/components/schemas/User"),
 *             @OA\Property(property="authorization", type="object",
 *                 @OA\Property(property="token", type="string"),
 *                 @OA\Property(property="type", type="string", example="bearer")
 *             )
 *         )
 *     ),
 *     @OA\Response(response=400, description="Bad Request"),
 *     @OA\Response(response=401, description="Unauthorized"),
 * )
 */

/**
 * @OA\Schema(
 *     schema="User",
 *     required={"name", "email"},
 *     @OA\Property(property="name", type="string"),
 *     @OA\Property(property="email", type="string"),
 * )
 */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        $credentials = $request->only('email', 'password');
        $token = Auth::attempt($credentials);
        
        if (!$token) {
            return response()->json([
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = Auth::user();
        return response()->json([
            'user' => $user,
            'authorization' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }
 /**
     * @OA\Post(
     *     path="/api/register",
     *     operationId="register",
     *     tags={"Auth"},
     *     summary="Register a new user",
     *     description="Create a new user with the provided name, email, and password",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             @OA\Property(property="name", type="string", example="John Doe"),
     *             @OA\Property(property="email", type="string", example="user@example.com"),
     *             @OA\Property(property="password", type="string", example="password")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="User created successfully",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="User created successfully"),
     *             @OA\Property(property="user", type="object", ref="#/components/schemas/User")
     *         )
     *     ),
     *     @OA\Response(response=400, description="Bad Request")
     * )
     */
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'message' => 'User created successfully',
            'user' => $user
        ]);
    }
/**
     * @OA\Post(
     *     path="/api/logout",
     *     operationId="logout",
     *     tags={"Auth"},
     *     summary="Logout",
     *     description="Invalidate the current user's access token",
     *     security={{ "Bearer":{} }},
     *     @OA\Response(response=200, description="Successfully logged out")
     * )
     */
    public function logout()
    {
        Auth::logout();
        return response()->json([
            'message' => 'Successfully logged out',
        ]);
    }
 /**
     * @OA\Post(
     *     path="/api/refresh",
     *     operationId="refresh",
     *     tags={"Auth"},
     *     summary="Refresh Token",
     *     description="Refresh the current user's access token",
     *     security={{ "Bearer":{} }},
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             @OA\Property(property="user", type="object", ref="#/components/schemas/User"),
     *             @OA\Property(property="authorization", type="object",
     *                 @OA\Property(property="token", type="string"),
     *                 @OA\Property(property="type", type="string", example="bearer")
     *             )
     *         )
     *     )
     * )
     */
    public function refresh()
    {
        return response()->json([
            'user' => Auth::user(),
            'authorisation' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
            ]
        ]);
    }
}
