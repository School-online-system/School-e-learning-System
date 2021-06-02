import React from "react";
import Insert_stds from "./Insert_std.css";
import { Link } from "react-router-dom";
function Insert_std() {
  return (


    <div className="insert_std">
      <div className="form">
        <div className="text_std">
          <span>اضافة الطلاب للصوف الدراسية</span>
        </div>
        <div className="line_leftt"></div>
        <div className="line_leftts"></div>
        <div>
          <hr className="line_titles" />
        </div>
        <div className="form_input">
          
                   
        <select className="boxes333">
          <option className="boxes333" value="">
            {" "}
            االصف{" "}
          </option>
          <option className="opt">الصف السابع</option>
          <option className="opt">الصف السابع</option>
          <option className="opt">الصف السابع</option>
          <option className="opt">الصف السابع</option>
      
        </select>
        <input className="class" placeholder=" اسم الطالب باللغة الانجليزية " />
      
          <input className="class" placeholder="اسم الطالب" />
         

          <select className="boxes33">
          <option className="boxes33" value="">
            {" "}
            المرحلة{" "}
          </option>
          <option className="opt">الاعدادية</option>
          <option className="opt">الابتدائية</option>  
            <option className="opt">علمي</option>
          <option className="opt">ادبي</option>
          <option className="opt">شرعي</option>
          <option className="opt">صناعة</option>
      
        </select> 
        <input    className="class" placeholder="رقم الهاتف " />
        <input className="class" placeholder="رقم هوية الطالب" />
          
        <select className="boxes33">
          <option className="boxes33" value="">
            {" "}
            االشعبةة{" "}
          </option>
          <option className="opt">1</option>
          <option className="opt">2</option>
          <option className="opt">3</option>
          <option className="opt">4</option>
          <option className="opt">5</option>
          <option className="opt">6</option>
          <option className="opt">7</option>
          </select> 
           
        <input className="class" placeholder="العنوان" />

 
 
 <input  type="date"  className="class" placeholder="تاريخ الميلاد" />
  
   <input className="class" placeholder="الجنس" />
           <Link to="/in_class">
           <br />
            <button className="inserts">إضافة</button>
          </Link>
          
        </div>
      </div>
    </div>
  );
}
export default Insert_std;
