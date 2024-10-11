import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Routes, Route, } from "react-router-dom";

// Layouts
import PrivateLayout from './components/layouts/private';
import PublicLayout from './components/layouts/public';

// Modules Components
import LoginForm from './components/modules/login/form';
import RegisterForm from './components/modules/register/form';

import Home from './components/modules/home/home';

import TodosList from './components/modules/todos/create';
import TodosCreate from './components/modules/todos/create';
import TodosEdit from './components/modules/todos/edit';
import TodosRemove from './components/modules/todos/remove';

// Protected Route
import { ProtectedRoute } from './components/layouts/protected-route';


// Auth utils
import { AuthProvider, useAuth } from './hooks/useAuth';

import './index.pcss';

const container = document.getElementById('root');
const root = createRoot(container);

const NoMatch = () => {
    return (<ProtectedRoute>
        <div className="w-full h-full flex items-center justify-center">
            <p>404 - Aucune page trouvée</p>
        </div>
    </ProtectedRoute>);
}

const Logout = () => {
    const { logout } = useAuth();

    useEffect(() => {
        logout();
    })
    return <></>;
}

root.render(<BrowserRouter>
    <AuthProvider>
        <Routes>
            <Route path="/login" element={<PublicLayout />}>
                <Route index element={<LoginForm />} />
            </Route>

            <Route path="/register" element={<PublicLayout />}>
                <Route index element={<RegisterForm />} />
            </Route>

            <Route path="/home" element={<PrivateLayout />}>
                <Route index element={<Home />} />
            </Route>

            <Route path="/todos" element={<PrivateLayout />}>
                <Route index element={<TodosList />} />
                <Route path="create" element={<TodosCreate />} />
                <Route path=":todoId/edit" element={<TodosEdit />} />
                <Route path=":todoId/remove" element={<TodosRemove />} />
            </Route>

            <Route path="/logout" element={<Logout />} />

            <Route path="*" element={<NoMatch />} />
        </Routes>
    </AuthProvider>
</BrowserRouter>);
