import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                // ✅ CSRF cookieを取得
                await axios.get('/sanctum/csrf-cookie', { withCredentials: true });

                // ✅ 認証済みユーザーを取得
                const res = await axios.get('/api/user', { withCredentials: true });
                setUser(res.data);
            } catch (error) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    );
};