import { initDB, STORE_NAME } from "./config";

export const addPostIt = async (postIt) => {
    const db = await initDB();
    return db.add(STORE_NAME, postIt);
};

export const getPostIts = async () => {
    const db = await initDB();
    return db.getAll(STORE_NAME);
};

export const deletePostIt = async (id) => {
    const db = await initDB();
    return db.delete(STORE_NAME, id);
};