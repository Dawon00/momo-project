import { atom } from "recoil";
import { localStorageEffect } from "./page/Profile";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "toDoLocal",
  storage: localStorage,
});

export const locaCateState = atom({
  key: "locaCateState",
  default: "",
});

export const menuCateState = atom({
  key: "menuCateState",
  default: "",
});

export const userStoredList = atom({
  key: "userStoredList",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const bookmarkRes = atom({
  key: "bookmarkRes",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
