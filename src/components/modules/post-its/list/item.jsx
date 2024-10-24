import React from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'

const PostItsListItem = ({content}) => {
  return (<>
    <div className="block relative p-[1em] w-full max-w-[300px] min-h-[300px] bg-[#FFFD75] shadow-md rotate-2 -skew-x-1 skew-y-1 transition-transform" >
        <span contentEditable>
            {content}
        </span>
    
        <button className="absolute top-0 right-0 w-6 h-6 bg-red-600 text-white">
            <XMarkIcon />
        </button>
    </div>
  </>)
}

export default PostItsListItem

/*
float: left;
display: block;
position: relative;
padding: 1em;
width: 300px;
min-height: 300px;
margin: 0 30px 30px 0;
background: linear-gradient(top, rgba(0,0,0,.05), rgba(0,0,0,.25));
background-color: #FFFD75;
box-shadow: 5px 5px 10px -2px rgba(33,33,33,.3);
transform: rotate(2deg);
transform: skew(-1deg,1deg);
transition: transform .15s;

z-index: 1;
*/
