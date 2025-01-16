import React, { useState, useEffect, useRef } from "react";

const SearchBar = ({ itemsData, onAddItem }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchBarRef = useRef(null); // Referência para o componente da barra de pesquisa

  // Extrair todos os itens de todas as categorias
  const allItems = itemsData.flatMap((group) => group.items);

  // Filtrar os itens com base na consulta
  const filteredItems = allItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Fechar o dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative mb-6" ref={searchBarRef}>
      {/* Input de Busca */}
      <input
        type="text"
        placeholder="Search for items..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setIsDropdownOpen(true)} // Abrir o dropdown ao focar no campo de busca
        className="w-full border rounded p-2"
      />

      {/* Dropdown com resultados */}
      {isDropdownOpen && (
        <div className="absolute top-full left-0 w-full border rounded bg-white shadow-lg max-h-60 overflow-y-auto mt-2 z-10">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  onAddItem(item); // Adicionar o item ao clicar nele
                  setIsDropdownOpen(false); // Fechar o dropdown
                  setSearchQuery(""); // Limpar o campo de busca
                }}
                className="p-2 hover:bg-gray-100 flex justify-between items-center cursor-pointer"
              >
                <span className="text-gray-700">{item.name}</span>
                <span className="text-sm text-gray-500">${item.price.toFixed(2)}</span>
              </div>
            ))
          ) : (
            <div className="p-2 text-gray-500 text-center">No items found.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
