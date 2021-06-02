import React from 'react'
import { Link } from "react-router-dom";

function Insert_teac() {
    return (
        <div className="insert_std">
      <div className="form">
        <div className="text_std">
          <span>اضافة المعلمين للصوف الدراسية</span>
        </div>
        <div className="line_leftt"></div>
        <div className="line_leftts"></div>
        <div>
          <hr className="line_titles" />
        </div>
        <div className="form_inputt">
          
                   
        <select className="boxes333">
          <option className="boxes333" value="">
            {" "}
            المواد الدراسية{" "}
          </option>
          <option className="opt"> اللغة العربية  </option>
          <option className="opt"> اللغة العربية  </option>
          <option className="opt"> اللغة العربية  </option>
          <option className="opt"> اللغة العربية  </option>
      
        </select>
        <input className="class" placeholder=" اسم المعلم باللغة الانجليزية " />
      
          <input className="class" placeholder="اسم المعلم" />
         

          
        <input  type="number"  className="class" placeholder="رقم الهاتف " />
        <input className="class" placeholder="رقم هوية المعلم" />
          
      
           
        <input className="class" placeholder="العنوان" />
        <select className="boxes333">
          <option className="boxes333" value="">
            {" "}
            الجنس {" "}
          </option>
          <option className="opt"> ذكر   </option>
          <option className="opt"> انثى   </option>
          
      
        </select>
        <input  type="date"  className="class" placeholder="تاريخ الميلاد" />
        <input className="class" placeholder="الرقم الوظيفي" />

 
  
 
   
           <Link to="/in_class">
           <br />
            <button className="inserts">إضافة</button>
          </Link>
          
        </div>
      </div>
    </div>
    )
}

export default Insert_teac
