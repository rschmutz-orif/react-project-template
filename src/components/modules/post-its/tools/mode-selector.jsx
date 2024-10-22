import React from 'react'
import { Link, useParams } from 'react-router-dom';

const ModeLink = ({ currentMode, label }) => {
  const { mode } = useParams();
  return <li className="mx-1 m-2"><Link to={`/${currentMode}`} className={`inline-flex items-center rounded-full px-4 py-2 text-xs font-medium ${mode == currentMode ? 'text-white bg-primary' : 'ring-1 ring-inset ring-gray-200 text-primary'}`}>{label}</Link></li>
}

const PostItsModeSelector = () => {

  return (<>
    <ul className="flex w-1/2 h-full justify-end items-center">
      <ModeLink currentMode="board" label="Board" />
      <ModeLink currentMode="grid" label="Grid" />
      <ModeLink currentMode="table" label="Table" />
    </ul>
  </>)
}

export default PostItsModeSelector