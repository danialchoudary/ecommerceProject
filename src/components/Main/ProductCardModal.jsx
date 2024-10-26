import React from 'react';

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full relative p-6 overflow-y-auto max-h-screen">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold">&times;</button>

        {/* Product Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start">
          <img src={product.thumbnail} alt={product.title} className="w-48 h-48 object-cover rounded-lg shadow-md sm:mr-6 mb-4 sm:mb-0" />
          <div>
            <h2 className="text-2xl font-semibold mb-1">{product.title}</h2>
            <p className="text-green-500 font-semibold mb-1">{product.discountPercentage}% Off</p>
            <p className="text-gray-700 mb-3">${product.price} <span className="line-through text-gray-500">${product.price / (1 - product.discountPercentage / 100).toFixed(2)}</span></p>
            <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" >Add to Cart</button>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Customer Reviews</h3>
          <div className="space-y-4">
            {product.reviews && product.reviews.length > 0 ? (
              product.reviews.map((review, index) => (
                <div key={index} className="border-b pb-3">
                  <div className="flex items-center mb-1">
                    <p className="font-semibold">{review.user}</p>
                    <span className="ml-2 text-yellow-500">{"★".repeat(review.rating)}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{review.comment}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No reviews yet. Be the first to review!</p>
            )}
          </div>
        </div>

        {/* Payment & Shipping Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Payment & Shipping</h3>
          <div className="space-y-3">
            <p className="text-gray-700 text-sm">We accept major credit cards, PayPal, and bank transfers. All payments are securely processed.</p>
            <div className="flex items-center space-x-3">
              <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="w-8" />
              <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="MasterCard" className="w-8" />
              <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="PayPal" className="w-8" />
            </div>
            <p className="text-gray-600 text-sm mt-4">Estimated delivery: <span className="font-semibold text-gray-800">3-5 business days</span></p>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Related Products</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {product.relatedProducts && product.relatedProducts.length > 0 ? (
              product.relatedProducts.map((relatedProduct, index) => (
                <div key={index} className="border p-3 rounded-lg hover:shadow-md">
                  <img src={relatedProduct.thumbnail} alt={relatedProduct.title} className="h-24 w-full object-cover mb-2 rounded" />
                  <h4 className="text-sm font-semibold">{relatedProduct.title}</h4>
                  <p className="text-gray-500 text-xs">${relatedProduct.price}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm col-span-2 sm:col-span-3">No related products available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

