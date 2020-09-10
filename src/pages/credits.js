import React, {Component} from "react";

class Credits extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e)
    {
        e.preventDefault();
        this.props.returnHome();
    }

    render()
    {
        return(
            <div>
                <h1>Credits:</h1>
                <h2>Coding and quizes by William Rave</h2>
                <h3>Additional styling by Afton Gauntlett</h3>
                <h3>Success sound "Bell, Counter, A.wav" by InspectorJ</h3>
                <h3>Failure sound from freesound.org</h3>

                <button onClick={(e) => this.handleClick(e)} className="btn btn-danger">Return to main menu</button>
            </div>
        )
    }
}

export default Credits;