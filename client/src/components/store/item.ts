import { selector, selectorFamily } from "recoil";
import Item from "../../@types/item";
import getItems from "../api/getItems";
import { categoryState } from "./category";

export const itemListState = selectorFamily({
  key: "itemListState",
  get: (count: number) => async () => {
    const data = (await getItems(count)) as Item[];
    return data;
  },
});

export const filteredItemsList = selector({
  key: "filteredItemList",
  get: ({ get }) => {
    const itemList = get(itemListState(20));
    const filter = get(categoryState);
    if (filter === "All") {
      return itemList;
    }

    return itemList.filter((item) => item.category === filter);
  },
});
