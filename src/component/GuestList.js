import React from "react";

const guestList = (props) => {
    return (
        <div className="col-md-2 offset-md-10 fixed-top">
            {
                props.guests.map((g) => (
                    <div key={g} className="m-3">{g}</div>
                ))
            }
        </div>
    )
}

export default guestList;