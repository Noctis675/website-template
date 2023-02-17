import React from 'react'
import Photo3 from './Photo3'

const About = () => {
  return (
    <>
      <hr />

      <h2 style={{ color: "black", paddingLeft: "25px" }}>About</h2>
      <p style={{ fontSize: "bolder", fontWeight: "500", marginLeft: "25px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      <br />
      <div className="container-fluid">
       
        <div className="row mt-3">
          
         
            
          <Photo3 photo="Images\team1.jpg" title="John Doe" info="CEO & Founder
          
          " ds= "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."></Photo3>
        
         
         

          <Photo3 photo="Images\team2.jpg" title="Jane Doe" info="Architect" ds="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."></Photo3>



          <Photo3 photo="Images\team3.jpg" title="Mike Ross"info="Architect" ds="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."> </Photo3>


          <Photo3 photo="Images\team4.jpg" title="Dan Star"info="Architect" ds="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."></Photo3>
          


        </div>
        
      </div>
           <br /><br />








    </>
  )
}


export default About