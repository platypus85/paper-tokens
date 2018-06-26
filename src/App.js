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
    this.updateShape = this
      .updateShape
      .bind(this);
      this.updateTokenEnumeration = this
      .updateTokenEnumeration
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
        <Shape shape={this.state.shape} onUpdateShape={this.updateShape}/>
        <Table
          shape={this.state.shape}
          tokens={this.state.tokens}
          onRemoveToken={this.removeToken}
          onRemoveAllTokens={this.removeAllTokens}
          onUpdateSize={this.updateSize}
          onUpdateTokenQuantity={this.updateTokenQuantity}
          onUpdateTokenName={this.updateTokenName}
          onUpdateTokenStartFrom={this.updateTokenStartFrom}
          onUpdateTokenEnumeration={this.updateTokenEnumeration}/>
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
    if (!tokenUrl || !ValidURL(tokenUrl)) {
      return 'Enter a valid URL';
    } else if (this.state.tokens.some(token => token.url === tokenUrl)) {
      return 'This token already exists';
    }

    const token = {
      url: tokenUrl,
      size: SizeEnum.MEDIUM,
      name: "New Token",
      enumeration: true,
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

  updateTokenEnumeration(token, value) {
    let updatedEnumerationTokens = this
      .state
      .tokens
      .slice();
      updatedEnumerationTokens.forEach((t, index) => {
      if (t === token) {
        t.enumeration = value;
      }
    });

    this.setState({token: updatedEnumerationTokens})
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
              <th>Show Enumeration</th>
              <th>Enumeration Start</th>
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
                    <div className={"token medium " + ShapeEnum.properties[props.shape].name}>
                      <img alt={token.name} src={token.url}/>
                      {token.enumeration && <div className="number">#</div>}
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
                        <option value="0">Tiny (½in x ½in)</option>
                        <option value="1">Small (1in x 1in)</option>
                        <option value="2">Medium (1in x 1in)</option>
                        <option value="3">Large (1.5in x 1.5in)</option>
                        <option value="4">Large (2in x 2in)</option>
                        <option value="5">Huge (3in x 3in)</option>
                        <option value="6">Gargantuan (4in x 4in)</option>
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
                  <td className="token-showEnumeration">
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                      <label
                        className={token.enumeration === false
                        ? "btn btn-primary active"
                        : "btn btn-primary"}>
                        <input
                          onClick={() => {
                            props.onUpdateTokenEnumeration(token,false)
                        }}
                          type="checkbox"/>
                        <i className="far fa-eye-slash"></i>
                      </label>
                      <label
                        className={token.enumeration === true
                        ? "btn btn-primary active"
                        : "btn btn-primary"}>
                        <input
                          onClick={() => {
                            props.onUpdateTokenEnumeration(token,true)
                        }}
                          type="checkbox"/>
                        <i className="far fa-eye"></i>
                      </label>
                    </div>
                  </td>
                  <td className="token-startFrom">
                    <input
                      className="form-control"
                      type="number"
                      disabled = {token.enumeration ? "" : "disabled"}
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
          <button
            type="button"
            className="btn btn-primary btn-lg"
            id="print-all"
            onClick={() => {
            window.print()
          }}>
            <i className="fas fa-print"></i>
            &nbsp;Print
          </button>
        </div>}
      </div>
    </div>
  )
}

const SizeEnum = {
  TINY: 0,
  SMALL: 1,
  MEDIUM: 2,
  LARGE1: 3,
  LARGE2: 4,
  HUGE: 5,
  GARGANTUAN: 6,
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
      name: "large1",
      value: 3,
      code: "L2"
    },
    4: {
      name: "large2",
      value: 4,
      code: "L1"
    },
    5: {
      name: "huge",
      value: 5,
      code: "H"
    },
    6: {
      name: "gargantuan",
      value: 6,
      code: "G"
    }
  }
};

const Shape = (props) => {
  return (
    <div id="shape-selector">
      <p>Select a shape for the tokens:</p>
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label
          className={props.shape === ShapeEnum.SQUARE
          ? "btn btn-primary active"
          : "btn btn-primary"}>
          <input
            onClick={() => {
            props.onUpdateShape(ShapeEnum.SQUARE)
          }}
            type="checkbox"/>
          <i className="far fa-square"></i>
        </label>
        <label
          className={props.shape === ShapeEnum.ROUND
          ? "btn btn-primary active"
          : "btn btn-primary"}>
          <input
            onClick={() => {
            props.onUpdateShape(ShapeEnum.ROUND)
          }}
            type="checkbox"/>
          <i className="far fa-circle"></i>
        </label>
      </div>
    </div>
  )
}

const ShapeEnum = {
  SQUARE: 0,
  ROUND: 1,
  properties: {
    0: {
      name: "square"
    },
    1: {
      name: "round"
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
    <div className="printable" id="printed-tokens">
      {createTokensList(props)}
    </div>
  );
};

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
          key={Math.random()}
          className={"token " + SizeEnum.properties[token.size].name + " " + ShapeEnum.properties[props.shape].name}>
          <img alt={token.name} src={token.url}/>
          {token.enumeration && <div className="number">{i}</div>}
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
      <div id="add-link-container">
        <p>Insert a link to a creature image to begin!</p>
        <form autoComplete="off" id="tokens-form" onSubmit={this.handleAddToken}>
          <input className="url-input" type="text" name="tokenUrl"/>
          <button className="btn btn-primary btn-lg">Add Token</button>
        </form>
        {this.state.error && <p className="error">{this.state.error}</p>}
      </div>
    );
  }
}

export default App;
