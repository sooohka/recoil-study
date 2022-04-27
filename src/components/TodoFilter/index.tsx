import React, { useState } from "react";

const filters = ["all", "done", "un-done"] as const;

export type Filter = typeof filters[number];

function TodoFilter() {
  const [filter, setFilter] = useState<Filter>("all");

  const handleClick = (_filter: Filter) => {
    setFilter(_filter);
  };

  return (
    <div>
      {filters.map((_filter) => (
        <button
          key={_filter}
          type="button"
          onClick={() => handleClick(_filter)}
          style={_filter === filter ? { fontWeight: "bold" } : {}}
        >
          {_filter}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;
