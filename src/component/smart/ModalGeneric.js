import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Login from "./Login";
import CreateRoom from "./CreateRoom";
import Rooms from "./Rooms";

class ModalGeneric extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false
          };

        this.toggle = this.toggle.bind(this);
        
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            modal:nextProps.isOpen
        })
    }

    toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }

    render(){
        let currentComponent;
        if(this.props.loadModal === "login"){
            currentComponent = <Login />
        }

        if(this.props.loadModal === "create room"){
            currentComponent = <CreateRoom />
        }

        if(this.props.loadModal === "list room"){
            currentComponent = <Rooms />
        }
        return (

            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                <ModalBody>
                    {
                        currentComponent
                    }
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default ModalGeneric;
