import url from "./url";

const deleteItemById = (id: number) =>
  fetch(`${url}/items/${id}`, { method: "DELETE" }).then((res) => res.json());

export default deleteItemById;
