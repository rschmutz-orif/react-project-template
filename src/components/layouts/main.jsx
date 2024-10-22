import React from 'react'
import { Outlet } from "react-router-dom";

import TopBar from '../modules/top-bar/top-bar'

const MainLayout = () => {
  return (<>
      <TopBar />
      <Outlet />
  </>)
}

export default MainLayout