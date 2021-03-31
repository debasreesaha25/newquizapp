import React from 'react';
import {useState } from 'react';        
const Button=({answer,correct_answer,setCount,setScore,count,setScorevalue,score,setgameEnd,setBgcolor,bgcolor})=>
{
    const[disabled,setDisabled]=useState(false);
    // const[bgcolor,setBgcolor]=useState('white');
  return(<div>
      <button className="btn btn-primary btn-sm btn-block" onClick={()=>
    {
        if(count<9)
            {
                if(correct_answer === answer){
                      setScore(score+1);
                      setBgcolor('green');
                    }
                  else{
                    setBgcolor('red');
                     } 
                   setCount(count+1);
           }
        else{
            setScorevalue(score)
            if(correct_answer === answer){
              setScore(score+1);
              setBgcolor('green');
            }
             setgameEnd(true)
            } 
    }} style={{color:`${bgcolor}`}}>{answer}</button>
  
  {/* <div style={{display:'flex',justifyContent: 'center'}}>
    <button style={{position:'absolute',top: '300px',backgroundColor:'orange',zIndex: '10'}} className="btn btn-primary buton2" onClick={()=>{
    setBgcolor("white")}}>Press for next</button>
  </div> */}
 </div>);
 }


export default Button;
{/* <button className="btn btn-primary btn-sm btn-block" disabled={disabled} onClick={()=>handelButton(shuffleAns[0])} style={{backgroundColor: `${bgcolor}`,color:'black'}} answer={shuffleAns[0]}>{shuffleAns[0 ]}</button> */}