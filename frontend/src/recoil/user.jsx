import { atom } from "recoil";

export const userState = atom({
    key: "user",
    default: {
        nickname: null,
        username: null,
    },
});
