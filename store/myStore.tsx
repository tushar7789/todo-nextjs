import {create} from 'zustand';
import { storeInt } from '@/interfaces/homepageInterfaces';

const myStore = create<storeInt>((set) => ({
    list : [],
    addIntoStoreList : () => set((state : [], item : []) => ({list : [...state.list, item]})),
    removeFromStoreList : () => set((state : [], item : []) => ({list : [...state.list, item]})),
}));

export default myStore;