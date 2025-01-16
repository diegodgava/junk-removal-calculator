import React from "react";

const ItemCard = ({ item, onAddItem }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md flex flex-col items-center">
      <h3 className="text-lg font-semibold text-center mb-2">{item.name}</h3>
      <p className="text-sm text-gray-600 mb-4">${item.price.toFixed(2)}</p>
      <button
        onClick={() => onAddItem(item)}
        className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600"
      >
        Add Item
      </button>
    </div>
  );
};

export default ItemCard;
