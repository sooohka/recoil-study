import React from "react";
import { useRecoilValueLoadable } from "recoil";
import ItemFilter from "../Itemfilter";
import ItemListItem from "../ItemListItem";
import { filteredItemsList } from "../store/item";

function ItemList() {
  const loadable = useRecoilValueLoadable(filteredItemsList);

  if (loadable.state !== "hasValue") return null;
  return (
    <ul>
      <h2>Item List</h2>
      <ItemFilter />
      {loadable.contents.map((item) => (
        <ItemListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default ItemList;
