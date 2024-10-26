import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory,setSearchTerm } from '../store/productsReducer';


const Nav3 = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.products.selectedCategory);

  const [isOpen, setIsOpen] = useState({
    
  });

  const handleToggle = (category) => {
    setIsOpen((prevOpen) => {
      return { [category]: !prevOpen[category] };
    });
    dispatch(selectCategory(category)); // Select category
    dispatch(setSearchTerm('')); // Clear search term
    console.log("Selected category:", category); // Debugging log
  };
  
  

  const categories = [
    {
      name: 'Groceries',
      items: [
        
      ],
    },
    {
      name: 'Womens-bags',
      items: [
       
      ],
    },
    {
      name: 'Kitchen-accessories',
      items: [
        
      ],
    },
    {
      name: 'Fragrances',
      items: [
       
      ],
    },
    {
      name: 'Laptops',
      items: [
       
      ],
    },
    {
      name: 'Beauty',
      items: [
       
      ],
    },
    {
      name: 'Vehicle',
      items: [
       
      ],
    },
    {
      name: 'Sports-accessories',
      items: [
       
      ],
    },
  ];
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.category-list')) { 
               setIsOpen((prevOpen) => Object.keys(prevOpen).reduce((acc, key) => ({...acc, [key]: false }), {}));
    }
  };

  document.addEventListener('click', handleClickOutside);

  return () => {
    document.removeEventListener('click', handleClickOutside);
  };
}, [setIsOpen]);

return (
  <div className="h-69px w-full flex justify-center items-center ">
    <div className="h-36px w-11/12 flex justify-evenly flex-wrap gap-y-2 gap-x-1 lg:gap-x-0">
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex gap-2 rounded-full p-3 sm:p-4 bg-sky-100 justify-center items-center hover:bg-blue-400 cursor-pointer hover:text-white active:bg-blue-400 active:text-white category-list text-xs sm:text-base"
          onClick={() => handleToggle(category.name.replace(/\s+/g, '').toLowerCase())}
        >
          <div>{category.name}</div>
          <div className="relative">
            <div
              className={`cursor-pointer hover:text-white ${isOpen[category.name.replace(/\s+/g, '').toLowerCase()]? 'text-white' : ''}`}
            >
             
            </div>
            
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export default Nav3;