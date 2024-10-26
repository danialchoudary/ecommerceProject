import React from 'react';
import Nav1 from './Nav1';
import Nav2 from './Nav2';
import Nav3 from './Nav3';

function Header() {
  return (
    <div className=" fixed top-0 z-50 bg-white w-full ">
      <Nav1 />
      <Nav2 />
      <Nav3 />
    </div>
  );
}

export { Nav1, Nav2 };
export default Header;

