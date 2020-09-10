import React, {Component} from "react";

class Timer extends React.Component {
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
    }

    componentWillUnmount()
    {
        clearInterval(this.timerID);
    }

    tick()
    {
        this.props.decrementTimer();
    }

    render ()
    {
        return(
            <div className="col-3 offset-6">
                <p>Time Left: <span className="timerDisplay">{String(this.props.timerValue)}</span></p>
            </div>
        )
    }
}

export default Timer;