import React from 'react'
import { PlusIcon } from '@heroicons/react/20/solid'

const PostItsCreate = () => {
  return (<>
    <div className="fixed bottom-0 right-0 flex justify-center items-end w-full h-[1px] sm:justify-center sm:items-center sm:relative sm:bottom-auto sm:right-auto">
      <button
        type="button"
        className="w-16 h-16 m-2 rounded-full bg-primary p-4 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <PlusIcon aria-hidden="true" className="h-8 w-8" />
      </button>
    </div>
  </>
  )
}

export default PostItsCreate