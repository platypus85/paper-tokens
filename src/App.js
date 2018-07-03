import React, {Component} from 'react';
import {ShapeEnum, SizeEnum} from './constants/Enums';
import {AddToken} from './components/AddToken';
import {Table} from './components/Table';
import {Shape} from './components/Shape';
import {Tokens} from './components/Tokens';
import {Tents} from './components/Tents';

class App extends Component {

  constructor(props) {
    super(props);
    this.removeToken = this
      .removeToken
      .bind(this);
    this.removeAllTokens = this
      .removeAllTokens
      .bind(this);
    this.updateSize = this
      .updateSize
      .bind(this);
    this.updateTokenQuantity = this
      .updateTokenQuantity
      .bind(this);
    this.updateTokenStartFrom = this
      .updateTokenStartFrom
      .bind(this);
    this.handleAddToken = this
      .handleAddToken
      .bind(this);
    this.updateTokenName = this
      .updateTokenName
      .bind(this);
    this.updateShape = this
      .updateShape
      .bind(this);
    this.updateTokenEnumeration = this
      .updateTokenEnumeration
      .bind(this);
      this.updateTokenTents= this
      .updateTokenTents
      .bind(this);
    this.state = {
      tokens: [],
      shape: ShapeEnum.SQUARE
    }
  }

  componentDidMount() {
    try {
      const jsonTokens = localStorage.getItem('tokens');
      const tokens = JSON.parse(jsonTokens);
      if (tokens) {
        this.setState(() => ({tokens}));
      }
      const jsonShape = localStorage.getItem('shape');
      const shape = JSON.parse(jsonShape);
      if (shape) {
        this.setState(() => ({shape}));
      }
    } catch (e) {
      //Do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const jsonTokens = JSON.stringify(this.state.tokens);
    const jsonShape = JSON.stringify(this.state.shape);
    localStorage.setItem('tokens', jsonTokens);
    localStorage.setItem('shape', jsonShape);
  }

  render() {
    return (
      <div>
        <AddToken handleAddToken={this.handleAddToken}/>
        <Shape
          shape={this.state.shape}
          tokens={this.state.tokens}
          onUpdateShape={this.updateShape}/>
        <Table
          shape={this.state.shape}
          tokens={this.state.tokens}
          onRemoveToken={this.removeToken}
          onRemoveAllTokens={this.removeAllTokens}
          onUpdateTokenSize={this.updateSize}
          onUpdateTokenQuantity={this.updateTokenQuantity}
          onUpdateTokenName={this.updateTokenName}
          onUpdateTokenStartFrom={this.updateTokenStartFrom}
          onUpdateTokenCount={this.updateTokenEnumeration}
          onUpdateTokenTents={this.updateTokenTents}/>
        <Tokens shape={this.state.shape} tokens={this.state.tokens}/>
        <Tents tokens={this.state.tokens}/>
      </div>
    );
  }

  removeToken(token) {
    this.setState((prevState) => ({
      tokens: prevState
        .tokens
        .filter((p) => p !== token)
    }))
  }

  removeAllTokens() {
    this.setState((prevState) => ({tokens: []}))
  }

  updateSize(token, s) {
    let updatedSizeTokens = this
      .state
      .tokens
      .slice();
    updatedSizeTokens.forEach((t, index) => {
      if (t === token) {
        t.size = SizeEnum.properties[s].value;
      }
    });

    this.setState({token: updatedSizeTokens})
  }

  updateShape(s) {
    this.setState({shape: s})
  }

  updateTokenQuantity(token, q) {
    let updatedQtyTokens = this
      .state
      .tokens
      .slice();

    //If there is already a timeout in process cancel it
    if (this._timeout) {
      clearTimeout(this._timeout);
    }

    this._timeout = setTimeout(() => {
      this._timeout = null;
      updatedQtyTokens.forEach((t, index) => {
        if (t === token) {
          t.quantity = q;
        }
      });

      this.setState({tokens: updatedQtyTokens})
    }, 500);
  }

  updateTokenStartFrom(token, sf) {
    let updatedStartFrom = this
      .state
      .tokens
      .slice();

    //If there is already a timeout in process cancel it
    if (this._timeout) {
      clearTimeout(this._timeout);
    }

    this._timeout = setTimeout(() => {
      this._timeout = null;
      updatedStartFrom.forEach((t, index) => {
        if (t === token) {
          t.startFrom = sf;
        }
      });

      this.setState({tokens: updatedStartFrom})
    }, 1000);
  }

  updateTokenName(token, n) {

    let updatedNameTokens = this
      .state
      .tokens
      .slice();

    //If there is already a timeout in process cancel it
    if (this._timeout) {
      clearTimeout(this._timeout);
    }

    this._timeout = setTimeout(() => {
      this._timeout = null;
      updatedNameTokens.forEach((t, index) => {
        if (t === token) {
          t.name = n;
        }
      });

      this.setState({token: updatedNameTokens})
    }, 1000);
  }

  handleAddToken(tokenUrl) {
    if (this.state.tokens.some(token => token.url === tokenUrl)) {
      return 'This token already exists';
    }

    const token = {
      id: Math.random(),
      url: tokenUrl,
      size: SizeEnum.MEDIUM,
      name: "New Token",
      count: true,
      startFrom: 1,
      quantity: 1,
      showTents: true
    }

    this.setState((prevState) => {
      return {
        tokens: prevState
          .tokens
          .concat(token)
      }
    });
  }

  updateTokenEnumeration(token, value) {
    let updatedEnumerationTokens = this
      .state
      .tokens
      .slice();
    updatedEnumerationTokens.forEach((t, index) => {
      if (t === token) {
        t.count = value;
      }
    });

    this.setState({token: updatedEnumerationTokens})
  }

  updateTokenTents(token, value) {
    let updatedTokensTents = this
      .state
      .tokens
      .slice();
      updatedTokensTents.forEach((t, index) => {
      if (t === token) {
        t.showTents = value;
      }
    });
    this.setState({token: updatedTokensTents})
  }
}

export default App;
