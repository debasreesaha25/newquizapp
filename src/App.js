import logo from './logo.svg';
import Modal from 'react-modal';
import './App.css';
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
let response=0;
// let bgcolor='';
  useEffect(()=>
    {
     fetch(api)
    .then(res=>res.json())
    .then(data=>{
      setQuestions(data.results)});
    },[]);
    // console.log(score);
    // console.log(handelButton());
      // if(questions.length!=0 && Response=== 0 )
      
      console.log(score);
        function handelButton(answer)
        {
           console.log(answer,questions[count].correct_answer);
            if(questions.length>0 && questions[count].correct_answer===answer)
              {
                console.log("shree"); 
                console.log(questions[count].correct_answer);
                setScore(score+1);
                // bgcolor="green";
                setBgcolor('green');
              }
            else{
              setScore(score);
              // bgcolor="red";
              setBgcolor('red');
            }
            console.log(response);
            setDisabled(true);
          }
    console.log(response);  
    let shuffleAns=[];
        if(questions.length!=0)
        {
          console.log(questions[count].incorrect_answers);
          shuffleAns=[questions[count].correct_answer,...questions[count].incorrect_answers].sort(()=>(Math.random()-0.5))
          console.log(shuffleAns); 
        } 
          console.log(count);
          console.log(questions[count]);
          console.log(response);
          console.log(bgcolor);
      return(gameEnd ?( <Scorecard scorevalue={scorevalue} count={count}/>) : ( 
                      questions.length > 0 ?(
                          <div className="container" style={{position:'relative'}}>
                            <div className="card" style={{position:'relative'}}>
                              <div>
                                <h3 className="h3">{count+1}.{questions[count].question}</h3>
                                </div>
                              <div>
                                <div style={{position:'relative',top: '23vh'}}>
                                  <button className="btn btn-primary btn-sm btn-block" disabled={disabled} onClick={()=>handelButton(shuffleAns[0])} style={{backgroundColor: `${bgcolor}`,color:'black'}} answer={shuffleAns[0]}>{shuffleAns[0]}</button>
                                  <button className="btn btn-primary btn-sm btn-block" disabled={disabled} onClick={()=>handelButton(shuffleAns[2])} style={{backgroundColor: `${bgcolor}`,color:'black'}} answer={shuffleAns[1]}>{shuffleAns[1]}</button>
                                  <button className="btn btn-primary btn-sm btn-block" disabled={disabled} onClick={()=>handelButton(shuffleAns[1])} style={{backgroundColor: `${bgcolor}`,color:'black'}} answer={shuffleAns[2]}>{shuffleAns[2]}</button>
                                  <button className="btn btn-primary btn-sm btn-block" disabled={disabled} onClick={()=>handelButton(shuffleAns[3])} style={{backgroundColor: `${bgcolor}`,color:'black'}} answer={shuffleAns[3]}>{shuffleAns[3]}</button>
                                </div>
                                </div>
                                <div style={{display:'flex',justifyContent: 'center'}}>
                                <button style={{position:'absolute',top: '300px',backgroundColor:'orange',zIndex: '10'}} className="btn btn-primary buton2" onClick={()=>{
                                  setDisabled(false);
                                  // console.log("hjk");
                                  // bgcolor="white";
                                    if(count<9)
                                      {
                                        console.log(count);
                                        setCount(count+1)
                                      }
                                    else{
                                      setScorevalue(score);
                                      setgameEnd(true);
                                    }
                                    setBgcolor("white");
                                  // (count>9) ? setCount(count+1) : setScorevalue(score);
                              }}>Press for next</button>
                            </div>
                      </div>
                      </div>
        ) : (<h1 style={{color:'white',textAlign:'center',margin:'50px auto'}}> loading..</h1>))      
    );
     
}
export default App;

