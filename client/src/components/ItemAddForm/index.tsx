import React, { useState } from "react";
import Category from "../../@types/category";
import Item from "../../@types/item";

function ItemAddForm() {
  const [title, setTitle] = useState<Item["title"]>("");
  const [desc, setDesc] = useState<Item["description"]>("");
  const [price, setPrice] = useState<Item["price"]>("");
  const [image, setImage] = useState<Item["image"]>("");
  const [categories, setCategories] = useState<Category[]>([]);

  const handleCategoryChange = () => {};
  return (
    <form>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <input value={desc} onChange={(e) => setDesc(e.target.value)} />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      {categories.map((category) => (
        <input
          onChange={handleCategoryChange}
          key={category}
          name="category"
          value={category}
          type="radio"
        />
      ))}
    </form>
  );
}

export default ItemAddForm;
