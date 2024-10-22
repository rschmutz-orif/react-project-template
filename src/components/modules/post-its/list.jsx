import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

import PostItsBoard from './board';
import PostItsGrid from './grid';
import PostItsTable from './table';
import PostItsToolsBar from './tools/bar';


const PostItsList = () => {

  const { mode } = useParams();
  const [search, setSearch] = useState("");

  return (<>
  
    { /* Tools bar */}
    <PostItsToolsBar search={search} setSearch={setSearch} mode={mode} />
 
    { (mode === "table") && <PostItsTable /> }
    { (mode === "grid") && <PostItsGrid /> }
    { (mode !== "table" && mode !== "grid") && <PostItsBoard /> }
  </>)
}

export default PostItsList