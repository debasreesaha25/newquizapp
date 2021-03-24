import React from 'react';
// import Modal from 'react-modal';
const scorecard=(props)=>
{
    function refreshPage() {
		window.location.reload(false);
	}
return(<div style={{position:'absolute',top: '300px'}}>
        {/* <modal > */}
        <div className="card" style={{textAlign: 'center'}}>
            <div style={{fontSize:'22px',color: 'black',fontWeight:'500',marginBottom:'30px'}}> Your final Marks :{props.scorevalue}/10</div>
               <div>
                <button className="btn btn-primary btn-sm" onClick={refreshPage}>Start again</button>
                </div>
                </div>
         {/* </modal> */}
    
              
    </div>
       );
 }
export default scorecard;
