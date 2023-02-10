<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;

class ResendEmailVerificationController extends Controller
{
    public function __invoke(Request $request)
    {
        $validatedData = $request->validate([
            'email' => ['required', 'email', Rule::exists('users', 'email')],
        ]);

        $user = User::whereEmail($validatedData['email'])->firstOrFail();

        if ($user->hasVerifiedEmail()) {
            throw ValidationException::withMessages([
                'email' => 'Email already verified',
            ]);
        }

        try {
            $user->sendEmailVerificationNotification();

            return response()->json([
                'message' => 'Link verifikasi email berhasil dikirim',
            ]);
        } catch (\Throwable $th) {
            \Log::error('Link verifikasi email gagal dikirim : '.$th->getMessage());

            return response()->json([
                'message' => 'Link verifikasi email gagal dikirim. Silahkan coba beberapa saat lagi.',
            ], 500);
        }
    }
}
