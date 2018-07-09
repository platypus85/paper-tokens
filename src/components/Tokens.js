import React, {Component} from 'react';
import {DropboxLoadingStatusEnum} from '../constants/Enums';
import {SizeEnum, ShapeEnum} from '../constants/Enums';

class Tokens extends Component {

  constructor(props) {
    super(props)
    this.state = {
      status: DropboxLoadingStatusEnum.LOADING
    }
  }

  render() {
    return (
      <div>
        <div
          className={"loading" + this.state.status === DropboxLoadingStatusEnum.LOADING
          ? ""
          : "hidden"}>Loading&#8230;</div>
        <div className="printable" id="printed-tokens">
          {this.createTokensList(this.props)}
        </div>
      </div>
    )
  };

  createTokensList(props) {
    let tokenList = [];
    var tks = props
      .tokens
      .slice();
    tks.sort((a, b) => SizeEnum.properties[a.size].value - SizeEnum.properties[b.size].value).forEach((token, i) => {
      if (token.showToken) {
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
      }
    })
    return tokenList;
  }
};

export {Tokens};