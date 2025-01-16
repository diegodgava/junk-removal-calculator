import React from "react";
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'; // Importação corrigida

const SelectedItems = ({ selectedItems, onAddItem, onRemoveItem }) => {
  const basePrice = 80;

  // Calcula o total dos itens no carrinho
  const totalItemPrice = selectedItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Preço total considerando o valor base
  const totalPrice = basePrice + totalItemPrice;

  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Quote Summary</h2>
      {selectedItems.length > 0 ? (
        <div className="space-y-4">
          {selectedItems.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center border-b pb-2">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                
                {/* Se o item tiver uma descrição, exibe abaixo */}
                {item.description && (
                  <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                )}
                
                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-sm text-gray-600">Price: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <div className="flex space-x-4">
                {/* Botão para diminuir a quantidade */}
                <button
                  onClick={() => onRemoveItem(item)}
                  className="bg-gray-300 text-gray-800 p-2 rounded-full hover:bg-gray-400"
                >
                  <MinusIcon className="h-5 w-5" />
                </button>
                
                {/* Botão para aumentar a quantidade */}
                <button
                  onClick={() => onAddItem(item)}
                  className="bg-gray-300 text-gray-800 p-2 rounded-full hover:bg-gray-400"
                >
                  <PlusIcon className="h-5 w-5" />
                </button>

                {/* Botão para remover o item */}
                <button
                  onClick={() => onRemoveItem(item, true)} // Enviando o parâmetro "true" para indicar que deve remover o item completamente
                  className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No items in the cart.</p>
      )}

      {/* Exibindo o valor base e o total */}
      <div className="mt-4 border-t pt-4">
        <div className="flex justify-between">
          <p className="text-lg font-semibold">Base Price:</p>
          <p className="text-lg">${basePrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-semibold">Total for Items:</p>
          <p className="text-lg">${totalItemPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-lg font-semibold">Total Quote:</p>
          <p className="text-lg text-green-600">${totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default SelectedItems;
