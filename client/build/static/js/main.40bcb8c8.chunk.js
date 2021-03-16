(this["webpackJsonpwilliam-quizzes-client"]=this["webpackJsonpwilliam-quizzes-client"]||[]).push([[0],{19:function(e,t,n){e.exports=n(45)},24:function(e,t,n){},25:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),s=n.n(c),i=(n(24),n(25),n(3)),u=n.n(i),o=n(1),l=n(8),h=n(4),m=n(5),p=n(2),d=n(7),b=n(6),f=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"handleClick",value:function(e,t){t.preventDefault(),this.props.openQuiz(this.props.quizList[e])}},{key:"render",value:function(){var e=this;return r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"William's Quiz Site"),this.props.quizList.map((function(t,n){return r.a.createElement("button",{key:n,onClick:function(t){return e.handleClick(n,t)},className:"answer col-3 btn btn-light"},t.name)})))}},{key:"componentDidMount",value:function(){document.title="William's Quizzes"}}]),n}(r.a.Component),v=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={initals:""},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a}return Object(m.a)(n,[{key:"handleChange",value:function(e){this.setState({initals:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("Initals: "+this.state.initals),this.props.addScore(this.state.initals)}},{key:"render",value:function(){return r.a.createElement("div",{className:"endgameScreen"},r.a.createElement("h1",null,"You scored: ",r.a.createElement("span",{className:"finalScoreDisplay"},this.props.score)," points."),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{for:"initalInput"},"Please enter your name, to save your score:  "),r.a.createElement("input",{type:"text",value:this.state.initals,onChange:this.handleChange,name:"initalInput",id:"initalField"}),r.a.createElement("input",{type:"submit",value:"submit",className:"btn btn-danger initalButton"})))}}]),n}(r.a.Component),g=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).handleClick=a.handleClick.bind(Object(p.a)(a)),a}return Object(m.a)(n,[{key:"handleClick",value:function(e){e.preventDefault(),this.props.startQuiz()}},{key:"componentDidMount",value:function(){document.title=this.quizTitle}},{key:"render",value:function(){return r.a.createElement("div",{className:"titleScreen"},r.a.createElement("h1",{className:"title"},this.props.quiz.name),r.a.createElement("h2",{className:"title"},this.props.quiz.description),r.a.createElement("button",{onClick:this.handleClick,className:"startButton btn btn-danger"},"Start"))}}]),n}(r.a.Component),O=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).handleClick=a.handleClick.bind(Object(p.a)(a)),a}return Object(m.a)(n,[{key:"handleClick",value:function(e,t){t.preventDefault(),e===parseInt(this.props.correct)?this.props.getAnswer(!0):this.props.getAnswer(!1)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Question"},r.a.createElement("div",{className:"row"},r.a.createElement("h3",{className:"questionText offset-1 col-10"},this.props.questionText)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"answerContainer container"},this.props.answers.map((function(t,n){return r.a.createElement("button",{key:n,onClick:function(t){return e.handleClick(n,t)},className:"answer col-12 btn btn-light"},t)})))))}}]),n}(r.a.Component),j=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.props.decrementTimer()}},{key:"render",value:function(){return r.a.createElement("div",{className:"col-3 offset-6"},r.a.createElement("p",null,"Time Left: ",r.a.createElement("span",{className:"timerDisplay"},String(this.props.timerValue))))}}]),n}(r.a.Component),k=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={index:0,score:0,timer:200,currentQuestionText:"",currentAnswers:[],currentCorrect:""},a.getAnswer=a.getAnswer.bind(Object(p.a)(a)),a.decrementTimer=a.decrementTimer.bind(Object(p.a)(a)),a.setState=a.setState.bind(Object(p.a)(a)),a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.setQuestion()}},{key:"setQuestion",value:function(){this.state.index>=this.props.quiz.questions.length?this.props.endQuiz(this.state.score):this.setState(Object(o.a)(Object(o.a)({},this.state),{},{currentQuestionText:this.props.quiz.questions[this.state.index].question,currentAnswers:this.props.quiz.questions[this.state.index].answers,currentCorrect:this.props.quiz.questions[this.state.index].correct}))}},{key:"getAnswer",value:function(e){var t=this;this.setState(Object(o.a)(Object(o.a)({},this.state),{},{index:this.state.index+1}),(function(){console.log(t.state.index),e?(t.props.playAudio("success"),t.setState(Object(o.a)(Object(o.a)({},t.state),{},{score:t.state.score+10}),(function(){t.setQuestion()}))):(t.props.playAudio("failure"),t.setState(Object(o.a)(Object(o.a)({},t.state),{},{timer:t.state.timer-10}),(function(){t.setQuestion()})))}))}},{key:"decrementTimer",value:function(){var e=this;this.setState(Object(o.a)(Object(o.a)({},this.state),{},{timer:this.state.timer-1}),(function(){e.state.timer<=0&&e.props.endQuiz(e.score)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container quizScreen"},r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"col-3"},"Score: ",this.state.score,r.a.createElement("span",{className:"scoreDisplay"})),r.a.createElement(j,{timerValue:this.state.timer,decrementTimer:this.decrementTimer})),r.a.createElement("div",null,r.a.createElement(O,{questionText:this.state.currentQuestionText,answers:this.state.currentAnswers,correct:this.state.currentCorrect,getAnswer:this.getAnswer})))}}]),n}(r.a.Component),y=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={finalScoreList:[]},a.handleClick=a.handleClick.bind(Object(p.a)(a)),a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){console.log("Called Score Screen");var e=this.props.quiz.scores;console.log(e),(e=e.sort((function(e,t){return t.score-e.score}))).length>10&&(e=e.slice(0,10)),console.log(e),this.setState(Object(o.a)(Object(o.a)({},this.state),{},{finalScoreList:e}))}},{key:"handleClick",value:function(e,t){t.preventDefault(),e?this.props.showCredits():this.props.returnHome()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"scoreScreen"},r.a.createElement("h2",{className:"title"},"High scores:"),r.a.createElement("ol",{className:"highScoreList"},this.state.finalScoreList.map((function(e,t){return r.a.createElement("li",{key:t},e.name,": ",e.score)}))),r.a.createElement("button",{onClick:function(t){return e.handleClick(!1,t)},className:"btn btn-danger"},"Return to main menu"),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(t){return e.handleClick(!0,t)},className:"btn btn-danger"},"See credits"))}}]),n}(r.a.Component),S=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).handleClick=a.handleClick.bind(Object(p.a)(a)),a}return Object(m.a)(n,[{key:"handleClick",value:function(e){e.preventDefault(),this.props.returnHome()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"Credits:"),r.a.createElement("h2",null,"Coding and quizes by William Rave"),r.a.createElement("h3",null,"Additional styling by Afton Gauntlett"),r.a.createElement("h3",null,'Success sound "Bell, Counter, A.wav" by InspectorJ'),r.a.createElement("h3",null,"Failure sound from freesound.org"),r.a.createElement("button",{onClick:function(t){return e.handleClick(t)},className:"btn btn-danger"},"Return to main menu"))}}]),n}(r.a.Component),z=n(10),E=n.n(z),C={getAll:function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Started request"),e.abrupt("return",E.a.get("/api/quizlist").then((function(e){return console.log(e),e})).catch((function(e){console.log(e)})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getOne:function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",E.a.get("/api/quiz/",{params:{id:t}}).then((function(e){return e})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w={AddNewScore:function(){var e=Object(l.a)(u.a.mark((function e(t,n,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",E.a.post("/api/score/".concat(t._id,"-").concat(n,"-").concat(a)).then((function(e){return e})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),AddNewScoreTest:function(){var e=Object(l.a)(u.a.mark((function e(t,n,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Testing Score Request"),e.abrupt("return",E.a.post("/api/score/",{quizID:a,name:t,score:n}).then((function(e){return console.log("Score step 2"),console.log(e),e})).catch((function(e){console.log(e)})));case 2:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),GetScores:function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",E.a.get("/api/score").then((function(e){return e})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},Q={ResetTable:function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",E.a.delete("/api/reset/").then((function(e){return console.log(e),e})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},N=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this)).getQuizes=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.ResetTable();case 2:return t=e.sent,console.log("Displaying reset data:"),console.log(t),e.next=7,C.getAll();case 7:n=e.sent,console.log("Displaying Quizzes"),console.log(n),a.setState(Object(o.a)(Object(o.a)({},a.state),{},{quizList:n.data})),console.log("Displaying Quiz List:"),console.log(a.state.quizList);case 13:case"end":return e.stop()}}),e)}))),a.testScore=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.AddNewScoreTest("Virgina",60,a.state.quizList[0]._id);case 2:return e.sent,e.next=5,C.getAll();case 5:t=e.sent,console.log("Score Step 3"),console.log(t);case 8:case"end":return e.stop()}}),e)}))),a.addScore=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.AddNewScoreTest(t,a.state.currentScore,a.state.currentQuiz._id);case 2:return e.sent,e.next=5,C.getOne(a.state.currentQuiz._id);case 5:n=e.sent,console.log("Score Step 3"),console.log(n),a.setState(Object(o.a)(Object(o.a)({},a.state),{},{currentQuiz:n.data,currentPage:"Score"}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={quizList:[],currentQuiz:{},currentScore:"",currentPage:"Home",currentName:""},a.openQuiz=a.openQuiz.bind(Object(p.a)(a)),a.startQuiz=a.startQuiz.bind(Object(p.a)(a)),a.endQuiz=a.endQuiz.bind(Object(p.a)(a)),a.displayScores=a.displayScores.bind(Object(p.a)(a)),a.returnHome=a.returnHome.bind(Object(p.a)(a)),a.showCredits=a.showCredits.bind(Object(p.a)(a)),a.playAudio=a.playAudio.bind(Object(p.a)(a)),a.getQuizes(),a}return Object(m.a)(n,[{key:"openQuiz",value:function(e){this.setState(Object(o.a)(Object(o.a)({},this.state),{},{currentQuiz:e,currentPage:"Start"}))}},{key:"startQuiz",value:function(){this.setState(Object(o.a)(Object(o.a)({},this.state),{},{currentPage:"Quiz"}))}},{key:"endQuiz",value:function(e){this.setState(Object(o.a)(Object(o.a)({},this.state),{},{currentScore:e,currentPage:"End"}))}},{key:"displayScores",value:function(){this.setState(Object(o.a)(Object(o.a)({},this.state),{},{currentPage:"Score"}))}},{key:"returnHome",value:function(){this.setState({currentQuiz:{},currentScore:"",currentName:"",currentPage:"Home"})}},{key:"showCredits",value:function(){this.setState(Object(o.a)(Object(o.a)({},this.state),{},{currentPage:"Credits"}))}},{key:"playAudio",value:function(e){var t=document.getElementsByClassName("successSound")[0],n=document.getElementsByClassName("failureSound")[0];switch(e){case"success":t.play();break;case"failure":n.play()}}},{key:"render",value:function(){return r.a.createElement("div",{className:"manager"},r.a.createElement("h1",null,"Hello"),"Home"===this.state.currentPage&&r.a.createElement(f,{quizList:this.state.quizList,openQuiz:this.openQuiz}),"Start"===this.state.currentPage&&r.a.createElement(g,{quiz:this.state.currentQuiz,startQuiz:this.startQuiz}),"Quiz"===this.state.currentPage&&r.a.createElement(k,{quiz:this.state.currentQuiz,endQuiz:this.endQuiz,playAudio:this.playAudio}),"End"===this.state.currentPage&&r.a.createElement(v,{score:this.state.currentScore,addScore:this.addScore}),"Score"===this.state.currentPage&&r.a.createElement(y,{quiz:this.state.currentQuiz,newName:this.state.currentName,newScore:this.state.currentScore,returnHome:this.returnHome,showCredits:this.showCredits}),"Credits"===this.state.currentPage&&r.a.createElement(S,{returnHome:this.returnHome}))}}]),n}(a.Component);var q=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null))};s.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.40bcb8c8.chunk.js.map