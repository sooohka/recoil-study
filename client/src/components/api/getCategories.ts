import url from "./url";

const getCategories = () =>
  fetch(`${url}/categories`).then((res) => res.json());

export default getCategories;
