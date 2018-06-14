class PaperTokensApp extends React.Component {
    render(){
        return (
            <div>
                <div class="token medium">
                    <img src="https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg"/>
                    <div class="number">1</div>
                </div>
                <div class="token large">
                    <img src="https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg/revision/latest?cb=20141109194926"/>
                    <div class="number">8</div>
                </div>
                <div class="token medium">
                    <img src="https://vignette.wikia.nocookie.net/forgottenrealms/images/8/83/Blink_dog.jpg/revision/latest?cb=20110628190833"/>
                    <div class="number">4</div>
                </div>
                <div class="token medium">
                    <img src="https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg"/>
                    <div class="number">5</div>
                </div>
                <div class="token large">
                    <img src="https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png"/>
                    <div class="number">3</div>
                </div>
                <div class="token medium">
                    <img src="https://media-waterdeep.cursecdn.com/avatars/thumbnails/30/735/1000/1000/636395096814025531.png"/>
                    <div class="number">7</div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<PaperTokensApp />, document.getElementById('app'));
