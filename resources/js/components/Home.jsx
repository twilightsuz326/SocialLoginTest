import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

function Home() {
    const { user, loading } = useContext(AuthContext);

    if (loading) return <p>読み込み中...</p>;

    return (
        <div>
            <h1>Home</h1>
            {user ? (
                <p>ようこそ {user.name} さん！</p>
            ) : (
                <p>ログインしていません。</p>
            )}
        </div>
    );
}

export default Home;