import React from "react";


const chatText = (props) => {
    return (
        <div className="input-group fixed-bottom mb-1">
            <input className="form-control" onChange={(e) => props.onTextChange(e)}/>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id="btnChatText" onClick={props.onTextTyped}>Enter</button>
            </div>
        </div>
    )
}

export default chatText;