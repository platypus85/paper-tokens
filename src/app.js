class PaperTokensApp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            tokens:  [
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 8
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 3
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 5
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 4
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 3
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 1
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 10
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 7
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 8
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 8
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 3
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 5
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 4
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 3
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 1
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 10
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 7
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 8
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 8
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 3
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 5
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 4
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 3
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 1
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 10
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 7
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 8
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 8
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 3
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 5
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 4
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 3
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 1
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 10
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 7
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 8
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 8
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 3
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 5
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 4
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 3
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 1
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 10
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 7
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 8
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 8
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 3
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 5
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 4
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 3
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 1
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 10
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 7
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 8
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 8
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 3
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 5
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 4
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 3
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 1
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 10
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 7
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 8
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 8
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 3
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 5
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 4
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 3
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 1
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 10
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 7
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 8
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 8
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 3
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 5
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 4
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 3
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 1
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 10
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 7
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 8
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 8
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 3
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 5
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 4
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 3
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 1
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 10
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 7
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 8
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 8
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 3
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 5
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 4
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 3
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 1
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 10
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 7
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 8
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 8
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 3
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 5
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 4
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 3
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 1
                },
                {
                    url: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
                    size: SizeEnum.LARGE,
                    quantity: 10
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 2
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/442/1000/1000/636306375308939571.jpeg",
                    size: SizeEnum.MEDIUM,
                    quantity: 7
                },
                {
                    url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/264/422/1000/1000/636595807919465152.png",
                    size: SizeEnum.LARGE,
                    quantity: 8
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
    SMALL: 1,
    MEDIUM: 2,
    LARGE: 3,
    properties: {
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
                <Token 
                    key={i} 
                    token={token}
                />
            ))
            }
        </div>
    );
};

const Token = (props) =>{
    return (
        <div className={"token " + SizeEnum.properties[props.token.size].name}>
            <img src={props.token.url}/>
            <div className="number">{props.token.quantity}</div>
        </div>
    );
};

ReactDOM.render(<PaperTokensApp />, document.getElementById('app'));
