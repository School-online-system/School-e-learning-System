import React from 'react'
import Examss from './Exams.css'
import { Link } from 'react-router-dom';

function Exams() {
    return (
        <div> 
        <div className="exam">
            <div> 
        <div className="homeworks">
        <h5  className="homework_s">المواد الدراسية</h5>
        </div>
<ul  className="homework">
    
    <br />
    <li className="homework_li">اللغة الانجليزيه </li>
  <br />
  <li className="homework_li">العلوم الحياتية</li>
  <br />
  <li className="homework_li" >اللغة الانجليزيه </li>
  <br />
  <li className="homework_li" >العلوم الحياتية</li>
  <br />
  <li className="homework_li" >العلوم الحياتية</li>
  <br />
  <li className="homework_li" >العلوم الحياتية</li>
  <br />
  <li className="homework_li" >العلوم الحياتية</li>
</ul>
      
    </div>
        </div>
        <div className="din"> 

        </div>
        </div>
    )

}

export default Exams

