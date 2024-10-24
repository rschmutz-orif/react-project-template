import { initDB, POST_ITS_STORE_NAME } from "../config";

export const addPostIt = async (postIt) => {
    const db = await initDB();
    return db.add(POST_ITS_STORE_NAME, postIt);
};