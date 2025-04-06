<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class PostController extends Controller
{

    public function index()
    {
        $user = Auth::user();
        $posts = $user->posts()->latest()->get();

        return response()->json($posts);
    }
}
