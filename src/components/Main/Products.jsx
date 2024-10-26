import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../reducers/cartReducer';
import { setSearchTerm } from '../store/productsReducer';
import Toast from '../addMessage/Toast';
import ProductCard from './ProductCard';

const Products = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.products.selectedCategory);
  const searchTerm = useSelector((state) => state.products.searchTerm);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://dummyjson.com/products?limit=370');
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    dispatch(setSearchTerm('')); // Reset search term when products are fetched
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setToastMessage('Product added to cart!');
    setShowToast(true);
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
    setToastMessage('Item removed from your cart!');
    setShowToast(true);
  };

  const handleFavourite = (isFavourite) => {
    setToastMessage(isFavourite ? 'Marked as Favourite!' : 'Removed from Favourites!');
    setShowToast(true);
  };

  const handleSave = (isSaved) => {
    setToastMessage(isSaved ? 'Product Saved!' : 'Product Unsaved!');
    setShowToast(true);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm = product.title.toLowerCase().includes(searchTerm.toLowerCase());

    // If there's a search term, prioritize it over the category
    if (searchTerm) {
      return matchesSearchTerm;
    }

    // If no search term, filter by category
    const matchesCategory = !selectedCategory || product.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesCategory;
  });

  const isProductInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  return (
    <div className="container mx-auto p-4 pb-10 relative top-36">
      <h1 className="text-4xl mb-4 text-center font-bold font-serif underline">Grab Your Products</h1>
      <div className=""> 
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={handleAddToCart} 
                onRemoveFromCart={handleRemoveFromCart}
                onFavourite={handleFavourite} 
                onSave={handleSave} 
                isInCart={isProductInCart(product.id)}
              />
            ))}
          </div>
        )}
      </div>
      {showToast && <Toast message={toastMessage} onClose={() => setShowToast(false)} />}
    </div>
  );
};

export default Products;






