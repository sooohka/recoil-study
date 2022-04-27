import Item from "../../@types/item";
import url from "./url";

const postItem = ({ item }: { item: Item }) =>
  fetch(`${url}/items`, {
    method: "POST",
    body: JSON.stringify(item),
  }).then((res) => res.json());

export default postItem;
