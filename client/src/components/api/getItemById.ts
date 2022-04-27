import url from "./url";

const getItemById = (id: number) =>
  fetch(`${url}/items/${id}`).then((res) => res.json());

export default getItemById;
