import React from "react";
import ItemCard from "./ItemCard";

const CategorySection = ({ items, onAddItem }) => {
  return (
    <div>
      {items.map((group, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{group.category}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {group.items.map((item, idx) => (
              <ItemCard key={idx} item={item} onAddItem={onAddItem} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
