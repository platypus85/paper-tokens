import React, {Component} from 'react';

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
    this.state = {
      tokens: []
      /*tokens: [
        {
          url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/488/1000/1000/6363763" +
              "04583147024.jpeg",
          size: SizeEnum.LARGE,
          name: "Plesiosaurus",
          startFrom: 1,
          quantity: 1
        }, {
          url: "https://orig00.deviantart.net/cc4b/f/2014/205/d/5/pzo1012dustscorpion_by_critica" +
              "l_dean-d7s2la0.jpg",
          size: SizeEnum.LARGE,
          name: "Giant Scorpion",
          startFrom: 1,
          quantity: 1
        }, {
          url: "https://i.redditmedia.com/KU0I7xPrR5InYa5q3UlxOweUofi66o4sQ7DAMS-PgCQ.jpg?w=320&" +
              "s=7fadb6fa1d2b85b17aeb7d33c9c92890",
          size: SizeEnum.LARGE,
          name: "Crocodile",
          startFrom: 1,
          quantity: 2
        }, {
          url: "https://78.media.tumblr.com/95bdc5ee72b8eca66d8ca332cc4cb084/tumblr_inline_p84b0" +
              "sigqf1r0zz7o_500.jpg",
          size: SizeEnum.MEDIUM,
          name: "Ape",
          startFrom: 1,
          quantity: 3
        }, {
          url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/30/775/1000/1000/6363951" +
              "01744474687.png",
          size: SizeEnum.MEDIUM,
          name: "Yellow Musk Creeper",
          startFrom: 1,
          quantity: 1
        }, {
          url: "http://www.dmsguild.com/images/8957/193701.jpg",
          size: SizeEnum.MEDIUM,
          name: "Guard",
          startFrom: 1,
          quantity: 2
        }, {
          url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/30/773/1000/1000/636395101542518419.png",
          size: SizeEnum.MEDIUM,
          name: "Yellow Musk Zombie",
          startFrom: 1,
          quantity: 3
        }
      ]*/

    }
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('tokens');
      const tokens = JSON.parse(json);
      if (tokens) {
        this.setState(() => ({tokens}));
      }
    } catch (e) {
      //Do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const json = JSON.stringify(this.state.tokens);
    localStorage.setItem('tokens', json);
  }

  render() {
    return (
      <div>
        <AddToken handleAddToken={this.handleAddToken}/>
        <Table
          tokens={this.state.tokens}
          onRemoveToken={this.removeToken}
          onRemoveAllTokens={this.removeAllTokens}
          onUpdateSize={this.updateSize}
          onUpdateTokenQuantity={this.updateTokenQuantity}
          onUpdateTokenName={this.updateTokenName}
          onUpdateTokenStartFrom={this.updateTokenStartFrom}/>
        <Tokens tokens={this.state.tokens}/>
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
    if (!tokenUrl || !ValidURL(tokenUrl)) {
      return 'Enter a valid URL';
    } else if (this.state.tokens.some(token => token.url === tokenUrl)) {
      return 'This token already exists';
    }

    const token = {
      url: tokenUrl,
      size: SizeEnum.MEDIUM,
      name: "New Token",
      startFrom: 1,
      quantity: 1
    }

    this.setState((prevState) => {
      return {
        tokens: prevState
          .tokens
          .concat(token)
      }
    });
  }
}

const Table = (props) => {
  return (
    <div>
      <div
        className={props.tokens.length > 0
        ? "content-main"
        : "hidden"}>
        <table id="tokens-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Count Start</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tfoot></tfoot>
          <tbody>
            {props
              .tokens
              .map((token) => (
                <tr key={Math.random()}>
                  <td className="token-image">
                    <div className="token medium">
                      <img alt={token.name} src={token.url}/>
                    </div>
                  </td>
                  <td className="token-name">
                    <input
                      className="form-control"
                      type="text"
                      onChange={(event) => props.onUpdateTokenName(token, event.target.value)}
                      defaultValue={token.name}
                      name="name"/>
                  </td>
                  <td>
                    <div className="token-size">
                      <select
                        className="form-control"
                        value={SizeEnum.properties[token.size].value}
                        onChange={(event) => props.onUpdateSize(token, event.target.value)}>
                        <option value="0">Tiny</option>
                        <option value="1">Small</option>
                        <option value="2">Medium</option>
                        <option value="3">Large</option>
                        <option value="4">Huge</option>
                        <option value="5">Gargantuan</option>
                      </select>
                    </div>
                  </td>
                  <td className="token-qty">
                    <input
                      className="form-control"
                      type="number"
                      onChange={(event) => props.onUpdateTokenQuantity(token, event.target.value)}
                      name="quantity"
                      defaultValue={token.quantity}
                      min="1"/>
                  </td>
                  <td className="token-startFrom">
                    <input
                      className="form-control"
                      type="number"
                      onChange={(event) => props.onUpdateTokenStartFrom(token, event.target.value)}
                      name="startFrom"
                      defaultValue={token.startFrom}
                      min="1"/>
                  </td>
                  <td className="delete">
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => {
                      if (window.confirm('Are you sure you wish to remove ' + token.name + '?')) 
                        props.onRemoveToken(token)
                    }}>
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {props.tokens.length > 0 && <div id="table-actions-container">
          <button
            type="button"
            className="btn btn-outline-primary btn-lg"
            id="remove-all"
            onClick={() => {
            if (window.confirm('Are you sure you wish to remove all the tokens?')) 
              props.onRemoveAllTokens()
          }}>
            Remove All
          </button>
        </div>}
      </div>
      {props.tokens.length > 0 && <div id="print-container">
        <button
          type="button"
          className="btn btn-success btn-lg"
          id="print-all"
          onClick={() => {
          window.print()
        }}>
        <i className="fas fa-print"></i> Print
        </button>
      </div>}
    </div>
  )
}

const SizeEnum = {
  TINY: 0,
  SMALL: 1,
  MEDIUM: 2,
  LARGE: 3,
  HUGE: 4,
  GARGANTUAN: 5,
  properties: {
    0: {
      name: "tiny",
      value: 0,
      code: "T"
    },
    1: {
      name: "small",
      value: 1,
      code: "S"
    },
    2: {
      name: "medium",
      value: 2,
      code: "M"
    },
    3: {
      name: "large",
      value: 3,
      code: "L"
    },
    4: {
      name: "huge",
      value: 4,
      code: "H"
    },
    5: {
      name: "gargantuan",
      value: 5,
      code: "G"
    }
  }
};

const ValidURL = (url) => {
  const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(url)) {
    return true;
  } else {
    return false;
  }
}

const Tokens = (props) => {
  return (
    <div>
      {createTokensList(props.tokens)}
    </div>
  );
};

const createTokensList = (tokens) => {
  let pawnsList = [];
  var tks = tokens.slice();
  tks.sort((a, b) => SizeEnum.properties[a.size].value - SizeEnum.properties[b.size].value).forEach((token, i) => {
    const start = parseInt(token.startFrom, 10);
    const end = start + parseInt(token.quantity, 10);
    for (i = start; i < end; i++) {
      pawnsList.push(
        <div
          key={Math.random()}
          className={"token " + SizeEnum.properties[token.size].name}>
          <img alt={token.name} src={token.url}/>
          <div className="number">{i}</div>
        </div>
      )
    }
  })
  return pawnsList
}

class AddToken extends Component {
  constructor(props) {
    super(props)
    this.handleAddToken = this
      .handleAddToken
      .bind(this);
    this.state = {
      error: undefined
    }
  }

  handleAddToken(e) {
    e.preventDefault();

    const tokenUrl = e
      .target
      .elements
      .tokenUrl
      .value
      .trim();

    const error = this
      .props
      .handleAddToken(tokenUrl);
    this.setState(() => ({error}));
    e.target.elements.tokenUrl.value = '';
  };

  render() {
    return (
      <div>
      <p>Insert a link to a creature image!</p>
        <form autoComplete="off" id="tokens-form" onSubmit={this.handleAddToken}>
          <input className="url-input" type="text" name="tokenUrl"/>
          <button className="btn btn-outline-success">Add Token</button>
        </form>
        {this.state.error && <p className="error">{this.state.error}</p>}
      </div>
    );
  }
}

export default App;
