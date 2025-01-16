"use client";

import React, { useState } from "react";
import Header from "./components/Header";
import CategoryCard from "./components/CategoryCard";
import SelectedItems from "./components/SelectedItems";
import SearchBar from "./components/SearchBar";
import itemsData from "./data/items.json";

export default function Home() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null); // Categoria atualmente selecionada

  // Função para adicionar um item ao carrinho
  const handleAddItem = (item) => {
    const existingItem = selectedItems.find((i) => i.name === item.name);
    if (existingItem) {
      setSelectedItems((prev) =>
        prev.map((i) => 
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setSelectedItems((prev) => [  
        ...prev,
        { ...item, quantity: 1 },
      ]);
    }
  };

  // Função para remover um item do carrinho
  const handleRemoveItem = (item) => {
    setSelectedItems((prev) =>
      prev.reduce((acc, i) => {
        if (i.name === item.name) {
          // Reduzir quantidade ou remover completamente
          if (i.quantity > 1) {
            acc.push({ ...i, quantity: i.quantity - 1 });
          }
        } else {
          acc.push(i); // Manter outros itens inalterados
        }
        return acc;
      }, [])
    );
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center py-8">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-7xl p-6"> {/* Painel centralizado */}
        <Header />

        {/* Espaço entre Header e Barra de Pesquisa */}
        <div className="mt-8" />

        <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-8">
          {/* Coluna da Esquerda - Categoria e Barra de Pesquisa */}
          <div className="flex-1">
            <SearchBar itemsData={itemsData} onAddItem={handleAddItem} />

            {/* Categorias */}
            {activeCategory === null && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {itemsData.map((group, idx) => (
                  <CategoryCard
                    key={idx}
                    group={group}
                    onExpand={() => setActiveCategory(group)} // Expandir apenas uma categoria
                  />
                ))}
              </div>
            )}

            {/* Categoria Ativa */}
            {activeCategory && (
              <div className="overflow-y-auto"> {/* Evita a rotação do layout */}
                <button
                  onClick={() => setActiveCategory(null)} // Voltar para a visão geral
                  className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
                >
                  Back to Categories
                </button>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {activeCategory.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="border rounded-lg p-4 shadow-md flex flex-col items-center"
                    >
                      <h3 className="text-lg font-semibold text-center mb-2">{item.name}</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        ${item.price.toFixed(2)}
                      </p>
                      <button
                        onClick={() => handleAddItem(item)}
                        className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600"
                      >
                        Add Item
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Coluna da Direita - Carrinho */}
          <div className="w-full lg:w-1/3">
            <SelectedItems
              selectedItems={selectedItems}
              onAddItem={handleAddItem} 
              onRemoveItem={handleRemoveItem}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
