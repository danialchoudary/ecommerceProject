import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faList, faUser, faCartShopping ,faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Cart from './Cart/Cart';
import SignInSignUpModal from './SignInSignUp/SignInSignUp';
import { setSearchTerm } from '../store/productsReducer'; 

function Nav2() {
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.cartCount);
  const [cartOpen, setCartOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // New state for dropdown
  const [searchTerm, setSearchTermLocal] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleCartClick = () => {
    setCartOpen(!cartOpen);
  };

  const handleSearch = () => {
    dispatch(setSearchTerm(searchTerm)); 
    dispatch(selectCategory(null)); // Clear selected category
  };
  
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  // Toggle dropdown for the menu icon
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };



 
    // State to manage the visibility of additional list items
    const [showExtraItems, setShowExtraItems] = useState(false);
  
    // Function to toggle the extra list items
    const toggleItems = () => {
      setShowExtraItems(!showExtraItems);
    };

  return (
    <>
      <div className='h-16 text-blue-400 flex justify-between items-center px-4 md:px-8 lg:px-12'>
      <div className='relative'>
      {/* Menu Button */}
      <div
        className='text-xl cursor-pointer hover:text-blue-600 p-3 menu-button'
        onClick={toggleDropdown}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>

      {/* Dropdown menu */}
      {dropdownOpen && (
        <div className='absolute top-full mt-2 left-0 bg-white shadow-lg rounded-lg z-10 w-48 text-slate-500 dropdown-menu'>
          <ul className='py-2'>
            <li className='px-4 py-2 hover:bg-blue-100 cursor-pointer flex justify-between items-center'>Home
            <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
            </li>
            <li className='px-4 py-2 hover:bg-blue-100 cursor-pointer flex justify-between items-center'>Shop by Category
            <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
            </li>
            <li className='px-4 py-2 hover:bg-blue-100 cursor-pointer flex justify-between items-center'>Deals 
            <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
            </li>
            <li className='px-4 py-2 hover:bg-blue-100 cursor-pointer flex justify-between items-center'>Customer Service
            <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
            </li>
            <li className='px-4 py-2 hover:bg-blue-100 cursor-pointer flex justify-between items-center'>About Us
            <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
            </li>
            <li className='px-4 py-2 hover:bg-blue-100 cursor-pointer flex justify-between items-center'>Contact 
            <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
            </li>

            <li
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer flex justify-between items-center"
              onClick={toggleItems}
            >
              Settings
              <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
            </li>

            {/* Conditionally render Favourite and Saved below Settings */}
            {showExtraItems && (
              <ul className='absolute left-full bg-white shadow-lg rounded-lg z-10 w-48 text-slate-500'>
                <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">Favourite</li>
                <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">Saved</li>
              </ul>
            )}
          </ul>
        </div>
      )}
    </div>

        <div className='hidden sm:block text-xl font-bold'>
          MegaMart
        </div>

        <div className='flex-1 mx-4 '>
          <div className='relative flex items-center bg-blue-100 rounded-lg shadow-sm'>
            <input
              type='text'
              placeholder='Search essential groceries and more...'
              className='w-full bg-transparent rounded-lg focus:outline-none p-3 text-gray-600'
              value={searchTerm}
              onChange={(e) => setSearchTermLocal(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className='text-blue-400 mr-3 cursor-pointer hover:text-blue-600'
              onClick={handleSearch}
            />
            <FontAwesomeIcon
              icon={faList}
              className='text-blue-400 mr-3 cursor-pointer hover:text-blue-600'
            />
          </div>
        </div>

        <div className='flex items-center m-2 gap-2'>
          <div className='text-xl cursor-pointer hover:text-blue-600' onClick={handleModalOpen}>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className='hidden sm:block text-lg font-medium hover:underline cursor-pointer' onClick={handleModalOpen}>
            Signup/Signin
          </div>
        </div>

        <div className='relative flex items-center gap-2 cursor-pointer' onClick={handleCartClick}>
          <div className='text-xl hover:text-blue-600'>
            <FontAwesomeIcon icon={faCartShopping} />
            {cartCount > 0 && (
              <span className='absolute -top-2 -right-2 bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs'>
                {cartCount}
              </span>
            )}
          </div>
          <div className='hidden sm:block text-lg font-medium hover:underline'>
            Cart
          </div>
        </div>

        {cartOpen && <Cart />}
      </div>

      {/* Modal for Sign In/Sign Up */}
      <SignInSignUpModal isOpen={modalOpen} onClose={handleModalClose} />
    </>
  );
}

export default Nav2;




