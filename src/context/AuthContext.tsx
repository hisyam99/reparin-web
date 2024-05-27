"use client"

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'


interface AuthContextType {
    user: any;
    login: (user: any) => void;
    logout: () => void;
    register: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<any>(null);
    const router = useRouter();

    const login = (user: any) => {
        setUser(user);
        // Save user to localStorage or context
    };

    const logout = () => {
        setUser(null);
        router.push('/login');
    };

    const register = async (email: string, password: string) => {
        // Implement your registration logic here
    };

    useEffect(() => {
        // Retrieve user from localStorage or session
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
