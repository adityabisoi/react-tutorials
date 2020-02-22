import React from "react"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            statement: "Aditya"
        }
    }
    render(){
        return(
            <div>
                <h1>Hello World {this.state.statement}</h1>
            </div>
        );
    }
}

export default App