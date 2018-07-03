import React from 'react';
import {createTokensTents} from '../components/Functions';

const Tents = (props) => {
  return (
    <div className="printable" id="printed-tokens-tents">
      {createTokensTents(props)}
    </div>
  );
};

export {Tents};