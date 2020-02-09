import React, { Fragment } from 'react';

import spinner from './spinner.gif'; // we can load images like this because of how webpack is setup

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt='Loading.....'
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
    </Fragment>
  );
};

export default Spinner;
