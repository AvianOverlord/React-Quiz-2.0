import React from "react";

class Home extends React.Component{
    handleClick(value, e) 
    {    
        e.preventDefault();
        this.props.openQuiz(this.props.quizList[value]);
    }

    render ()
    {
        return(
            <header className="App-header">
                <h1>William's Quiz Site</h1>
                {this.props.quizList.map((quiz, index) => 
                                <button key={index} onClick={(e) => this.handleClick(index, e)} className="answer col-3 btn btn-light">{quiz.name}
                                </button>
                            )}
        </header>
        )
    }

    componentDidMount()
    {
        document.title = "William's Quizzes"
    }
}

export default Home;