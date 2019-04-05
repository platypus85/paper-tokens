import React, {Component} from 'react';
import {ShapeEnum, SizeEnum} from '../constants/Enums';
import {AddToken} from './AddToken';
import {Table} from './Table';
import {Shape} from './Shape';
import {Tokens} from './Tokens';

export default class Home extends Component {

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
                <p>
                    <strong>Paper Tokens Generator</strong>
                    is a
                    <strong> free </strong>
                    tool to easily generate and print round or squared creature tokens to be used
                    with RPGs or Tabletop games. These tokens can be easily glued to any round or
                    squared supports like wooden circles, or even better, transparent dome circles
                    or self-adhesive felt pads! Below some examples you can find on Amazon:
                </p>

                <div className="container-fluid" id="links-instructions">
                    <div className="row">
                        <div className="col-md-6">
                            <table className="table table-striped" id="links-table">
                                <caption></caption>
                                <tbody>
                                    <tr>
                                        <td colSpan="1" id="t751012_row_0col_0">Felt Pads</td>
                                        <td colSpan="1" id="t751012_row_0col_1">Dome Stickers</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="1" id="t751012_row_1col_0">
                                            Amazon <span role="img">🇺🇸</span>
                                            <br/>
                                            <a href="https://amzn.to/2TiggNu" target="_blank" rel="noopener noreferrer">Link1</a>&nbsp;
                                            <a href="https://amzn.to/2WgCu4e" target="_blank" rel="noopener noreferrer">Link2</a>&nbsp;
                                            <a href="https://amzn.to/2WkTaaD" target="_blank" rel="noopener noreferrer">Link3</a>
                                            <br/>
                                            Amazon <span role="img">🇮🇹</span>
                                            <br/>
                                            <a href="https://amzn.to/2RaC7nY" target="_blank" rel="noopener noreferrer">Link1</a>&nbsp;
                                            <a href="https://amzn.to/2WgUyLp" target="_blank" rel="noopener noreferrer">Link2</a>
                                            <br/>
                                            Amazon <span role="img">🇦🇺</span>
                                            <br/>
                                            <a href="https://amzn.to/2CDhtaU" target="_blank" rel="noopener noreferrer">Link1</a>&nbsp;
                                            <a href="https://amzn.to/2CB6Wgc" target="_blank" rel="noopener noreferrer">Link2</a>&nbsp;
                                            <a href="https://amzn.to/2CIajCp" target="_blank" rel="noopener noreferrer">Link3</a>
                                            <br/>
                                        </td>
                                        <td colSpan="1" id="t751012_row_1col_1">
                                            Amazon <span role="img">🇺🇸</span>
                                            <br/>
                                            <a href="https://amzn.to/2S1VfZZ" target="_blank" rel="noopener noreferrer">Link1</a>&nbsp;
                                            <a href="https://amzn.to/2Dz1OLq" target="_blank" rel="noopener noreferrer">Link2</a>&nbsp;
                                            <a href="https://amzn.to/2WkUlqT" target="_blank" rel="noopener noreferrer">Link3</a>
                                            <br/>
                                            Amazon <span role="img">🇮🇹</span>
                                            <br/>
                                            <a href="https://amzn.to/2RNwgKD" target="_blank" rel="noopener noreferrer">Link1</a>&nbsp;
                                            <a href="https://amzn.to/2RISEVk" target="_blank" rel="noopener noreferrer">Link2</a>&nbsp;
                                            <a href="https://amzn.to/2WgPuXk" target="_blank" rel="noopener noreferrer">Link3</a>
                                            <br/>
                                            Amazon <span role="img">🇦🇺</span>
                                            <br/>
                                            <a href="https://amzn.to/2CEWpAM" target="_blank" rel="noopener noreferrer">Link1</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="col-md-6">
                            <div className="instructions">
                                <h3>How does it work? Paste, customise, print!</h3>
                                <ol>
                                    <li>
                                        <strong>Paste</strong>
                                        an image URL in the scroll and press
                                        <strong>Add Token</strong>
                                    </li>
                                    <li>
                                        ...or
                                        <strong>upload</strong>
                                        images directy from Dropbox
                                    </li>
                                    <li>
                                        <strong>Customise</strong>
                                        your token choosing the shape, size, quantity, etc.</li>
                                    <li>Press
                                        <strong>Print</strong>
                                        and save to PDF or send directly to the printer!</li>
                                </ol>
                                <p>
                                    <strong>...You can add as many creatures as you want!</strong>
                                </p>
                                <p>Don't forget to check the changelog at the bottom of the page, I consistently
                                    update and optimise the Paper Tokens Generator!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
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
                <Tokens shape={this.state.shape} tokens={this.state.tokens}/></div>
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
            id: Math.random(),
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
