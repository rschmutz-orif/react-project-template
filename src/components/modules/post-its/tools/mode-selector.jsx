import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';

const ModeLink = ({ mode, label }) => {
  return <li className="my-2 mx-1">
    <NavLink
      to={`/${mode}`}
      className={({ isActive }) => `inline-flex items-center rounded-full px-4 py-2 text-xs font-medium ${isActive ? 'text-white bg-primary' : 'ring-1 ring-inset ring-gray-200 text-primary'}`}>
      {label}
    </NavLink>
  </li>
}

const PostItsModeSelector = () => {
   return (<>
    <ul className="flex justify-end items-center w-full sm:w-1/2 sm:h-20">
      <ModeLink mode="board" label="Libre" />
      <ModeLink mode="grid" label="Grille" />
      <ModeLink mode="table" label="Ligne" />
    </ul>
  </>)
}

export default PostItsModeSelector