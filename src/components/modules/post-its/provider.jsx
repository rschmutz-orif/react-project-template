import React, { useEffect, useState } from 'react';

import PostItsContext from './context';
import PostItsResources from '../../../resources/post-its/get';

const PostItsProvider = ({ children }) => {
    const [refresh, setRefresh] = useState(true);
    const [postIts, setPostIts] = useState([]);

    useEffect(() => {
         console.log("PROVIDER DE POST ITS");
         const fetchData = async () => {
            if(refresh){
                const storedPostIts = await getPostIts();

            }
            // setPostIts(storedPostIts);
          };
          fetchData();
    }, [postIts])

    const getPostIts = () => {

    }

    const addPostit = () => {

    }

    const editPostit = () => {

    }

    const removePostit = () => {

    }

    return (
        <PostItsContext.Provider value={{ postIts, addPostIt, editPostIt, removePostIt }}>
        {children}
        </PostItsContext.Provider>
    );
};

export default PostItsProvider