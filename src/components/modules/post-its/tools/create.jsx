import React from 'react'
import { PlusIcon } from '@heroicons/react/20/solid'

const PostItsCreate = () => {
  return (<>
    <div className="relative w-full h-[1px]">
      <button
        type="button"
        className="absolute right-1/2 top-[-32px] ml-[-32px] rounded-full bg-primary p-4 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <PlusIcon aria-hidden="true" className="h-8 w-8" />
      </button>
    </div>
  </>
  )
}

export default PostItsCreate