import React, { Component } from 'react'

class EventBind extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Hello'
        }
    }

    pressHandler = () => {
        this.setState({ message: 'Goodbye' })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.pressHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind