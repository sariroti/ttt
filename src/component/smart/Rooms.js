import React from "react";

class Rooms extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userId:""
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
                {
                    this.props.RoomList.map((room) => {
                        <p>{room.name}</p>
                    })
                }
            </div>
        )
    }
}

export default Rooms;
