import React from "react"

class App extends React.Component{
    constructor(){
    super()
    this.state = {
        isLoggedin : true
    }
    this.onClickFunction = this.onClickFunction.bind(this)
    }
    onClickFunction(){
        this.setState(prevState =>{
            return{
                isLoggedin: !prevState.isLoggedin
            }
        })
    }
    render(){
        return(
            <div>
                {this.state.isLoggedin ? <p>Logged In</p> : <p>Loggd Out</p>}
                <button onClick={this.onClickFunction}>Click</button>
            </div>
        );
    }
}

export default App