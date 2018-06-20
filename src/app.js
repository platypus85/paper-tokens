class PaperTokensApp extends React.Component {

    constructor(props){
        super(props);
        this.removeToken = this.removeToken.bind(this);
        this.state = {
            tokens:  [
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/488/1000/1000/636376304583147024.jpeg",
                    size: SizeEnum.LARGE,
                    name: "Plesiosaurus",
                    startFrom: 1,
                    quantity: 1
                }, 
                {
                    url: "https://orig00.deviantart.net/cc4b/f/2014/205/d/5/pzo1012dustscorpion_by_critical_dean-d7s2la0.jpg",
                    size: SizeEnum.LARGE,
                    name: "Giant Scorpion",
                    startFrom: 1,
                    quantity: 1
                },
                {
                    url: "https://i.redditmedia.com/KU0I7xPrR5InYa5q3UlxOweUofi66o4sQ7DAMS-PgCQ.jpg?w=320&s=7fadb6fa1d2b85b17aeb7d33c9c92890",
                    size: SizeEnum.LARGE,
                    name: "Crocodile",
                    startFrom: 1,
                    quantity: 2
                },
                {
                    url: "https://78.media.tumblr.com/95bdc5ee72b8eca66d8ca332cc4cb084/tumblr_inline_p84b0sigqf1r0zz7o_500.jpg",
                    size: SizeEnum.MEDIUM,
                    name: "Ape",
                    startFrom: 1,
                    quantity: 3
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/30/775/1000/1000/636395101744474687.png",
                    size: SizeEnum.MEDIUM,
                    name: "Yellow Musk Creeper",
                    startFrom: 1,
                    quantity: 1
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/30/773/1000/1000/636395101542518419.png",
                    size: SizeEnum.MEDIUM,
                    name: "Yellow Musk Zombie",
                    startFrom: 1,
                    quantity: 3
                },
                {
                    url: "http://www.dmsguild.com/images/8957/193701.jpg",
                    size: SizeEnum.MEDIUM,
                    name: "Guard",
                    startFrom: 1,
                    quantity: 2
                }
            ]
        }
    }

    render(){
        return (
            <div>
                <Table
                    tokens={this.state.tokens}
                    onRemoveToken={this.removeToken}/>
                <Tokens tokens={this.state.tokens}/>
            </div>
        );
    }

    removeToken(token){
        this.setState((prevState) => ({
          tokens: prevState
            .tokens
            .filter((p) => p !== token)
        }))
    }
    
}

const Table = (props) => {
    return(
        <div>
             <table id="tokens-table">
                <tbody>
                    {props.tokens.map((token, index) => (
                    <tr key={index}>
                        <td className="token-image" ><img alt={token.image} src={token.url}/></td>
                        <td className="token-name">
                            {token.name}
                        </td>
                        <td className="token-qty">
                            <input type="number" name="quantity" defaultValue={token.quantity} min="1"/>
                        </td>
                        <td>
                            <div className="token-size">
                                <select value={SizeEnum.properties[token.size].name}>
                                    <option value="tiny">Tiny</option>
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="large">Large</option>
                                    <option value="huge">Huge</option>
                                    <option value="gargantuan">Gargantuan</option>
                                </select>
                            </div>
                        </td>
                        <td className="token-startFrom">
                            <input type="number" name="startFrom" defaultValue={token.startFrom} min="1"/>
                        </td>
                        <td className="delete"><button onClick={() => props.onRemoveToken(token)}>Remove</button></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
  }

const SizeEnum = {
    TINY: 0,
    SMALL: 1,
    MEDIUM: 2,
    LARGE: 3,
    properties: {
      0: {name: "tiny", value: 0, code: "T"},
      1: {name: "small", value: 1, code: "S"},
      2: {name: "medium", value: 2, code: "M"},
      3: {name: "large", value: 3, code: "L"}
    }
  };

const Tokens = (props) => {
    return (
        <div>
            {props.tokens.length === 0 && <p>Please, add a creature to get started!</p>}
            {
                props.tokens
                .sort((a, b) => SizeEnum.properties[a.size].value - SizeEnum.properties[b.size].value)
                .map((token, i) => (
                createPawnsList(token,i)
            ))
            }
        </div>
    );
};



const createPawnsList = (token,i) => {
    let pawnsList = []
    const start = token.startFrom;
    const end = start + token.quantity;
    for (var i = start; i < end; i++) {
        pawnsList.push(
        <div key={token.name+i} className={"token " + SizeEnum.properties[token.size].name}>
            <img src={token.url}/>
            <div className="number">{i}</div>
        </div>    
      )
    }
    return pawnsList
}



ReactDOM.render(<PaperTokensApp />, document.getElementById('app'));
