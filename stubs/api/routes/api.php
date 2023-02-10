<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/auth/user', [AuthenticatedSessionController::class, 'user'])->name('auth.user');
    Route::delete('/auth/logout', [AuthenticatedSessionController::class, 'destroy'])->name('auth.logout');
});

require __DIR__.'/auth.php';
