import React from 'react';

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="footer__main">
      <p className="footer__text">
        &copy; {date} Phil Zona | <a className="footer__link" href="https://github.com/pbzona/jprdy">Check it out on Github</a>
      </p>
    </div>
  );
};

export default Footer;
