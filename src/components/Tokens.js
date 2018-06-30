import React from 'react';
import {createTokensList} from '../components/Functions';

const Tokens = (props) => {
  return (
    <div className="printable" id="printed-tokens">
      {createTokensList(props)}
    </div>
  );
};

export {Tokens};