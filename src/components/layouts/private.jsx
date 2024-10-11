import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { ProtectedRoute } from './protected-route';
import { useAuth } from '../../hooks/useAuth';

export const TopBar = () => {

    const { user } = useAuth();

    return (<>
        <div className='bg-white border-b border-gray-200'>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-8 justify-end items-center">
                <p className="text-gray-400 text-sm">Connecté avec l'email "{user.email}" (<Link className="text-blue-500 underline" to="/logout">logout</Link>)</p>
            </div>
        </div>
        <nav className="bg-white border-b border-gray-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 justify-between">

                {/* Logo de l'Orif */}
                <div className="flex flex-shrink-0 justify-center items-center">
                    <img src="/assets/images/logo.jpg" alt="Orif" className="block h-8 w-auto" />
                </div>

                {/* Navigation (nouvelle partie) */}
                <div className="flex justify-center items-center">

                </div>
            </div>
        </nav>
    </>)
}

const PrivateLayout = () => {
    return (
        <ProtectedRoute>
            <div className="flex w-full h-full absolute justify-center items-center z-20">
                <div className="w-full min-h-full">
                    <TopBar />
                    <div className="py-10">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 justify-between">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
}

export default PrivateLayout
