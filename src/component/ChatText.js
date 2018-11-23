import React from "react";

const chatText = (props) => {
    return (
        <div className="input-group fixed-bottom mb-1">
            <input className="form-control" />
            <div className="input-group-append">
                <button class="btn btn-outline-secondary" type="button" id="btnChatText">Enter</button>
            </div>
        </div>
    )
}

export default chatText;