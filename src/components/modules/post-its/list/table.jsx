import React from 'react'

import PostItsListEmpty from './empty'

const PostItsTable = () => {
  
  return (<>
    
    {notes.length ? <>
      <section className="w-full max-w-7xl m-auto overflow-hidden px-2 py-4">
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {notes.map((aNote) => (
            <li
              key={aNote.id}
              className="col-span-1 flex flex-col divide-y divide-gray-200"
            >
            </li>
          ))}
        </ul>
      </section>
    </> : <PostItsListEmpty />}

  </>)
}

export default PostItsTable