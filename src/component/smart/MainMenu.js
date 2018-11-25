import React from "react";
import ModalGeneric from "./ModalGeneric";

class MainMenu extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            loadModal:"",
            openModal:false
        }
    }

    componentDidUpdate(){
        console.log(this.state);
    }
    onMenuClick = (e) => {
        const currentMenuClassName = e.currentTarget.children[0].className;
        if(currentMenuClassName === "oi oi-account-login"){ 
            this.setState({
                loadModal:"login",
                openModal:true
            })
        }

        if(currentMenuClassName === "oi oi-plus"){ 
            this.setState({
                loadModal:"create room",
                openModal:true
            })
        }

        if(currentMenuClassName === "oi oi-list-rich"){ 
            this.setState({
                loadModal:"list room",
                openModal:true
            })
        }
    }

    render(){
        return (
            
            // <span class="oi oi-person" title="person" aria-hidden="true"></span>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Lobby</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#"  onClick={this.onMenuClick}><span className="oi oi-account-login"></span> <span className="ml-2">Login</span></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#"  onClick={this.onMenuClick}><span className="oi oi-plus"></span> <span className="ml-2">Create Room</span></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#"  onClick={this.onMenuClick}><span className="oi oi-list-rich"></span> <span className="ml-2">Rooms</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div>
                <ModalGeneric isOpen={this.state.openModal} loadModal={this.state.loadModal} />
            </div>
            </div>
           
        )
    }

}

export default MainMenu;