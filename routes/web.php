<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SocialAuthController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('auth/{provider}', [SocialAuthController::class, 'redirectToProvider']);
Route::get('auth/{provider}/callback', [SocialAuthController::class, 'handleProviderCallback']);

Route::get('{any}', function () {
    return view('app');
})->where('any', '.*');