
In order to run the app, we need to install:
* **NodeJS**
* **Yarn**

To compile `js` files, we need also **Babel**.

### Install NodeJS
* Go to [NodeJS download section](https://nodejs.org/en/download/)
* Download the latest package
* Install

### Install globally Yarn
`npm install -g yarn`

To update globally `npm` run `npm i -g npm`. If having permissions issues, use `sudo npm i -g npm`

### Install Live Server
`yarn global add live-server`

To run Live Server run `live-server NAME_FOLDER_PROJECT`

### Install Babel
Use command `yarn global add babel-cli`

### Create package.json
Use command `yarn init` and define package.json fields.

### Add Babel dependencies
Use command `yarn add babel-preset-env babel-preset-react`

### Define `js` files to be compiled using Babel
Example `app.js`.   
Use the command `babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch` specifying correcly the paths of the file to be compiled and where to be compiled.

### To install node_modules
Use the command `yarn install`

## VS Code extensions
Use [Live Sass](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) to compile Sass files.