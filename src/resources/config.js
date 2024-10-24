import { openDB } from 'idb';

export const DB_NAME = 'reactPostItsTemplate';
export const DB_VERSION = 1;

export const POST_ITS_STORE_NAME = 'postits';

export const initDB = async () => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(POST_ITS_STORE_NAME)) {
        db.createObjectStore(POST_ITS_STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    },
  });
};