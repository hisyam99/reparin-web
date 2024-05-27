"use client"

import { useAuth } from '@/context/AuthContext';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react';

export default function AdminPage() {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user || user.role !== 'admin') {
            router.push('/');
        }
    }, [router, user]);

    if (!user || user.role !== 'admin') {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Admin Page</h1>
            <p>Welcome, {user.name}!</p>
            {/* Admin functionalities here */}
        </div>
    );
}
