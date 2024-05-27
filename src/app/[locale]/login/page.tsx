"use client";

import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';
import LoginForm from '@/components/LoginForm';
import Link from 'next/link';

export default function LoginPage() {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const backgroundStyle: React.CSSProperties = {
        minHeight: "100vh",
        padding: "20px",
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Replace with your authentication logic
        const user = { username, role: 'admin' }; // mock user
        login(user);
    };

    return (
        <div style={backgroundStyle}>
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-4">Login</h1>
                <LoginForm />
                <div className="mt-4">
                    <p>
                        Don&apos;t have an account? <Link href="/register" className="text-blue-500 hover:underline">Register here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
