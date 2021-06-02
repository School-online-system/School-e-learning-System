import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React from "react";
import Header_std from './Header/Header_std'
import Home from './student/Home'
import AppBare from './Header_home/AppBare'

import Login from './Login'
import Profile_std from './Profiles/Profile_std'
 import Insert_class from './manger/Insert_class'
import Header_teac from './Header/Header_teac'
import Header_manger from './Header/Header_manger'
import Header_parent from './Header/Header_parent'

import AppBareParent from './Header_home/AppBareParent'
import Mark_std from './Mark_std'
 import Insert_std from './manger/Insert_std'
import Marks_manger from './manger/Marks_manger'
  import Main_teacher from './teacher/Main_teacher'
import Adv_teacher from './Ads/Adv_teacher'
import Adv_manger from './Ads/Adv_manger'
import Insert_adv from './Ads/Insert_adv'
 import Insert_adv_manger from "./Ads/Insert_adv_manger";
import Adv_std from './Ads/Adv_std'
import Insert_school from './Insert_school'

import './App.css';
import Subjects_calass from './teacher/Subjects_calass'
  import Insert_teac
 from './Insert_teac'
  
 import Material from './Material'
 import Func from './Func'

import Classes_Alls from './manger/Classes_Alls'
import Profile_manger from './Profiles/Profile_manger'
import Profile_teacher from './Profiles/Profile_teacher'
import Inn_class from './Inn_class'
import Profile_parent from './Profile_parent'
 
import Material_pa from './Material_pa'
  
import Parts from './Parts'
import Exams from './Exams'
 import AppBareMan from './Header_home/AppBareMan'
import AppBare_Std from './Header_home/AppBare_Std'
 

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/manger">
            <Header_manger />
            <AppBareMan />
            <Adv_manger />
          </Route>
          <Route path="/profiles_manger">
            <Header_manger />
            <AppBareMan />
            <Profile_manger />
          </Route>
          <Route path="/insert">
          <Header_manger />
            <AppBareMan />
            <Insert_class />
          </Route>
          <Route path="/Class">
          <Header_manger />
            <AppBareMan />
            <Classes_Alls />
          </Route>
          <Route path="/marks_manger">
          <Header_manger />
            <AppBareMan />
            <Marks_manger />
          </Route>
          <Route path="/Exam_tab_manger">
          <Header_manger />
            <AppBareMan />
          </Route>
          <Route path="/add_adv">
            <Header_manger />
            <AppBareMan />
            <Insert_adv_manger />
          </Route>
          <Route path="/Exams">
          <Header_manger />
            <AppBareMan />
            <Func />
          </Route>
          
          <Route path="/in_class">
          <Header_manger />
            <AppBareMan />
            <Inn_class />
           </Route>
          <Route path="/insert_std">
          <Header_manger />
            <AppBareMan />
            <Insert_std />
          </Route>
         

          <Route path="/insert_teac">
          <Header_manger />
            <AppBareMan />
            <Insert_teac />
          </Route>



          <Route path="/subject">
            <Header_teac />
            <AppBare />
            <Subjects_calass />
            <Adv_teacher />
          </Route>
          <Route path="/Material">
            <Header_teac />
            <Material_pa />
                <Material  />
          </Route>
          <Route path="/part">
            <Header_teac />
            <AppBare />
           <Parts />
          </Route>






          <Route path="/profile_Parent">
            <Header_parent />
            <AppBareParent />
            <Profile_parent />
          </Route>
          <Route path="/parent">
            <Header_parent />
            <AppBareParent />
            </Route>

          
          
          <Route path="/Exams_std">
          <Header_std />
            <AppBare_Std />
           </Route>
          <Route path="/profile">
            <Header_std />
            <AppBare_Std />
            <Profile_std />
          </Route>

          <Route path="/teacher">
            <Header_teac />
            < AppBare />
            <div className="app_teacher">
              <Main_teacher />
              <Adv_teacher />
            </div>
          </Route>
          <Route path="/Exam">
          <Header_teac />
            <AppBare />
          </Route>
          <Route path="/Profile_teacher">
            <Header_teac />
            <AppBare />
            <Profile_teacher />
          </Route>
       
          <Route path="/add_advs">
            <Header_teac />
            <Material_pa />
            <Insert_adv />
          </Route>
          <Route path="/socail_teacher">
            <Header_teac />
            <Material_pa />
            </Route>
          <Route path="/Exam_tab_teacher">
            <Header_teac />
            <Material_pa />
     
          </Route>
          <Route path="/task">
            <Header_teac />
            <Material_pa />
           </Route>
          <Route path="/mark_teacher">
            <Header_teac />
            <AppBare />
          </Route>

          <Route path="/Material_teac">
            <Header_teac />
            <AppBare />
            <Subjects_calass />
          </Route>
              <Route path="/Exams_std_table">
            <Header_std />
            <AppBare_Std />
    
          </Route>
          <Route path="/Social">
            <Header_std />
            <AppBare_Std />
          </Route>
          <Route path="/homeWork_std">
            <Header_std />
            <AppBare_Std />
       
            <Exams />
         
            
          </Route>
           
          <Route path="/marks_std">
            <Header_std />
            <AppBare_Std />
            <Mark_std />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/student">
            <Header_std />
            <AppBare_Std />
           <Home />
            <Adv_std />
          </Route>
          <Route exact path="/Material_std">
            <Header_std />
            <AppBare_Std />
            </Route>
         
          <Route exact path="/">
            < Insert_school />
           </Route>
        </Switch>
      </div>
    </Router>



  );
}

export default App;
