import React from "react";
import Insert_teachs from "./Insert_teach.css";
import { Link } from "react-router-dom";

class Insert_class  extends React.Component{
    state = {
    branch: "",
    level: "",
    class: ""
         
}
handelChange=(e)=>{
    this.setState({
        [e.target.id] :e.target.value

    })
 }
 handelSubmit=(e)=>{
     e.preventDefault();
     this.props.addItem(this.state)
 }

  render() {
  return (
    <div className="insert_teacher">
      <div className="ins_form">
        <p className="ins_title">إضافة الصفوف الدراسية</p>
        <div>
          <hr className="line_title" />
        </div>
        <div className="vertical1"></div>
        <div className="vertical2"></div>
        <form onSubmit={this.handelSubmit}>
        <div className="ins_box">
        <select className="boxes_marks"id="level" onChange={this.handelChange} value={this.state.level}>
          <option  className="boxes_marks" value="">
            {" "}
            اسم الصف{" "}
          </option>
          <option value="السابع"  className="opt">الصف السابع</option>
          <option value="السابع"  className="opt">الصف السابع</option>
          <option value="السابع"  className="opt">الصف السابع</option>
          <option value="السابع"  className="opt">الصف السابع</option>
      
        </select>  
          <br />
          <br />
          <select className="boxes_marks" id="branch" onChange={this.handelChange}  value={this.state.branch}>
          <option className="boxes_marks" value="">
            {" "}
            المرحلة{" "}
            </option>
            
            <option  value="الاعدادية" className="opt">الاعدادية</option>
          <option  value="الابتدائية"  className="opt">الابتدائية</option>  
            <option  value="علمي"  className="opt">علمي</option>
          <option  value="ادبي" className="opt">ادبي</option>
          <option  value="شرعي"  className="opt">شرعي</option>
          <option  value="صناعة"  className="opt">صناعة</option>
          </select>  
          <br />
          <br />
          <select className="boxes_marks" id="class" onChange={this.handelChange} value={this.state.class}>
          <option className="boxes_marks" value="">
            {" "}
            الشعبة{" "}
          </option>
          <option  value="1" className="opt">1</option>
          <option  value="2"  className="opt">2</option>
          <option  value="3" className="opt">3</option>
          <option  value="4" className="opt">4</option>
          <option  value="5" className="opt">5</option>
          <option  value="6" className="opt">6</option>
          <option  value="7" className="opt">7</option>
               
        </select>  
          <br />
        {
          /* <Link to="/Class"
          
            </Link>>
           */
        }  
            <button className="sendss" value="Add">إضافة</button>
         
           </div>
           </form>

          <div className="verticalas"> </div>
       </div>
    </div>
  );
  }
}

export default Insert_class;
