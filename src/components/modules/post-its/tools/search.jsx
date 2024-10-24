import React, { useContext } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

import SearchContext from '../../search/context';

const PostItsToolsSearch = ({}) => {

    const { searchQuery, setSearchQuery } = useContext(SearchContext);

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }

    return (<>
        <div className="flex w-full h-16 pr-0 border-b justify-center items-center sm:w-1/2 sm:h-20 sm:pr-20 sm:border-none">
            <i className="flex items-center justify-center w-auto h-full">
                <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
            </i>
            <input type="text" className="w-full h-full border-none mb-0 active:border-none focus:ring-0 text-sm" placeholder="Rechercher un Post-It..." value={searchQuery || ""} onChange={handleChange}  />
        </div>

    </>)
}

export default PostItsToolsSearch