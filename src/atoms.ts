import { atom } from "recoil";

export const imgState = atom({
  key: "imgState",
  default: false,
});

export interface IImgName {
  src: string;
  title: string;
  explain: string;
}

export const imgName = atom<IImgName>({
  key: "imgName",
  default: {
    src: "",
    title: "",
    explain: "",
  },
});
