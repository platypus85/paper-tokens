"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PaperTokensApp = function (_React$Component) {
    _inherits(PaperTokensApp, _React$Component);

    function PaperTokensApp(props) {
        _classCallCheck(this, PaperTokensApp);

        var _this = _possibleConstructorReturn(this, (PaperTokensApp.__proto__ || Object.getPrototypeOf(PaperTokensApp)).call(this, props));

        _this.state = {
            tokens: [{
                url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                size: "medium",
                quantity: 2
            }, {
                url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                size: "medium",
                quantity: 3
            }]
        };
        return _this;
    }

    _createClass(PaperTokensApp, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Tokens, {
                    tokens: this.state.tokens
                }),
                React.createElement(
                    "div",
                    { "class": "token medium" },
                    React.createElement("img", { src: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg" }),
                    React.createElement(
                        "div",
                        { "class": "number" },
                        "1"
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "token large" },
                    React.createElement("img", { src: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg/revision/latest?cb=20141109194926" }),
                    React.createElement(
                        "div",
                        { "class": "number" },
                        "8"
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "token medium" },
                    React.createElement("img", { src: "https://vignette.wikia.nocookie.net/forgottenrealms/images/8/83/Blink_dog.jpg/revision/latest?cb=20110628190833" }),
                    React.createElement(
                        "div",
                        { "class": "number" },
                        "4"
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "token medium" },
                    React.createElement("img", { src: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg" }),
                    React.createElement(
                        "div",
                        { "class": "number" },
                        "5"
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "token large" },
                    React.createElement("img", { src: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png" }),
                    React.createElement(
                        "div",
                        { "class": "number" },
                        "3"
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "token medium" },
                    React.createElement("img", { src: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/30/735/1000/1000/636395096814025531.png" }),
                    React.createElement(
                        "div",
                        { "class": "number" },
                        "7"
                    )
                )
            );
        }
    }]);

    return PaperTokensApp;
}(React.Component);

var Tokens = function Tokens(props) {
    return React.createElement(
        "div",
        null,
        props.tokens.length === 0 && React.createElement(
            "p",
            null,
            "Please, add a creature to get started!"
        ),
        props.tokens.map(function (token) {
            return React.createElement(Token, {
                key: token.url,
                token: token
            });
        })
    );
};

var Token = function Token(props) {
    return React.createElement(
        "div",
        { "class": "token " + props.token.size },
        React.createElement("img", { src: props.token.url }),
        React.createElement(
            "div",
            { "class": "number" },
            props.token.quantity
        )
    );
};

ReactDOM.render(React.createElement(PaperTokensApp, null), document.getElementById('app'));
