import React, { useEffect, useState } from "react";
import Item from "../../@types/item";
import ItemFilter from "../Itemfilter";
import ItemListItem from "../ItemListItem";

function ItemList() {
  const [itemListItems, setItemListItems] = useState<Item[]>([]);
  useEffect(() => {
    fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then((res: Item[]) => setItemListItems(res))
      .catch(() => {});
  }, []);
  return (
    <ul>
      <h2>Item List</h2>
      <ItemFilter />
      {itemListItems.map((item) => (
        <ItemListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default ItemList;
