import React from "react";

const chatCanvas = (props) => {
    
    return (
        <div className="col-md-12">
            {
                props.chatTexts.map((ct, index) => (
                    <p key={index} className="m-3">{ct}</p>
                ))
            }
        </div>
    )
}

export default chatCanvas;