import React from 'react'

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const TopBar = () => {
  return (
    <>
      <header className="flex max-w-7xl shadow-sm static justify-between w-full h-32 bg-hero z-30 margin-auto">
        <div className='h-full w-auto p-2'><img className="block w-auto h-full" src="/assets/images/logo.svg" alt="Orif Pomy" /></div>
        <div className="h-full w-auto p-2">
          <div className="mt-2 flex rounded-md shadow-sm">
            <div className="relative flex flex-grow items-stretch focus-within:z-10">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="search"
                name="search"
                type="search"
                placeholder="Rechercher un Post-It"
                className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="flex h-full w-auto py-2 items-center">

          <a href="#" className="btn mr-4 text-sm">Paramètres</a>

          <button type="button" className="mr-4 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Nouveau Post-It
          </button>

        </div>
      </header>
    </>
  )
}

export default TopBar;
