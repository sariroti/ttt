import React from "react";

class CreateRoom extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            roomName:"",
            roomPassword:""
        }
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    render(){
        return (
            <div>
                <input type="text" id="roomName" value={this.state.roomName} onChange={this.onInputChange} />
                <input type="text" id="roomPassword" value={this.state.roomPassword} onChange={this.onInputChange} />
                <button>Create Room</button>
            </div>
        )
    }
}

export default CreateRoom;
