// Ressources externes
import React from 'react'
import { Link, Outlet } from "react-router-dom";

// Ressources internes
import TopbarLayout from './topbar';

const links = [
  { "label" : "Paramètres", "route" : "/settings"}
]

const MainLayout = () => {
  return (<>

    <div className="flex w-full h-full flex-col">

      { /* Top bar header */}
      <TopbarLayout title="Tableau virtuel" links={links} />

      { /* Main section */}
      <main className="w-full h-full z-20 m-0">
        <Outlet />
      </main>

    </div>

  </>)
}

export default MainLayout