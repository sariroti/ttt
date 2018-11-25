import React from "react";

class Login extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            userId:""
        }
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    onLogin = (e) => {
        e.preventDefault();


    }
    render(){
        return (
            <div>
                <input type="text" id="userId" value={this.state.userId} onChange={this.onInputChange} />
                <button onClick={this.onLogin}>Login</button>
            </div>
        )
    }
}

export default Login;
