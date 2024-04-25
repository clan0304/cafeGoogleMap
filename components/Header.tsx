import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <h2>DisCover</h2>
      <ul className="flex items-center gap-2">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Header;
