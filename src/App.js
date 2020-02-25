import React from "react"

class App extends React.Component{
    constructor(){
    super()
    this.state = {
        firstName: "",
        lastName: ""
    }
    this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render(){
        return(
            <div>
                <form>
                    <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} />
                    <br/><br/>
                    <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} />
                    <p>{this.state.firstName} {this.state.lastName}</p>
                </form>
            </div>
        );
    }
}

export default App