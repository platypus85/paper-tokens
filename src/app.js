class PaperTokensApp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            tokens:  [
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    name: "Aarakocra",
                    quantity: 5
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/7/7c/Albino_dwarf-5e.png",
                    size: SizeEnum.MEDIUM,
                    name: "Albino Dwarf",
                    quantity: 6
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/30/738/1000/1000/636395097043050587.png",
                    size: SizeEnum.MEDIUM,
                    name: "Aldani",
                    quantity: 5
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/30/740/1000/1000/636395097245241750.png",
                    size: SizeEnum.SMALL,
                    name: "Almiraj",
                    quantity: 5
                },
                {
                    url: "https://78.media.tumblr.com/95bdc5ee72b8eca66d8ca332cc4cb084/tumblr_inline_p84b0sigqf1r0zz7o_500.jpg",
                    size: SizeEnum.MEDIUM,
                    name: "Ape",
                    quantity: 5
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/30/743/1000/1000/636395097479889039.png",
                    size: SizeEnum.MEDIUM,
                    name: "Artus Cimber",
                    quantity: 1
                },
                {
                    url: "https://vignette.wikia.nocookie.net/pathfinderenchanter/images/c/c0/114.jpg",
                    size: SizeEnum.LARGE,
                    name: "Assassin Vine",
                    quantity: 3
                },
                {
                    url: "http://images.fineartamerica.com/images-medium-large/artwork-of-an-extinct-terror-bird-that-john-sibbick.jpg",
                    size: SizeEnum.LARGE,
                    name: "Axe Beak",
                    quantity: 6
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
