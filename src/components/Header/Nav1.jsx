import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
function Nav1() {
  return (
    <>
    <div className="h-11  text-gray-600 flex justify-around items-center  px-4 ">
  <div className=' font-mono font-extrabold'>
    Welcome to worldwide Mega!
  </div>

  <div className='flex gap-4 justify-around'>
    {/* Icons for Small Screens */}
    <div className='flex gap-10 items-center md:hidden'>
      <div className='text-blue-400 cursor-pointer hover:text-blue-600'>
        <FontAwesomeIcon icon={faLocationDot} />
      </div>
      <div className='text-blue-400 cursor-pointer hover:text-blue-600'>
        <FontAwesomeIcon icon={faTruckFast} />
      </div>
      <div className='text-blue-400 cursor-pointer hover:text-blue-600'>
        <FontAwesomeIcon icon={faPercent} />
      </div>
    </div>

    {/* Full Content for Medium and Large Screens */}
    <div className='hidden md:flex gap-12 items-center'>
      <div className='flex gap-2 items-center'>
        <div className='text-blue-400 cursor-pointer hover:text-blue-600'>
          <FontAwesomeIcon icon={faLocationDot} />
        </div>
        <div>
          Deliver to <span className='font-bold hover:underline hover:cursor-pointer'>423651</span>
        </div>
      </div>

      <div className='flex gap-2 items-center'>
        <div className='text-blue-400 cursor-pointer hover:text-blue-600'>
          <FontAwesomeIcon icon={faTruckFast} />
        </div>
        <div className='hover:underline hover:cursor-pointer'>
          Track your order
        </div>
      </div>

      <div className='flex gap-2 items-center'>
        <div className='text-blue-400 cursor-pointer hover:text-blue-600'>
          <FontAwesomeIcon icon={faPercent} />
        </div>
        <div className='hover:underline hover:cursor-pointer'>
          All offers
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  );
}

export default Nav1;
