import React from 'react';
import {ShapeEnum, SizeEnum} from '../constants/Enums';

const createTokensList = (props) => {
  let tokenList = [];
  var tks = props
    .tokens
    .slice();
  tks.sort((a, b) => SizeEnum.properties[a.size].value - SizeEnum.properties[b.size].value).forEach((token, i) => {
    const start = parseInt(token.startFrom, 10);
    const end = start + parseInt(token.quantity, 10);
    for (i = start; i < end; i++) {
      tokenList.push(
        <div
          key={token.id + i || token.url + "" + i}
          className={"token " + SizeEnum.properties[token.size].name + " " + ShapeEnum.properties[props.shape].name}>
          <img alt={token.name} src={token.url}/> {token.count && <div className="number">{i}</div>}
        </div>
      )
    }
  })
  return tokenList;
}

const createTokensTents = (props) => {
  let tents = [];
  var tks = props
    .tokens
    .slice();
  tks.sort((a, b) => SizeEnum.properties[a.size].value - SizeEnum.properties[b.size].value).forEach((token, i) => {
    if (token.showTents) {
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

export {createTokensList, createTokensTents};