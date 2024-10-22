import React from 'react'
import { Link } from "react-router-dom";

const TopbarLayout = ({title, links}) => {
  return (<>

      <header className="border-b w-full h-12 sm:h-14">
        <div className="flex w-full max-w-7xl m-auto h-full justify-between items-center">
          
          <div className='flex w-auto h-full px-2 py-3 sm:py-3 justify-between items-center'>
            <img className="w-auto h-full" src="/assets/images/logo.svg" alt="Orif Pomy" />
            <h1 className="text-lg text-lg sm:text-2xl pl-4 font-normal">{title}</h1>
          </div>

          <div className="flex h-full w-auto py-2 items-center p-2">
            {links.map(aLink => <Link to={aLink.route} key={aLink.route} className="text-sm font-semibold text-gray-900 underline sm:no-underline sm:hover:underline">{aLink.label}</Link>)}
          </div>
        
        </div>
      </header>

  </>)
}

export default TopbarLayout