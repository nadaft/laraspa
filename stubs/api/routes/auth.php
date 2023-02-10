<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\ResendEmailVerificationController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;

Route::post('/auth/register', [RegisteredUserController::class, 'store'])->name('auth.register');
Route::post('/auth/login', [AuthenticatedSessionController::class, 'store'])->name('auth.login');
Route::get('/auth/email/verify/{id}/{hash}', VerifyEmailController::class)->middleware(['signed'])->name('verification.verify');
Route::post('/auth/email/resend', ResendEmailVerificationController::class)->name('verification.resend');
Route::post('/auth/forgot-password', [PasswordResetLinkController::class, 'store'])->name('password.email');
Route::post('/auth/reset-password', [NewPasswordController::class, 'store'])->name('password.update');
