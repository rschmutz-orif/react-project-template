import { initDB, POST_ITS_STORE_NAME } from "../config";

export const deletePostIt = async (id) => {
    const db = await initDB();
    return db.delete(POST_ITS_STORE_NAME, id);
};