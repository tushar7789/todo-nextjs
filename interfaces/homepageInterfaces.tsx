export type propInt = {
    no : number, 
    task : string,
}

export type storeInt = {
    list : [],
    addIntoStoreList : () => void;
    removeFromStoreList : () => void;
}
