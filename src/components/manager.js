import React, {Component} from "react";
import Home from "../pages/home";
import QuizEnd from "../pages/quizEnd";
import QuizStart from "../pages/quizStart";
import Quiz from "../pages/quiz";
import ScoreDisplay from "../pages/scoreDisplay";
import Credits from "../pages/credits";
import QuizService from "../services/quizService";
import ScoreService from "../services/scoreService";
import ResetService from "../services/resetService";
import Sounds from "../sounds";

class Manager extends Component{

    constructor(props){
        super(props)
        this.state = {quizList: [], currentQuiz: {}, currentScore: "", currentPage: "Home", currentName: ""};
        
        this.openQuiz = this.openQuiz.bind(this);
        this.startQuiz = this.startQuiz.bind(this);
        this.endQuiz = this.endQuiz.bind(this);
        this.displayScores = this.displayScores.bind(this);
        this.returnHome = this.returnHome.bind(this);
        this.showCredits = this.showCredits.bind(this);
        this.playAudio = this.playAudio.bind(this);
        this.getQuizes();
    }

    getQuizes = async() =>
    {
      const resetCheck = await ResetService.ResetTable();
      console.log("Displaying reset data:");
      console.log(resetCheck);
      const quizzes = await QuizService.getAll()
      console.log("Displaying Quizzes");
      console.log(quizzes)
      // the variables quizzes contains all the quiz data
      this.setState({
          ...this.state,
          quizList: quizzes.data
      })
      console.log("Displaying Quiz List:")
      console.log(this.state.quizList);
    }

    testScore = async() =>
    {
        const recievedScore = await ScoreService.AddNewScoreTest("Virgina", 60,this.state.quizList[0]._id);
        const quizCheck = await QuizService.getAll();
        console.log("Score Step 3");
        console.log(quizCheck);
    }

    addScore = async(newName) =>
    {
        const recievedScore = await ScoreService.AddNewScoreTest(newName, this.state.currentScore,this.state.currentQuiz._id);
        const newQuiz = await QuizService.getOne(this.state.currentQuiz._id);
        console.log("Score Step 3");
        console.log(newQuiz);
        this.setState({
            ...this.state,
            currentQuiz: newQuiz.data,
            currentPage: "Score"
        })
    }

    openQuiz(quiz)
    {
        this.setState({
            ...this.state,
            currentQuiz: quiz,
            currentPage: "Start"
        })
    }

    startQuiz()
    {
        this.setState({
            ...this.state,
            currentPage: "Quiz"
        })
    }

    endQuiz(inputScore)
    {
        this.setState({
            ...this.state,
            currentScore: inputScore,
            currentPage: "End"
        })
    }

    displayScores()
    {
        this.setState({
            ...this.state,
            currentPage: "Score"
        })
    }

    returnHome()
    {
        this.setState({
            currentQuiz: {},
            currentScore: "",
            currentName: "",
            currentPage: "Home"
        })
    }

    showCredits()
    {
        this.setState({
            ...this.state,
            currentPage: "Credits"
        })
    }

    playAudio(hash)
    {
        const audioS = document.getElementsByClassName("successSound")[0];
        const audioF = document.getElementsByClassName("failureSound")[0];
        switch(hash)
        {
            case "success":
                audioS.play();
                break;

            case "failure":
                audioF.play();
                break;

            default:
                break;
        }
    }

    render()
    {
        return(
            <div className="manager">
                {this.state.currentPage === "Home" && <Home quizList = {this.state.quizList} openQuiz= {this.openQuiz}/>}
                {this.state.currentPage === "Start" && <QuizStart quiz={this.state.currentQuiz} startQuiz={this.startQuiz}/>}
                {this.state.currentPage === "Quiz" && <Quiz quiz={this.state.currentQuiz} endQuiz={this.endQuiz} playAudio={this.playAudio}/>}
                {this.state.currentPage === "End" && <QuizEnd score={this.state.currentScore} addScore={this.addScore}/>}
                {this.state.currentPage === "Score" && <ScoreDisplay quiz={this.state.currentQuiz} newName={this.state.currentName} newScore={this.state.currentScore} returnHome={this.returnHome} showCredits={this.showCredits}/>}
                {this.state.currentPage === "Credits" && <Credits returnHome={this.returnHome}/>}
                <audio className="successSound">
                    <source src={Sounds.success} type="audio/ogg"></source>
                </audio>
                <audio className="failureSound">
                    <source src={Sounds.failure} type="audio/ogg"></source>
                </audio>
            </div>
        );
    }
}

export default Manager;