// Dépendances externes
import React from 'react'
import { Outlet } from "react-router-dom";

// Dépendances internes
import HeaderTopbar from '../modules/header/topbar';
import PostItsToolsBar from '../modules/post-its/tools/bar';
import PostItsProvider from '../modules/post-its/provider';

const links = [
  { "label": "Paramètres", "route": "/settings" }
]

const MainLayout = () => {

  return (<>
    <PostItsProvider>
      <div className="flex w-full h-full flex-col">
        { /* Top bar header */}
        <HeaderTopbar title="Tableau virtuel" links={links} />
        { /* Main section */}
        <main className="w-full h-full z-20 m-0">
          { /* Tools bar */}
          <PostItsToolsBar />
          <div className="w-full pt-12">
            <Outlet />
          </div>
        </main>

      </div>
    </PostItsProvider>
  </>)
}

export default MainLayout