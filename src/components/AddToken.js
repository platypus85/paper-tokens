import React, { Component } from "react";
import DropboxChooser from "react-dropbox-chooser";

class AddToken extends Component {
  constructor(props) {
    super(props);
    this.handleAddToken = this.handleAddToken.bind(this);
    this.handleFiles = this.handleFiles.bind(this);
    this.isValidImg = this.isValidImg.bind(this);
    this.state = {
      error: undefined,
    };
  }

  handleAddToken(e) {
    e.preventDefault();
    const tokenUrl = e.target.elements.tokenUrl.value.trim();
    console.log(e);
    console.log(tokenUrl);
    this.validateProcess(tokenUrl);
    e.target.elements.tokenUrl.value = "";
  }

  isValidImg(url) {
    return new Promise(function (resolve, reject) {
      var image = new Image();
      image.onload = function () {
        resolve(image);
      };
      image.onerror = image.onabort = reject;
      image.src = url;
    });
  }

  validateProcess(url) {
    var error = "";
    var self = this;
    this.isValidImg(url)
      .then(function (urlu) {
        error = self.props.handleAddToken(url);
      })
      .catch(function () {
        error = "Please, enter a valid image URL";
      })
      .then(function (e) {
        self.setState(() => ({ error }));
      });
  }

  handleFiles(files) {
    files.map((file) =>
      this.validateProcess(file.link.replace("?dl=0", "?raw=1"))
    );
  }

  render() {
    return (
      <div class="container-fluid" id="links-instructions">
        <div class="row">
          <div class="col-md-6">
            <div class="instructions">
              <h3>How does it work? Paste, customise, print!</h3>
              <ol>
                <li>
                  <strong>Paste</strong> an image URL in the scroll and press{" "}
                  <strong> Add Token</strong>
                </li>
                <li>
                  ...or <strong> upload</strong> images directly from Dropbox
                </li>
                <li>
                  <strong>Customise</strong> your token choosing the shape,
                  size, quantity, paper mini, etc.
                </li>
                <li>
                  Press
                  <strong> Print</strong> and save to PDF or send it directly to
                  the printer!
                </li>
              </ol>
              <p>
                <strong>...You can add as many creatures as you want!</strong>
              </p>
              <p>
                Don't forget to check the changelog at the bottom of the page, I
                constantly update and optimise the Paper Tokens Generator!
              </p>
            </div>
          </div>

          <div id="add-token-container" class="col-md-6">
            <div id="add-link-container">
              <p>Insert a link to a creature image to begin!</p>
              <form
                autoComplete="off"
                id="tokens-form"
                onSubmit={this.handleAddToken}
              >
                <input className="url-input" type="text" name="tokenUrl" />
                <button className="btn btn-primary btn-lg">Add Token</button>
              </form>
              {this.state.error && <p className="error">{this.state.error}</p>}
            </div>
            <DropboxChooser
              appKey={"ki5u4q9h7qgzlkr"}
              success={(files) => this.handleFiles(files)}
              multiselect={true}
              extensions={[".jpg", ".jpeg", ".png"]}
            >
              <div className="dropbox-button">
                Upload images from Dropbox&nbsp;
                <i className="fab fa-dropbox"></i>
              </div>
            </DropboxChooser>
          </div>
        </div>
      </div>
    );
  }
}

export { AddToken };
