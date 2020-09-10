import React, {Component} from "react";

class QuizEnd extends React.Component{
    constructor(props){
        super(props);
        this.state= {initals: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {    
        this.setState({initals: event.target.value});  
    }

    handleSubmit(event) {
      event.preventDefault();
      console.log("Initals: "+ this.state.initals);
      this.props.addScore(this.state.initals);
    }

    render()
    {
        return(
            <div className="endgameScreen">
                <h1>You scored: <span className="finalScoreDisplay">{this.props.score}</span> points.</h1>
                <form onSubmit={this.handleSubmit}>
                    <label for="initalInput">Please enter your name, to save your score:  </label>
                    <input type="text" value={this.state.initals} onChange={this.handleChange} name="initalInput" id="initalField"/>
                    <input type="submit" value="submit" className="btn btn-danger initalButton"/>
                </form>
            </div>
        )
    };
};

export default QuizEnd;
