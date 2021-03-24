import React from 'react';
// import Modal from 'react-modal';
const scorecard=(props)=>
{
    function refreshPage() {
		window.location.reload(true);
	}
return(<div style={{position:'absolute',top: '300px',display:'contents'}}>
        {/* <modal > */}
        <div className="card" style={{textAlign: 'center'}}>
            <div style={{fontSize:'23px',paddingTop:'50px',color: 'navy',fontWeight:'500',marginBottom:'30px'}}> Your final Marks :{props.scorevalue}/10</div>
               <div>
                <button className="btn btn-primary btn-sm" onClick={refreshPage}>Start again</button>
                </div>
                </div>
         {/* </modal> */}
    
              
    </div>
       );
 }
export default scorecard;
