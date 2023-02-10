<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class AuthenticatedSessionController extends Controller
{
    public function store(LoginRequest $request)
    {
        $request->authenticate();

        $user = Auth::user();

        $token = $user->createToken($request->userAgent(), ['*'], now()->addDays(7))->plainTextToken;

        if ($user instanceof MustVerifyEmail && ! $user->hasVerifiedEmail()) {
            throw ValidationException::withMessages([
                'email' => [
                    'Your are not allowed to login. Please verify email first.',
                ],
            ]);
        }

        return $this->response([
            'user' => $user,
            'token' => $token,
        ]);
    }

    public function user()
    {
        return $this->response(Auth::user());
    }

    public function destroy()
    {
        $user = Auth::user();

        $user->currentAccessToken()->update([
            'expires_at' => now(),
        ]);

        return response()->noContent();
    }
}
