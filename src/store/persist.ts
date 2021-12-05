export const nameAppKey = 'uwish';
export function persist(store: any, key: string): any {
    const keyToRecover = `${nameAppKey}_${key}`
    const persistObjectStore = sessionStorage.getItem(keyToRecover);
    const objectOnString =  persistObjectStore ? JSON.parse(persistObjectStore) : store;
    if (store === null) return objectOnString;
    return store
};