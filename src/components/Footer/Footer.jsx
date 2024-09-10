import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white relative top-36">
      <div className="container mx-auto py-8 px-4 md:py-12 md:px-6 lg:py-16 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="footer-title">
              <h3 className="text-lg font-bold mb-4 text-black">Contact Us</h3>
            </div>
            <div className="footer-content">
              <ul className="list-none mb-4">
                <li className="mb-2">
                  <a href="#" className="flex items-center text-white hover:text-gray-300">
                    <i className="fa fa-whatsapp mr-2 text-green-400" style={{ fontSize: 18 }}></i>
                    WhatsApp
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="flex items-center text-white hover:text-gray-300">
                    <i className="fa fa-phone mr-2 text-green-400" style={{ fontSize: 18 }}></i>
                    Call Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="flex items-center text-white hover:text-gray-300">
                    <i className="fa fa-phone mr-2 text-green-400" style={{ fontSize: 18 }}></i>
                    +1 202-918-2132
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="footer-title">
              <h3 className="text-lg font-bold mb-4 text-black">Most Popular Categories</h3>
            </div>
            <div className="footer-content">
              <ul className="list-none mb-4">
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-gray-300">Staples</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-gray-300">Beverages</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-gray-300">Personal Care</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-gray-300">Home Care</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-gray-300">Baby Care</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-gray-300">Vegetables & Fruits</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-gray-300">Snacks & Foods</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-gray-300">Dairy & Bakery</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="footer-title">
              <h3 className="text-lg font-bold mb-4 text-black">Customer Services</h3>
            </div>
            <div className="footer-content">
              <ul className="list-none mb-4">
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-gray-300">About Us</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-gray-300">Terms & Conditions</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-gray-300">FAQ</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-gray-300">Privacy Policy</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-gray-300">E-waste Policy</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-gray-300">Cancellation & Return Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="footer-title">
              <h3 className="text-lg font-bold mb-4 text-black">Download App</h3>
            </div>
            <div className="footer-content">
              <div className="flex flex-wrap">
                <div className="w-1/2 p-2">
                  <a href="#" className="text-white hover:text-gray-300">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
                    <span className="block text-sm">GET IT ON</span>
                  </a>
                </div>
                <div className="w-1/2 p-2">
                  <a href="#" className="text-white hover:text-gray-300">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
                    <span className="block text-sm">GET IT ON</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-600 text-center py-4">
        <p>&copy; 2022 All rights reserved. Reliance Retail Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
