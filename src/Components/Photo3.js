import React from 'react'

const Photo3 = (props) => {
  return (
    <>
     <div className="col-3">
    
          <h4 className="" style={{marginLeft:"12px",marginTop:"14px", paddingLeft:"30px"}}>{props.name}</h4>
          
       
         
             <img src={props.photo} alt="" width="100%" style={{marginLeft:"15px",marginBottom:"17px"}}/>  
             <h3 className=''style={{ paddingLeft:"10px"}}> {props.title}</h3>
          <p className=''style={{ paddingLeft:"10px"}}> {props.info}</p>
          <p className='' style={{ marginLeft:"11px"}}>{props.ds}</p>
          <div className="d-flex justify-content-center align-items-center">
        <button className='button'>{props.btn} Contact</ button>
        </div>
         
          

             
                
            </div>
           
    
            
    </>
  )
}

export default Photo3