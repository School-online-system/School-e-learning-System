import React from 'react'
import Component_subject from "./Component_subject";

function Subjects_calass() {
    return (
   
      <div className="homed">
      <div className="text_homees">
        <span>المواد الدراسية </span>
      </div>
 
      <div className="home_row">
        <Component_subject />
        <Component_subject />
        <Component_subject />
        <Component_subject />
      </div> 
       
    </div>
    )
}

export default Subjects_calass
