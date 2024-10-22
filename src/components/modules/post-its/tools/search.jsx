import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const PostItsToolsSearch = ({ search, setSearch }) => {

    const handleChange = (e) => {
       setSearch(e.target.value)
    }

    return (<>
        <div className="flex w-1/2 h-full justify-center items-center pr-20">
            <i className="flex items-center justify-center w-auto h-full">
                <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
            </i>
            <input type="text" className="w-full h-full border-none mb-0 active:border-none focus:ring-0 text-sm" placeholder="Rechercher un Post-It..." value={search || ""} onChange={handleChange}  />
        </div>

    </>)
}

export default PostItsToolsSearch