// Dépendances externes
import React from 'react'
import { Outlet } from "react-router-dom";

// Dépendances internes
import HeaderTopbar from '../modules/header/topbar';

const links = [
  { "label" : "Retour au tableau", "route" : "/"}
]

const MainLayout = () => {
  return (<>

    <div className="flex w-full h-full flex-col">

      { /* Top bar header */}
      <HeaderTopbar title="Paramètres" links={links} />

      { /* Main section */}
      <main className="w-full h-full z-20 m-0">
        <Outlet />
      </main>

    </div>

  </>)
}

export default MainLayout