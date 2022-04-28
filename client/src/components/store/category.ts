import { atom, selector } from "recoil";
import Category from "../../@types/category";
import getCategories from "../api/getCategories";

export const categoriesState = selector({
  key: "categoriesState",
  get: async () => {
    const categories = (await getCategories()) as Category[];
    const state = ["All" as const, ...categories];
    console.log("categoriesState", state);
    return state;
  },
});
export const categoryState = atom<Category>({
  key: "categoryState",
  default: "All" as const,
  effects: [
    ({ node }) => {
      console.log("categoryState", node);
    },
  ],
});
