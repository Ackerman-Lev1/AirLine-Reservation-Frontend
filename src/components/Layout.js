import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <div><Header /></div>
      <div className="container mt-4" style={{paddingTop:"50px"}} >
        {children}
      </div>
    </div>
  );
};

export default Layout;
