import React, { Component } from 'react'

class Counter extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    decrement() {
        this.setState()
    }


    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.increment()}>Increase</button>
            </div>
        )
    }
}

export default Counter