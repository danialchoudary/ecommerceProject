import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBookmark } from '@fortawesome/free-solid-svg-icons';
import ProductModal from './ProductCardModal'; // Import the modal component

const ProductCard = ({ product, onAddToCart, onRemoveFromCart, onFavourite, onSave, isInCart }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // New state for modal

  const handleFavourite = (e) => {
    e.stopPropagation(); // Prevent card click
    setIsFavourite(!isFavourite);
    onFavourite(!isFavourite);
  };

  const handleSave = (e) => {
    e.stopPropagation(); // Prevent card click
    setIsSaved(!isSaved);
    onSave(!isSaved);
  };

  const handleCartToggle = (e) => {
    e.stopPropagation(); // Prevent card click
    if (isInCart) {
      onRemoveFromCart(product.id);
    } else {
      onAddToCart(product);
    }
  };

  const handleCardClick = () => {
    setIsModalOpen(true); // Open modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <>
      <div 
        className="relative max-w-xs rounded overflow-hidden shadow-lg bg-white flex flex-col cursor-pointer"
        onClick={handleCardClick} // Add click handler for card
      >
        <div className="absolute top-3 right-2">
          <FontAwesomeIcon 
            icon={faBookmark} 
            className={`text-2xl cursor-pointer ${isSaved ? 'text-blue-500' : 'text-gray-400'}`} 
            onClick={handleSave} 
          />
        </div>
        <div className="h-40 w-full flex items-center justify-center overflow-hidden">
          <img className="object-contain h-full w-3/4" src={product.thumbnail} alt={product.title} />
        </div>
        <div className="px-4 py-2 flex-grow">
          <div className="font-bold text-lg mb-1">{product.title}</div>
          <p className="text-gray-700 text-sm">${product.price}</p>
          {product.discountPercentage && <p className="text-green-500 text-sm">{product.discountPercentage}% off</p>}
        </div>
        <div className="px-4 pt-2 pb-2 mt-auto flex justify-between items-center">
          <button 
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ${isInCart ? 'bg-red-500 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-700'}`}
            onClick={handleCartToggle}
          >
            {isInCart ? 'Remove from Cart' : 'Add to Cart'}
          </button>
          <FontAwesomeIcon 
            icon={faHeart} 
            className={`text-2xl cursor-pointer ${isFavourite ? 'text-red-500' : 'text-gray-400'}`} 
            onClick={handleFavourite} 
          />
        </div>
      </div>
      {isModalOpen && <ProductModal product={product} onClose={handleCloseModal} />}


        
      
    </>
  );
};

export default ProductCard;


