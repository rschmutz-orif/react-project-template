import React from "react";

import { Link } from "react-router-dom";

const GamesCreate = () =>{
    return <div className="flex w-full flex-col justify-center items-center">
        <h1>Formulaire pour créer une nouvelle todo-list</h1>
        <Link className="underline text-blue-500" to="/home">Retour à la liste des todos</Link>
    </div>;

}

export default GamesCreate
