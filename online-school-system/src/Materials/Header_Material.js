import React from 'react'
 import { Link } from "react-router-dom";

function Header_Material() {
    return (
        <div className="manger">
        <Link to="/" className="Liks_manger">
              <div className="home_text_manger">
                <p className="text_mangers">جدول الامتحانات</p>
              </div>
            </Link>
            <Link to="/insert" className="Liks_manger">
              <div className="home_text_manger">
                <p className="text_mangers">الإعلانات</p>
              </div>
            </Link>
           
            <Link to="/Class" className="Liks_manger">
              <div className="home_text_manger">
                <p className="text_mangers">المنتدى</p>
              </div>
            </Link>
            <Link to="/marks" className="Liks_manger">
              <div className="home_text_manger"  >
                <p className="text_mangers">الامتحانات</p>
              </div>
            </Link>
            <Link to="/Exam" className="Liks_manger">
              <div className="home_text_manger"  >
                <p className="text_mangers">الأنشطة والواجبات </p>
              </div>
            </Link>
            <Link to="/profile" className="Liks_manger">
              <div className="home_text_manger">
                <p className="text_mangers">رفع المادة التعليمية </p>
              </div>
            </Link>
            <Link to="/teacher" className="Liks_manger">
              <div className="home_text_manger">
                <p className="text_mangers">القائمة الرئيسية </p>
              </div>
            </Link>
            
      
      
      
              </div>
    )
}

export default Header_Material
