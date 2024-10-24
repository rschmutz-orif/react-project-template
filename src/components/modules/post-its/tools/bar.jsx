import React from 'react'

import PostItsSearchbar from './search';
import PostItsModeSelector from './mode-selector';
import PostItsCreate from './create';

const PostItsToolsBar = ({  }) => {

    return (<>
        <section className="w-full h-auto border-b mb-0 sticky">
            <div className="flex w-full h-auto max-w-7xl m-auto px-2 flex-wrap">
                <PostItsSearchbar />
                <PostItsModeSelector />
                <PostItsCreate />
            </div>
        </section>
    </>)
}

export default PostItsToolsBar