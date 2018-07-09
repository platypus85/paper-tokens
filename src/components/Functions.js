import React from 'react';
import {SizeEnum} from '../constants/Enums';

const createTokensTents = (props) => {
  let tents = [];
  var tks = props
    .tokens
    .slice();
  tks.sort((a, b) => SizeEnum.properties[a.size].value - SizeEnum.properties[b.size].value).forEach((token, i) => {
    if (token.showTent) {
      tents.push(
        <div className="tent" key={token.id + i || token.url + "" + i}>
          <div className="side back">
            <div className="name">
              <p>{token.name}</p>
            </div>
            <div className="notes">
              <p>Notes:</p>
            </div>
          </div>
          <div className="side front">
            <div className="name">
              <p>{token.name}</p>
            </div>
            <div className="image">
              <img alt={token.name} src={token.url} className="creature"/>
            </div>
          </div>
        </div>
      )
    }
  })
  return tents;
}

export {createTokensTents};