import React from 'react'
import Photo1 from './Photo1'
import Photo2 from './Photo2'

export const Project = () => {
  return (
   <>
   <br /><br />
    <h3 style={{fontVariant:"all-small-caps"}} >Projects</h3>
    <hr />

    <div className="container-fluid">
      <div className="row mt-3">
        <Photo1 photo="Images\house5.jpg" name="Summer House"></Photo1>
        <Photo1 photo="Images\house2.jpg" name="Brick House"></Photo1>
        <Photo1 photo="Images\house3.jpg" name="Renovated"> </Photo1>
        <Photo1 photo="Images\house4.jpg" name= "Barn House"></Photo1>
       
      </div>
    </div>
    <div className="container-fluid">
    <div className="row mt-3">
    <Photo2 photo="Images\house5.jpg" name="Summer House"> </Photo2>
   
        <Photo2 photo="Images\house2.jpg" name="Brick House"></Photo2>
        <Photo2 photo="Images\house3.jpg" name="Renovated"> </Photo2>
        <Photo2 photo="Images\house4.jpg" name= "Barn House"></Photo2>


      </div>
 </div>

 
   
   </>

  )
}
