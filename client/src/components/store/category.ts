import { atom, selector } from "recoil";
import Category from "../../@types/category";
import getCategories from "../api/getCategories";

export const categoriesState = selector({
  key: "categoriesState",
  get: async () => {
    const categories = (await getCategories()) as Category[];
    return ["All" as const, ...categories];
  },
});
export const categoryState = atom<Category>({
  key: "categoryState",
  default: "All" as const,
});
