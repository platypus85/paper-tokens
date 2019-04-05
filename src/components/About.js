import React, {Component} from 'react';
export default class About extends Component {
    state = {}
    render() {
        return (
            <div>
            <h3>Hello!</h3>
                <p>My name is Alberto, I'm a software engineer based in Sydney passionate
                    about RPGs and especially D&D.</p>
                <p>I really love miniatures.</p>
                <p>I started painting 15 years ago Warhammer minis and in my spare time I paint
                    and do some commission works, but when I started DMing in 2018, because of the
                    quantity of creatures the party meets in a D&D campaign, I realised minis are
                    really expensive and not too easy to transport. So in June 2018 I've built this
                    tool to create quickly tokens in bulk, ready to be printed and attached to
                    supports like felt pads (my favourite).
                </p>
                <p>Paper Tokens Generator is a free tool I've built in my spare time to make DMs and RPG lovers' lives easier!</p>
                Enjoy!
            </div>
        )
    }
}
