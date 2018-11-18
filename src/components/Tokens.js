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
          {this.createTokensTents(this.props)}
          {this.createPawnsList(this.props)}
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

  createTokensTents(props) {
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

  createPawnsList(props) {
    let pawns = [];
    var pws = props
      .tokens
      .slice();
    pws.sort((a, b) => SizeEnum.properties[a.size].value - SizeEnum.properties[b.size].value).forEach((pawn, i) => {
      if (pawn.showPawn) {
        const start = parseInt(pawn.startFrom, 10);
        const end = start + parseInt(pawn.quantity, 10);
        for (i = start; i < end; i++) {
          pawns.push(
            <div
              className={"pawn-container " + SizeEnum.properties[pawn.size].name}
              key={pawn.id + i || pawn.url + "" + i}>
              <div className="back">
                <div className="base"></div>
                <div className="pawn-wrapper">
                {pawn.count && <div className="number">{i}</div>}
                  <div className="pawn">
                    <img alt={pawn.name} src={pawn.url} className="creature"/>
                  </div>
                </div>
              </div>
              <div className="front">
                <div className="pawn-wrapper">
                {pawn.count && <div className="number">{i}</div>}
                  <div className="pawn">
                    <img alt={pawn.name} src={pawn.url} className="creature"/>
                  </div>
                </div>
                <div className="base"></div>
              </div>
            </div>
          )
        }
      }
    })
    return pawns;
  }
};

export {Tokens};