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
                url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/488/1000/1000/636376304583147024.jpeg",
                size: SizeEnum.LARGE,
                name: "Plesiosaurus",
                startFrom: 1,
                quantity: 1
            }, {
                url: "https://orig00.deviantart.net/cc4b/f/2014/205/d/5/pzo1012dustscorpion_by_critical_dean-d7s2la0.jpg",
                size: SizeEnum.LARGE,
                name: "Giant Scorpion",
                startFrom: 1,
                quantity: 1
            }, {
                url: "https://i.redditmedia.com/KU0I7xPrR5InYa5q3UlxOweUofi66o4sQ7DAMS-PgCQ.jpg?w=320&s=7fadb6fa1d2b85b17aeb7d33c9c92890",
                size: SizeEnum.LARGE,
                name: "Crocodile",
                startFrom: 1,
                quantity: 2
            }, {
                url: "https://78.media.tumblr.com/95bdc5ee72b8eca66d8ca332cc4cb084/tumblr_inline_p84b0sigqf1r0zz7o_500.jpg",
                size: SizeEnum.MEDIUM,
                name: "Ape",
                startFrom: 1,
                quantity: 3
            }, {
                url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/30/775/1000/1000/636395101744474687.png",
                size: SizeEnum.MEDIUM,
                name: "Yellow Musk Creeper",
                startFrom: 1,
                quantity: 1
            }, {
                url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/30/773/1000/1000/636395101542518419.png",
                size: SizeEnum.MEDIUM,
                name: "Yellow Musk Zombie",
                startFrom: 1,
                quantity: 3
            }, {
                url: "http://www.dmsguild.com/images/8957/193701.jpg",
                size: SizeEnum.MEDIUM,
                name: "Guard",
                startFrom: 1,
                quantity: 2
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
                })
            );
        }
    }]);

    return PaperTokensApp;
}(React.Component);

var SizeEnum = {
    TINY: 0,
    SMALL: 1,
    MEDIUM: 2,
    LARGE: 3,
    properties: {
        0: { name: "tiny", value: 0, code: "T" },
        1: { name: "small", value: 1, code: "S" },
        2: { name: "medium", value: 2, code: "M" },
        3: { name: "large", value: 3, code: "L" }
    }
};

var Tokens = function Tokens(props) {
    return React.createElement(
        "div",
        null,
        props.tokens.length === 0 && React.createElement(
            "p",
            null,
            "Please, add a creature to get started!"
        ),
        props.tokens.sort(function (a, b) {
            return SizeEnum.properties[a.size].value - SizeEnum.properties[b.size].value;
        }).map(function (token, i) {
            return createPawnsList(token, i);
        })
    );
};

var createPawnsList = function createPawnsList(token, i) {
    var pawnsList = [];
    var start = token.startFrom;
    var end = start + token.quantity;
    for (var i = start; i < end; i++) {
        pawnsList.push(React.createElement(
            "div",
            { key: token.name + i, className: "token " + SizeEnum.properties[token.size].name },
            React.createElement("img", { src: token.url }),
            React.createElement(
                "div",
                { className: "number" },
                i
            )
        ));
    }
    return pawnsList;
};

ReactDOM.render(React.createElement(PaperTokensApp, null), document.getElementById('app'));
