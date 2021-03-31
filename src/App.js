import logo from './logo.svg';
import Modal from 'react-modal';
import './App.css';
import Button from './component/button';
import Scorecard from './component/scorecard';
import { useEffect, useState } from 'react';

const api='https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple';

function App() {
  const [questions,setQuestions]=useState([]);
  const [score,setScore]=useState(0);
  const [count,setCount]=useState(0);
  const [disabled,setDisabled]=useState(false);
  const [bgcolor,setBgcolor]=useState("white");
  const [scorevalue,setScorevalue]=useState(0);
  const[modalIsopen,setModalIsOpen]=useState(false);
  const [gameEnd,setgameEnd]=useState(false);
  const[resonse,setResponse]=useState(false);
  // let bgcolor='';
  let prevState=true;

      useEffect(()=>
        {
        fetch(api)
        .then(res=>res.json())
        .then(data=>{
          setQuestions(data.results)});
        },[]);
        // function handelButton(answer)
        // {
        //   prevState=false;
        //   console.log(prevState);
        //   setResponse(true);
        //   console.log(count);
        //   console.log(score);
        //     if(questions.length>0 && questions[count].correct_answer===answer)
        //       {
        //         console.log(questions[count].correct_answer);
        //         setScore(score+1);
        //       }
        //     else{
        //       setScore(score);
        //       setBgcolor('red');
        //       console.log(bgcolor);
        //     }
        //     setDisabled(true);
        //     if(count<9) 
        //     {
        //       console.log(count);
        //       setCount(count+1)
        //     }
        //     else{
        //       setScorevalue(score);
        //       setgameEnd(true);
        //     }
        //     setDisabled(false);
        //   }
          console.log(score);
          console.log(scorevalue);
     let shuffleAns=[];
        if(questions.length!=0)
        {
          shuffleAns=[questions[count].correct_answer,...questions[count].incorrect_answers].sort(()=>(Math.random()-0.5))
        } 
          console.log(count);
          //  77
          console.log(bgcolor);
      return(gameEnd ?( <Scorecard scorevalue={score} count={count}/>) : ( 
                      questions.length > 0 ?(
                          <div className="container" style={{position:'relative'}}>
                            <div className="card" style={{position:'relative'}}>
                              <div>
                                <h3 className="h3">{count+1}.{questions[count].question}</h3>
                                </div>
                              <div>
                                <div style={{position:'relative',top: '23vh'}}>
                                  <Button answer={shuffleAns[0]} disabled={disabled} correct_answer={questions[count].correct_answer} setCount={setCount} setScore={setScore} setScorevalue={setScorevalue} score={score} setgameEnd={setgameEnd} count={count} setgameEnd={setgameEnd} setBgcolor={setBgcolor} bgcolor={setBgcolor }/>
                                  <Button answer={shuffleAns[1]} disabled={disabled} correct_answer={questions[count].correct_answer} setCount={setCount} setScore={setScore} setScorevalue={setScorevalue} score={score} setgameEnd={setgameEnd} count={count} setgameEnd={setgameEnd} setBgcolor={setBgcolor} bgcolor={setBgcolor }/>
                                  <Button answer={shuffleAns[2]} disabled={disabled} correct_answer={questions[count].correct_answer} setCount={setCount} setScore={setScore} setScorevalue={setScorevalue} score={score} setgameEnd={setgameEnd} count={count} setgameEnd={setgameEnd} setBgcolor={setBgcolor} bgcolor={setBgcolor }/>
                                  <Button answer={shuffleAns[3]} disabled={disabled} correct_answer={questions[count].correct_answer} setCount={setCount} setScore={setScore} setScorevalue={setScorevalue} score={score} setgameEnd={setgameEnd} count={count} setgameEnd={setgameEnd} setBgcolor={setBgcolor} bgcolor={setBgcolor }/>
                                </div>
                                {/* <div style={{display:'flex',justifyContent: 'center'}}>
                                <button style={{position:'absolute',top: '300px',backgroundColor:'orange',zIndex: '10'}} className="btn btn-primary buton2" onClick={()=>{
                                  if(count<9)
                                  {
                                  setCount(count+1);
                                  setBgcolor("white");
                                  console.log('debasreee');
                                  console.log(count);
                                  console.log(bgcolor);}}}>Press for next</button>
                                
                            </div> */}
                                </div>
                                </div>
                          </div>
        ) : (<h1 style={{color:'white',textAlign:'center',margin:'50px auto'}}> loading..</h1>))      
    );  
}
export default App;


