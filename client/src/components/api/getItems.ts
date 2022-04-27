import url from "./url";

const getItems = (count?: number) =>
  fetch(`${url}/items${count !== undefined ? `?count=${count}` : ""}`).then(
    (res) => res.json()
  );

export default getItems;
