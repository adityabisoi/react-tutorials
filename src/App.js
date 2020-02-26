import React from "react"

class App extends React.Component{
    constructor(){
    super()
    this.state = {
        firstName: "",
        lastName: "",
        isChecked:true,
        gender:"",
        favColor:""
    }
    this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const { name, value,type, checked} = event.target
        type === "checkbox" ? this.setState({[name]:checked}) : this.setState({[name]:value})
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange} />
                    <br/><br/>
                    <input type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange} />
                    <p>{this.state.firstName} {this.state.lastName}</p>
                    <textarea value={"Default value"}/>
                    <br/><br/>
                    <input type="checkbox" name="isChecked" checked={this.state.isChecked} onChange={this.handleChange}/>
                    <br/><br/>
                    <input type="radio" name="gender" value="male" checked={this.state.gender==='male'} onChange={this.handleChange}/>
                    <h3>Male</h3>
                    <br/>
                    <input type="radio" name="gender" value="female" checked={this.state.gender==='female'} onChange={this.handleChange}/>
                    <h3>Female</h3>
                    <p>{this.state.gender}</p>
                    <br/><br/>
                    <select value={this.state.favColor} onChange={this.handleChange} name="favColor">
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                    </select>
                    <p>{this.state.favColor}</p>
                </form>
            </div>
        );
    }
}

export default App