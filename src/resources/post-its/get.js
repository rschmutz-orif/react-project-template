import { initDB, POST_ITS_STORE_NAME } from "../config";

export const getPostIts = async () => {
    const db = await initDB();
    return db.getAll(POST_ITS_STORE_NAME);
};
