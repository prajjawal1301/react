import React, { Component } from 'react';
import BellA from './BellA.jpg'
import BellB from './BellB.jpg'



class newcomp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Subscribe to My channel.',
            sub: 'Subscribe',
            imageurl: BellA
        }
    }

    btnPress = () => {
        this.setState({
            message: 'Hit the Bell icon and never miss an update from my channel',
            sub: 'Subscribed',


        })
    }

    changeimg = () => {
        this.setState({
            message: "Thank You.Now You will never miss any updates from our channel.",
            imageurl: BellB
        })
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.message}
                </div>
                <button onClick={this.btnPress}>
                    {this.state.sub}
                </button>
                <img onClick={this.changeimg} style={{ width: '50px', height: "50px" }} src={this.state.imageurl} alt=""></img>

            </div>

        );
    }
}

export default newcomp;