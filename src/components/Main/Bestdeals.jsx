import React from 'react';

const Bestdeals = () => {
  return (

    <div className="container mx-auto px-4 py-8">
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2 className="text-3xl font-bold text-center mb-8">Grab the best deal on Smartphones</h2>
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="relative">
            <img src="" alt="Product" className="w-full h-48 object-cover rounded-lg" />
            <div className="absolute top-4 right-4 bg-red-500 text-white font-bold rounded-full px-2 py-1">56% OFF</div>
          </div>
          <h3 className="text-xl font-bold mt-4">Galaxy S22 Ultra</h3>
          <p className="text-gray-600 mt-2">₹32999 ₹74999</p>
          <p className="text-green-500 mt-2 font-bold">Save - ₹32999</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 h-full">
          <div className="relative">
            <img src="" alt="Product" className="w-full h-48 object-cover rounded-lg" />
            <div className="absolute top-4 right-4 bg-red-500 text-white font-bold rounded-full px-2 py-1">56% OFF</div>
          </div>
          <h3 className="text-xl font-bold mt-4">Galaxy M13 (4GB | 64 GB)</h3>
          <p className="text-gray-600 mt-2">₹10499 ₹14999</p>
          <p className="text-green-500 mt-2 font-bold">Save - ₹4500</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="relative">
            <img src="0FBn+kjzoCKeFvKiNPd/tn5Iqv0R/VDKffdlhbQT2fKtTzrKA7yScypmxdziKZ+TX2lHemqEClv5lrvaDmqmKOjWvpm97pWlzgN2QHYSu5odNNmiebrLja2/F2qOXpD6War6q9QEBAQEBAQEBAQEBAQEBBFNP9GHW2BphdhtMRxRk6jmDhrsNQCDwIyBJRjVTlCWNnAw2iCWOQa+g4tJ+advZUcSjXMSofCT+y/wAh/sRG7Hksbjsd5LvYhiVh12yHU0+S72IjdS655qeA/wAh/sQ3Y8l0yn9k9zvYowbtRfWiUk4bk4PaMIdhcQ5udAcqgiuuhqMtgIlnTLRP5PbVXwXdrQD3F1UZ8y7DyZW5wqyKRw3hg+0hzKzyW3h8hL5A+0hl6zkqvE6oJfJaPS5RlMD+Sq8Rrgl8lp9D0ylT+S28PkJfIH2kyZe/ksvH5CXyB9pMmXreSu8K/oZfIH2kRl0Tky5KpLNaG2q2UBZnHFkSXbHO3DghLsYUj1EiAgICAgICAgICAgICAg8KAEBAQEBAQEBAQEBRIUUBRAogUQKKR6pBAQEBAQEBAQEBAQEBAQEBAQeICAgICAgICAgICAgICAgICD1AQEBAQEH/2Q==" alt="Product" className="w-full h-48 object-cover rounded-lg" />
            <div className="absolute top-4 right-4 bg-red-500 text-white font-bold rounded-full px-2 py-1">56% OFF</div>
          </div>
          <h3 className="text-xl font-bold mt-4">Galaxy M33 (4GB | 64 GB)</h3>
          <p className="text-gray-600 mt-2">₹16999 ₹24999</p>
          <p className="text-green-500 mt-2 font-bold">Save - ₹8000</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="relative">
            <img src="data:image/jpeg;base64,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" alt="Product" className="w-full h-48 object-cover rounded-lg" />
            <div className="absolute top-4 right-4 bg-red-500 text-white font-bold rounded-full px-2 py-1">56% OFF</div>
          </div>
          <h3 className="text-xl font-bold mt-4">Galaxy M53 (4GB | 64 GB)</h3>
          <p className="text-gray-600 mt-2">₹31999 ₹40999</p>
          <p className="text-green-500 mt-2 font-bold">Save - ₹9000</p>
        </div>
      



       




      </div>
      <div className="text-center mt-8">
        <a href="#" className="text-blue-500 hover:underline">View All </a>
      </div>
      <br />
    </div>
  );
};

export default Bestdeals;
