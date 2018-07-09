import React, {Component} from 'react';
import DropboxChooser from 'react-dropbox-chooser';

class AddToken extends Component {
  constructor(props) {
    super(props)
    this.handleAddToken = this
      .handleAddToken
      .bind(this);
    this.handleFiles = this
      .handleFiles
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
    console.log(e);
    console.log(tokenUrl);
    this.validateProcess(tokenUrl);
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

  validateProcess(url) {
    var error = '';
    var self = this;
    this
      .isValidImg(url)
      .then(function (urlu) {
        error = self
          .props
          .handleAddToken(url);
      })
      .catch(function () {
        error = 'Please, enter a valid image URL'
      })
      .then(function (e) {
        self.setState(() => ({error}));
      })
  }

  handleFiles(files) {
    files.map((file) => this.validateProcess(file.link.replace("?dl=0", "?raw=1")))
  }

  render() {
    return (
      <div id="add-token-container">
        <div id="add-link-container">
          <p>Insert a link to a creature image to begin!</p>
          <form autoComplete="off" id="tokens-form" onSubmit={this.handleAddToken}>
            <input className="url-input" type="text" name="tokenUrl"/>
            <button className="btn btn-primary btn-lg">Add Token</button>
          </form>
          {this.state.error && <p className="error">{this.state.error}</p>}
        </div>
        <DropboxChooser
          appKey={'ki5u4q9h7qgzlkr'}
          success={files => this.handleFiles(files)}
          multiselect={true}
          extensions={['.jpg', '.jpeg', '.png']}>
          <div className="dropbox-button">Upload images from Dropbox&nbsp;
            <i className="fab fa-dropbox"></i>
          </div>
        </DropboxChooser>
      </div>
    );
  }
}

export {AddToken};