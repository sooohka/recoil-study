import React, { useState } from "react";
import Category from "../../@types/category";

function ItemFilter() {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: 3,
      name: "all",
    },
  ]);
  return (
    <div>
      {categories.map((category) => (
        <button key={category.id} type="button">
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default ItemFilter;
