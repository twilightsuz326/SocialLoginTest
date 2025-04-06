import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

function MyPosts() {
    const [posts, setPosts] = useState([]);
    const { user, loading } = useContext(AuthContext);

    useEffect(() => {
        if (!loading && user) {
            axios.get('/api/my-posts', { withCredentials: true })
                .then(res => setPosts(res.data))
                .catch(err => console.error(err));
        }
    }, [user, loading]);

    if (loading) return <p>読み込み中...</p>;
    if (!user) return <p>ログインしてください。</p>;

    return (
        <div>
            <h2>{user.name}さんの投稿</h2>
            {posts.map(post => (
                <div key={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    <small>{new Date(post.created_at).toLocaleString()}</small>
                </div>
            ))}
        </div>
    );
}

export default MyPosts;