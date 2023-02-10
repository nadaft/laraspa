import React from 'react';
import { Helmet } from 'react-helmet-async';

const Head = ({ title = '', children }) => {
  return (
    <Helmet>
      <title>{title}</title>
      {children}
    </Helmet>
  );
};

export default Head;
