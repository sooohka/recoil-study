import React from "react";
import Item from "../../@types/item";

type Props = {
  item: Item;
};
function ItemListItem({ item }: Props) {
  return (
    <li>
      <h3>{item.title}</h3>
      <span>{item.price}</span>
      <p>{item.description}</p>
      <img
        style={{ width: 150, height: 150 }}
        src={item.image}
        alt={item.title}
      />
    </li>
  );
}

export default ItemListItem;
