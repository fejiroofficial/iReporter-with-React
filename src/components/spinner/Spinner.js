/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Classes from './Spinner.css';

export default (props) => {
  const { loading } = props;
  return loading ? (
    <div className={Classes.ldsRing}>
      <div>
      </div>
      <div>
      </div>
      <div>
      </div>
      <div>
      </div>
    </div>
  ) : null;
};
