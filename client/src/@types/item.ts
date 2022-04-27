import Category from "./category";

type Item = {
  id: number;
  title: string;
  price: string;
  description: string;
  category: Category;
  image: string;
};

export default Item;
