# React + Laravel 10 Sample

## Overview
- 今後の開発で使うためのテンプレート

## 実装・学習メモ

### ソーシャルログイン（Google）
- Laravel Socialite を使って Google ログイン機能を実装
- Google Cloud Console でリダイレクトURIを設定
- `auth/{provider}` および `auth/{provider}/callback` にルーティングを定義
- 認証後に `Auth::login()` + `session()->regenerate()` によりセッション確立
- Sanctum による SPA 向けセッション認証を使用し、React と連携
- React 側で `axios.get('/sanctum/csrf-cookie', { withCredentials: true })` を初回呼び出し

### Sanctum & API 認証
- `auth:sanctum` ミドルウェアを API に適用し、セッションベース認証を保護
- `.env` にて以下を設定：
  - `SESSION_DOMAIN=.jwest.jp`
  - `SANCTUM_STATEFUL_DOMAINS=test.jwest.jp`
- `config/cors.php` にて `supports_credentials => true` を有効化
- `EnsureFrontendRequestsAreStateful` を `app/Http/Kernel.php` の `api` ミドルウェアグループに追加

### 投稿機能（ログインユーザー限定表示）
- posts テーブルを作成し、`user_id`, `title`, `body` カラムを定義
- User モデルに `posts()`、Post モデルに `user()` のリレーションを追加
- 認証中のユーザーの投稿のみを返す `/api/my-posts` エンドポイントを用意
- React 側で API を呼び出し、ユーザー投稿を表示

### Intelephense 補完エラー対策
- `Undefined method 'posts'` の警告は IDE 側の型解析不足によるもの
- 対処法：
  - `composer require --dev barryvdh/laravel-ide-helper` を導入し、`php artisan ide-helper:generate` で補完ファイルを生成
