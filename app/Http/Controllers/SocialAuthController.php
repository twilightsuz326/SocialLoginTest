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

        $user = User::where('email', $socialUser->getEmail())->first();

        if (!$user) {
            $user = new User([
                'name' => $socialUser->getName(),
                'email' => $socialUser->getEmail(),
                'password' => bcrypt(uniqid())
            ]);
        }

        // プロバイダーに応じてIDを保存
        switch ($provider) {
            case 'google':
                $user->google_id = $socialUser->getId();
                break;
            case 'line':
                $user->line_id = $socialUser->getId();
                break;
        }

        $user->save();

        Auth::login($user);
        session()->regenerate();

        return redirect('/home');
    }
}
