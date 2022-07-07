import React from 'react';
import dinoGif from "../public/img/gif/Social_dino-with-hat.gif"


const ErrorDisplay = (props) => {
    return (
        <div className="text-center">
            <img style={{ width: 500, height: 250 }} src={dinoGif} alt="dino" />
            <h3 style={{ color: "red" }}>{props.errorMessage}!</h3>
            <button className="btn btn-danger mb-3" onClick={() => window.location.reload(false)}>Click to reload!</button>
        </div>
    )
}

export default ErrorDisplay;