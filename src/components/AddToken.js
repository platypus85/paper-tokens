import React, {Component} from 'react';

class AddToken extends Component {
  constructor(props) {
    super(props)
    this.handleAddToken = this
      .handleAddToken
      .bind(this);
    this.isValidImg = this
      .isValidImg
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

    var error = '';
    var self = this;

    this
      .isValidImg(tokenUrl)
      .then(function () {
        error = self
          .props
          .handleAddToken(tokenUrl);
      })
      .catch(function () {
        error = 'Please, enter a valid image URL'
      })
      .then(function (e) {
        self.setState(() => ({error}));
      })
    e.target.elements.tokenUrl.value = '';
  };

  isValidImg(url) {
    return new Promise(function (resolve, reject) {
      var image = new Image();
      image.onload = function () {
        resolve(image)
      };
      image.onerror = image.onabort = reject;
      image.src = url;
    });
  }

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

export {AddToken};