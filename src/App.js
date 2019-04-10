import React, {Component} from 'react';
import {ShapeEnum, SizeEnum} from './constants/Enums';
import {AddToken} from './components/AddToken';
import {Table} from './components/Table';
import {Shape} from './components/Shape';
import {Tokens} from './components/Tokens';
import domtoimage from 'dom-to-image';
class App extends Component {

  constructor(props) {
    super(props);
    this.removeToken = this
      .removeToken
      .bind(this);
    this.removeAllTokens = this
      .removeAllTokens
      .bind(this);
    this.updateAllPawnsVisibility = this
      .updateAllPawnsVisibility
      .bind(this);
    this.updateAllTokensVisibility = this
      .updateAllTokensVisibility
      .bind(this);
    this.updateAllTokenTentsVisibility = this
      .updateAllTokenTentsVisibility
      .bind(this);
    this.updateAllTokensCountVisibility = this
      .updateAllTokensCountVisibility
      .bind(this);
    this.updateSize = this
      .updateSize
      .bind(this);
    this.updateTokenQuantity = this
      .updateTokenQuantity
      .bind(this);
    this.updateTokenCountStart = this
      .updateTokenCountStart
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
    this.updateTokenCountVisibility = this
      .updateTokenCountVisibility
      .bind(this);
    this.updateTokenTentVisibility = this
      .updateTokenTentVisibility
      .bind(this);
    this.updateTokenVisibility = this
      .updateTokenVisibility
      .bind(this);
    this.updatePawnVisibility = this
      .updatePawnVisibility
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
          onDownloadToken={this.downloadToken}
          onRemoveAllTokens={this.removeAllTokens}
          onUpdateAllPawnsVisibility={this.updateAllPawnsVisibility}
          onUpdateAllTokensVisibility={this.updateAllTokensVisibility}
          onUpdateAllTokenTentsVisibility={this.updateAllTokenTentsVisibility}
          onUpdateAllTokensCountVisibility={this.updateAllTokensCountVisibility}
          onUpdateTokenSize={this.updateSize}
          onUpdateTokenQuantity={this.updateTokenQuantity}
          onUpdateTokenName={this.updateTokenName}
          onUpdateTokenCountStart={this.updateTokenCountStart}
          onUpdateTokenCount={this.updateTokenCountVisibility}
          onUpdateTokenTentVisibility={this.updateTokenTentVisibility}
          onUpdateTokenVisibility={this.updateTokenVisibility}
          onUpdatePawnVisibility={this.updatePawnVisibility}/>
        <Tokens shape={this.state.shape} tokens={this.state.tokens}/>
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

  downloadToken(node, name) {

    var clone = node.cloneNode(true);
    clone.setAttribute("style", "width: 4in; height: 4in; display: inline-block; position: absolute; visibility: hidden; zIndex: -1");
    console.log(clone.hasChildNodes())
    console.log(clone.childNodes)
    if (clone.hasChildNodes() && clone.childNodes.length > 2) {
      clone.removeChild(clone.childNodes[2])
    }
    document
      .body
      .appendChild(clone);

    domtoimage
      .toPng(clone)
      .then(function (dataUrl) {
        document
          .body
          .removeChild(clone)
        var link = document.createElement('a');
        link.download = name + '.png';
        link.href = dataUrl;
        link.click();
      })
      .catch(function(error){
        alert("Token unavailable, please use a different image.")
        document
          .body
          .removeChild(clone)
      });
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

  updateTokenCountStart(token, sf) {
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
      id: new Date().getTime(),
      url: tokenUrl,
      size: SizeEnum.MEDIUM,
      name: "Creature",
      count: true,
      startFrom: 1,
      quantity: 1,
      showTent: true,
      showToken: true,
      showPawn: true
    }

    this.setState((prevState) => {
      return {
        tokens: prevState
          .tokens
          .concat(token)
      }
    });
  }

  updateTokenCountVisibility(token, value) {
    let updatedTokensCountVisibility = this
      .state
      .tokens
      .slice();
    updatedTokensCountVisibility.forEach((t, index) => {
      if (t === token) {
        t.count = value;
      }
    });
    this.setState({token: updatedTokensCountVisibility})
  }

  updateAllTokensCountVisibility(value) {
    let updatedTokensCountVisibility = this
      .state
      .tokens
      .slice();
    updatedTokensCountVisibility.forEach((t, index) => {
      t.count = value;
    });
    this.setState({token: updatedTokensCountVisibility})
  }

  updateTokenTentVisibility(token, value) {
    let updatedTokensTents = this
      .state
      .tokens
      .slice();
    updatedTokensTents.forEach((t, index) => {
      if (t === token) {
        t.showTent = value;
      }
    });
    this.setState({token: updatedTokensTents})
  }

  updateAllTokenTentsVisibility(value) {
    let updatedTokensTents = this
      .state
      .tokens
      .slice();
    updatedTokensTents.forEach((t, index) => {
      t.showTent = value;
    });
    this.setState({token: updatedTokensTents})
  }

  updateTokenVisibility(token, value) {
    let updatedTokensVisibility = this
      .state
      .tokens
      .slice();
    updatedTokensVisibility.forEach((t, index) => {
      if (t === token) {
        t.showToken = value;
      }
    });
    this.setState({token: updatedTokensVisibility})
  }

  updateAllTokensVisibility(value) {
    let updatedTokensVisibility = this
      .state
      .tokens
      .slice();
    updatedTokensVisibility.forEach((t, index) => {
      t.showToken = value;
    });
    this.setState({token: updatedTokensVisibility})
  }

  updatePawnVisibility(token, value) {
    let updatedTokensPawnsVisibility = this
      .state
      .tokens
      .slice();
    updatedTokensPawnsVisibility.forEach((t, index) => {
      if (t === token) {
        t.showPawn = value;
      }
    });
    this.setState({token: updatedTokensPawnsVisibility})
  }

  updateAllPawnsVisibility(value) {
    let updatedTokensPawnsVisibility = this
      .state
      .tokens
      .slice();
    updatedTokensPawnsVisibility.forEach((t, index) => {
      t.showPawn = value;
    });
    this.setState({token: updatedTokensPawnsVisibility})
  }
}

export default App;
