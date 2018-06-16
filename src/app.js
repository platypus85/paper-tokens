class PaperTokensApp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            tokens:  [
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    name: "Orc",
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    name: "Aarakocra",
                    quantity: 3
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/18/287/1000/1000/636379803928245506.jpeg",
                    size: SizeEnum.TINY,
                    name: "Homunculus",
                    quantity: 4
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/243/1000/1000/636252767318152303.jpeg",
                    size: SizeEnum.LARGE,
                    name: "Clay Golem",
                    quantity: 7
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    name: "Beholder",
                    quantity: 4
                }
            ]
        }
    }

    render(){
        return (
            <div>
                <Tokens 
                    tokens={this.state.tokens}
                />
            </div>
        );
    }
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

const Tokens = (props) =>{
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
    for (var i = 1; i <= token.quantity; i++) {
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
