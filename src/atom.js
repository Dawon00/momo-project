import {atom} from 'recoil';
import {localStorageEffect} from './page/Profile';

export const locaCateState = atom({
    key: "locaCateState",
    default: ""
});

export const menuCateState = atom({
    key: "menuCateState",
    default: ""
});
export const userStoredList = atom({
    key: "userStoredList",
    default: [],
    effects: [localStorageEffect("user_list")],
});