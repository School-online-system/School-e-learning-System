import React from 'react'
import Insert_schools from './Insert_school.css'
import { Link } from "react-router-dom";
import axios from 'axios';
import  { useState } from 'react';

function Insert_school() {

  const [values, setValues] =useState({

    // identification_number: '',
    email:'',
    password: '',
    identification_number:'',
    school_Name : '',
    city: '',
    ministry : '',
    phone_number : '',
    job_Number: '',

  });

 

  function testconnect () {
    var data = {
      email : document.getElementById('email').value,
      password: document.getElementById('password').value,
      identification_number:document.getElementById('identification_number').value,
      school_Name : document.getElementById('school_Name').value,
      city: document.getElementById('city').value,
      ministry : document.getElementById('ministry').value,
      phone_number : document.getElementById('phone_number').value,
      job_Number: document.getElementById('job_Number').value,
    }
    
    axios.post('http://localhost:9000/signup',data)
    .then(function (response) {
      console.log(response);
    })
    .catch(error => {        
      if(error.response) { 
        /* the request was made and the server responded
        with a status code that falls out of the range of 2xx */
        alert(error.response.data)
      }
    });
  }
    return (
<div> 
        <div className="insert_school">
            <div className="insert_schools">  
                <p className="schools_text">إضافة مدرسة جديدة</p>
                <div>
          <hr className="line_schools" />
        </div>
        <div className="verticcals1"></div>
        <div className="verticcals2"></div>
        <div className="adv_inputs">
          <input className="name_class" id = 'identification_number' placeholder="رقم هوية المستخدم"/>
             <br />
             <input className=" level" id = 'email'  placeholder="البريد الالكتروني" />
             <br />
             <input className="level " id = 'job_Number' placeholder="  الرقم الوظيفي " />
             <br />
             <input className="level " id = 'city' placeholder="  المدينة " />
             <br />
         
      </div>
      <div className="adv2_inputs">
          <input className="name_class" id = 'phone_number' placeholder="رقم الجوال "/>
             <br />
             <input className=" level" id = 'password' placeholder="كلمة المرور " />
             <br />
             <input className="level " id = 'school_Name' placeholder="اسم المدرسة " />
             <br />
             <input className="level " id = 'ministry' placeholder="المديرية " />
              </div>
              
              {/* <Link to="/manger"> */}
            <button className="shares" onClick={testconnect}>إضافة</button>
          {/* </Link> */}
            </div>)
        </div>
        </div>
    )
}
// you can write onClick in button in another way  :-
//onClick={sending}
export default Insert_school
