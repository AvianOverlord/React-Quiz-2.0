import React, {Component} from "react";

class Question extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(value, e)
    {
        e.preventDefault();
        if(value === parseInt(this.props.correct))
        {
            this.props.getAnswer(true);
        }
        else
        {
            this.props.getAnswer(false);
        }
    }

    render()
    {
        return(
            <div className="Question">
                <div className="row">
                    <h3 className="questionText offset-1 col-10">{this.props.questionText}</h3>
                </div>
                <div className="row">
                    <div className="answerContainer container">
                            {this.props.answers.map((answer, index) => 
                                <button key={index} onClick={(e) => this.handleClick(index, e)} className="answer col-12 btn btn-light">{answer}</button>
                            )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Question;