import { atom } from "recoil";

// award의 img 모달 관련
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

// project의 project 모달 관련
export const projectState = atom({
  key: "projectState",
  default: false,
});

export interface IProjectData {
  title: string;
  src: string;
  description: string;
}

export const projectData = atom<IProjectData>({
  key: "projectData",
  default: {
    title: "",
    src: "",
    description: "",
  },
});
