import React from 'react';
import {ShapeEnum, SizeEnum} from '../constants/Enums';

const createTokensList = (props) => {
  let pawnsList = [];
  var tks = props
    .tokens
    .slice();
  tks.sort((a, b) => SizeEnum.properties[a.size].value - SizeEnum.properties[b.size].value).forEach((token, i) => {
    const start = parseInt(token.startFrom, 10);
    const end = start + parseInt(token.quantity, 10);
    for (i = start; i < end; i++) {
      pawnsList.push(
        <div
          key={token.id + i || token.url + "" + i}
          className={"token " + SizeEnum.properties[token.size].name + " " + ShapeEnum.properties[props.shape].name}>
          <img alt={token.name} src={token.url}/> {token.enumeration && <div className="number">{i}</div>}
        </div>
      )
    }
  })
  return pawnsList
}

export {createTokensList};