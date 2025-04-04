<?php

namespace App\Http\Controllers;

use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class SocialAuthController extends Controller
{
    public function redirectToProvider($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    public function handleProviderCallback($provider)
    {
        try {
            $socialUser = Socialite::driver($provider)->user();
        } catch (\Exception $e) {
            return redirect('/login')->with('error', '認証に失敗しました。');
        }

        // ユーザーの検索または作成
        $user = User::updateOrCreate(
            ['provider' => $provider, 'provider_id' => $socialUser->getId()],
            [
                'name' => $socialUser->getName(),
                'email' => $socialUser->getEmail(),
                'password' => bcrypt(uniqid())
            ]
        );

        // ログイン処理
        Auth::login($user);
        session()->regenerate();

        return redirect('/home');
    }
}