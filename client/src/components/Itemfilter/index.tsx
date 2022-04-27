import React, { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import Category from "../../@types/category";
import { categoriesState, categoryState } from "../store/category";

function ItemFilter() {
  const loadable = useRecoilValueLoadable(categoriesState);
  const [category, setCategory] = useRecoilState(categoryState);

  useEffect(() => {
    if (loadable.state === "hasValue") setCategory(loadable.contents[0]);
  }, [loadable, setCategory]);

  const handleClick = (_category: Category) => {
    setCategory(_category);
  };

  if (loadable.state === "hasValue")
    return (
      <div>
        {loadable.contents.map((_category) => (
          <button
            style={category === _category ? { backgroundColor: "beige" } : {}}
            onClick={() => handleClick(_category)}
            key={_category}
            type="button"
          >
            {_category}
          </button>
        ))}
      </div>
    );
  return null;
}

export default ItemFilter;
