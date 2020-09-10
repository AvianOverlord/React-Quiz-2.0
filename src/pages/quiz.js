import React, {Component} from "react";
import Question from "../components/question";
import Timer from "../components/timer";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";


class Quiz extends React.Component{
    constructor(props){
        super(props);
        this.state = {index: 0, score: 0, timer: 200, currentQuestionText: "", currentAnswers: [], currentCorrect: ""};
        this.getAnswer = this.getAnswer.bind(this);
        this.decrementTimer = this.decrementTimer.bind(this);
        this.setState = this.setState.bind(this);
    }

    componentDidMount()
    {
        this.setQuestion();
    }

    setQuestion()
    {
        if(this.state.index >= this.props.quiz.questions.length)
        {
            this.props.endQuiz(this.state.score);
        }
        else
        {
            this.setState({
                ...this.state,
                currentQuestionText: this.props.quiz.questions[this.state.index].question,
                currentAnswers: this.props.quiz.questions[this.state.index].answers,
                currentCorrect: this.props.quiz.questions[this.state.index].correct
            })
        }
    }

    getAnswer(correct)
    {
        this.setState({...this.state,index: this.state.index+1}, ()=>{
            console.log(this.state.index);
            if(correct)
            {   
                this.props.playAudio("success");
                this.setState({
                    ...this.state,
                    score: this.state.score+10
                }, ()=> {
                    this.setQuestion();
                })
            }
            else
            {
                this.props.playAudio("failure");
                this.setState({
                    ...this.state,
                    timer: this.state.timer-10
                }, ()=>{
                    this.setQuestion();
                })
            }
        })
    }

    decrementTimer()
    {
        this.setState({
            ...this.state,
            timer: this.state.timer-1
        }, ()=> {
            if(this.state.timer <= 0)
            {
                this.props.endQuiz(this.score);
            }
        });
    }

    render()
    {
        return(
            <div className="container quizScreen">
                <div className="row">
                    <p className="col-3">Score: {this.state.score}<span className="scoreDisplay"></span></p>
                    <Timer timerValue= {this.state.timer} decrementTimer= {this.decrementTimer}/>
                </div>
                <div>
                    <Question questionText={this.state.currentQuestionText}
                     answers={this.state.currentAnswers} 
                     correct={this.state.currentCorrect}
                     getAnswer = {this.getAnswer}
                     />
                </div>
            </div>
        );
    }
}

export default Quiz;