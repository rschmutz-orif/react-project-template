import { openDB } from 'idb';

export const DB_NAME = 'reactPostItsTemplate';
export const DB_VERSION = 1;
export const STORE_NAME = 'postits';

export const initDB = async () => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    },
  });
};