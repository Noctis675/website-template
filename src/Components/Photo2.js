import React from 'react'

const Photo2 = (props) => {
  return (
    <>
     <div className="col-3 position-relative">
          <h4 className= "position-absolute bg-dark text-light top-0 start-0" style={{marginLeft:"27px"}}>{props.name} </h4>
          
            
             <img src={props.photo} alt="" style={{paddingLeft:"15px"}} width="100%"/>

 
                
            </div>
    
    </>
  )
}

export default Photo2