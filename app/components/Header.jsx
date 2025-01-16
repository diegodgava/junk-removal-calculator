import React from "react";
import { FaRecycle } from "react-icons/fa"; // Importando o ícone de reciclagem

const Header = () => {
  return (
    <header className="p-4" style={{ backgroundColor: "#4CAF50" }}>
      <div className="container mx-auto flex items-center text-white">
        {/* Ícone de Reciclagem */}
        <FaRecycle className="text-3xl mr-4" />
        {/* Texto do Header */}
        <h1 className="text-2xl font-bold">
          Please select your items for removal
        </h1>
      </div>
    </header>
  );
};

export default Header;
