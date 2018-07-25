import React from 'react';

const Header = props => {
  return (
    <div className="header__main">
      <h1>{props.title}</h1>
    </div>
  );
};

export default Header;
