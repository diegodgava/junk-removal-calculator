import React from "react";
import { FaCouch, FaBed, FaTrash, FaTv, FaChair, FaInfoCircle } from "react-icons/fa"; // Exemplos de ícones do Font Awesome

const CategoryCard = ({ group, onExpand }) => {
  // Mapear ícones para categorias
  const categoryIcons = {
    Seating: <FaCouch className="text-4xl text-gray-600" />,
    Beds: <FaBed className="text-4xl text-gray-600" />,
    Miscellaneous: <FaTrash className="text-4xl text-gray-600" />,
    Appliances: <FaTv className="text-4xl text-gray-600" />,
    Furniture: <FaChair className="text-4xl text-gray-600" />,
  };

  // URL da imagem de informações (exemplo para Sofás)
  const infoImageUrl = {
    Seating: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_493/at%2Fart%2Fdesign%2F2020-09%2Fsofa-buying-guide%2Fsofa-guide-types", // Exemplo de URL de imagem
    Beds: "https://www.thespruce.com/thmb/4qgEvQChMh3WFbaXUDjiwkt4D2s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/platform-bed-vs-box-spring-5216570-5acea4bcf8f641d8a0c4e1a44e5ad321.png",
    // Adicionar outras categorias e URLs conforme necessário
  };

  return (
    <div
      onClick={onExpand}
      className="border rounded-lg p-4 shadow-md cursor-pointer flex flex-col items-center justify-center space-y-4 hover:shadow-lg transition-shadow"
    >
      {/* Ícone da Categoria */}
      {categoryIcons[group.category] || (
        <div className="text-4xl text-gray-600">?</div> // Ícone genérico, caso a categoria não esteja mapeada
      )}
      {/* Nome da Categoria */}
      <span className="text-lg font-semibold">{group.category}</span>

      {/* Ícone de informações (link para a imagem externa) */}
      {infoImageUrl[group.category] && (
        <a
          href={infoImageUrl[group.category]}
          target="_blank"  // Garantir que o link seja aberto em nova guia
          rel="noopener noreferrer"  // Segurança recomendada ao usar target="_blank"
          className="text-blue-500 hover:text-blue-700 transition-colors"
        >
          <FaInfoCircle className="text-xl" />
        </a>
      )}
    </div>
  );
};
export default CategoryCard;
