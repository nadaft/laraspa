<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class VerifyEmailController extends Controller
{
    public function __invoke(Request $request)
    {
        if (! $request->hasValidSignature()) {
            return response()->json(['message' => 'Invalid/Expired url provided.'], Response::HTTP_UNAUTHORIZED);
        }

        $user = User::findOrFail($request->id);

        if ($user->hasVerifiedEmail()) {
            return response()->json([
                'message' => 'Email already verified',
            ], Response::HTTP_BAD_REQUEST);
        }

        $user->markEmailAsVerified();

        return response()->json([
            'message' => 'Verify email success',
        ]);
    }
}
