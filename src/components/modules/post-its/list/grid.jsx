import React, { useContext } from 'react'

import PostItsListItem from './item'
import PostItsListEmpty from './empty'
import PostItsContext from '../context';

const PostItsGrid = () => {

  const { postIts } = useContext(PostItsContext);

  return (<>
    
    {postIts.length ? <>
      <section className="w-full max-w-7xl m-auto overflow-hidden px-2 py-4">
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {postIts.map((aNote) => (
            <li
              key={aNote.id}
              className="col-span-1 flex flex-col divide-y divide-gray-200"
            >
              <PostItsListItem content={`A post it ${aNote.id}`} />
            </li>
          ))}
        </ul>
      </section>
    </> : <PostItsListEmpty />}

  </>)
}

export default PostItsGrid