import React from 'react'
import { Link, Outlet } from "react-router-dom";
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import TopbarLayout from './topbar';

const links = [
  { "label" : "Retour au tableau", "route" : "/"}
]

const MainLayout = () => {
  return (<>

    <div className="flex w-full h-full flex-col">

      { /* Top bar header */}
      <TopbarLayout title="Paramètres" links={links} />

      { /* Main section */}
      <main className="w-full h-full z-20 m-0">
        <Outlet />
      </main>

    </div>

  </>)
}

export default MainLayout