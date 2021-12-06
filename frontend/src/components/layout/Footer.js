import React, { Fragment } from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Fragment>
      <footer className="py-1">
        <p className="text-center mt-1">
          Universal Acting - {year}, All Rights Reserved
        </p>
      </footer>
    </Fragment>
  );
};

export default Footer;
