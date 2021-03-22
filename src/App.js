import logo from './logo.svg';
import './App.css';
import Scorecard from './component/scorecard';
import { useEffect, useState } from 'react';
const api='https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple';

function App() {
  const [questions,setQuestions]=useState([]);
  const [score,setScore]=useState(0);
  const [count,setCount]=useState(0);
  const [bgcolor,setBgcolor]=useState("white");
  const [scorevalue,setScorevalue]=useState(0);

  useEffect(()=>
  {
    fetch(api)
    .then(res=>res.json())
    .then(data=>{
      setQuestions(data.results)});
    },[]);
    console.log(score);
    function handelButton()
    {
        setScore(score+1);
        setBgcolor("green");   
    }
    
  //  setBgcolor("white");
  console.log(count);
  console.log(questions[count]);
  console.log(bgcolor);
    return(
    (questions.length>0)?(
        <div className="container">
          <div className="card">
          <div className=" card-header bg-white text-purple-800 p-10 rounded-lg shadow-md">
            <h2 className="text-2xl" >{count+1}.{questions[count].question}</h2>
             </div>
             <div className="button -md flex mt-4 space-x-4">
             <div className="button-right">
             <button className="font-semibold" onClick={handelButton} style={{backgroundColor:`${bgcolor}`}}>{questions[count].correct_answer}</button>
             <button onClick={()=>{setScore(score)}}>{questions[count].incorrect_answers[0]}</button>
             </div>
             <div className="button-right">
             <button onClick={()=>{setScore(score)}}>{questions[count].incorrect_answers[1]}</button>
             <button onClick={()=>{setScore(score)}}>{questions[count].incorrect_answers[2]}</button>
             </div>
         </div>
         <div style={{marginTop: '15px', textAlign:'center',marginLeft:'-180PX'}}>
           <button style={{height:'5vh'}}onClick={()=>{
             setBgcolor("white");
             if(count<9)
             {
             setCount(count+1)
             }
            //  else{
            // <div>
            //   <Scorecard scorevalue={score}/>
            //   {setCount(0)}
            //   </div>  
            //  }
            else{
              setScorevalue(score);
            }
         }}>Press for next</button>
          <Scorecard scorevalue={scorevalue} count={count}/>
         </div>
        </div>
        </div>
        ) : (<h1>its loading</h1>)      
    );  
}
export default App;

