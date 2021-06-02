import React from "react";
import { Link } from "react-router-dom";
import Component_teacher from "./Component_teacher";

function Main_teacher() {
  return (
    <div className="home">
    <div className="text_homees">
      <span>الفصول الدراسية </span>
    </div>
    {/*product id,title,price,rating,img */}
    {/*product */}
    <div className="home_row">
      <Component_teacher />
      <Component_teacher />
      <Component_teacher />
    </div> 
     
  </div>
  );
}

export default Main_teacher;
