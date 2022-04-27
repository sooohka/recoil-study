import Category from "./category";

type Item = {
  id: number;
  title: string;
  price: string;
  description: string;
  category_id: Category["id"];
  image: string;
};

export default Item;
