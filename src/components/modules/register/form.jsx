import React, { useState } from "react";

import { useAuth } from "../../../hooks/useAuth";
import { Link } from "react-router-dom";

const LoginForm = () => {

    const [email, setEmail] = useState("");

    const { login } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        // API REQUEST HERE
        if (email.length) {
            // Replace with actual authentication logic
            await login({ email });
        } else {
            alert("Email invalide");
        }
    };

    return <>
        <div>
            <img
                alt="Orif Pomy"
                src="/assets/images/logo.jpg"
                className="h-10 w-auto"
            />
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Se connecter
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
                Déjà membre?{' '}
                <Link to="/login" className="font-semibold text-primary hover:text-primary">
                    Se connecter
                </Link>
            </p>
        </div>

        <div className="mt-10">
            <div>
                <form className="space-y-6" onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Adresse e-mail
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Mot de passe
                        </label>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                autoComplete="current-password"
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            Créer un compte
                        </button>
                    </div>
                </form>
            </div>

        </div>
    </>;

}


export default LoginForm
