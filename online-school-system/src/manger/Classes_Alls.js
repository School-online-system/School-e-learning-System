import React from "react";
import Component_Classes_Alls from './Component_Classes_Alls'
import Classes_Allss from './Classes_Alls.css'
import Insert_class from './Insert_class'

class Classes_Alls extends React.Component {
  constructor(props) {
    super(props);
  }
  state={
    items: [
      { id:1, branch:"علمي",level :5,class:" السابع "},
     {id:3, branch:"علمي",level :5,class:" السابع "}
      ,{id:6, branch:"علمي",level :5,class:" السابع "}]
  }
  deletItem=(id)=>{
  let items=this.state.items//save data in varable
  let i =items.findIndex(item=>item.id ===id) //is idItems ==id
  items.splice(i,1)
  this.setState({items})
    }
  addItem=(item)=>{
    item.id=Math.random();
let items=this.state.items;
items.push(item);
this.setState({items})
}
  
    render() {
    return (
      <div className="classes_Alls">
      <div className="text_homees">

          <span>الفصول الدراسية </span>
        </div>
        {/*product id,title,price,rating,img */}
        {/*product */}
        
        <div className="home_row">
        <Component_Classes_Alls  items={this.state.items}  deletItem={this.deletItem}  />
        <Component_Classes_Alls  items={this.state.items}  deletItem={this.deletItem}  />
       <Component_Classes_Alls   items={this.state.items}  deletItem={this.deletItem}  />
         <Component_Classes_Alls   items={this.state.items}  deletItem={this.deletItem}  />
        <Component_Classes_Alls   items={this.state.items}  deletItem={this.deletItem}  />
        <Component_Classes_Alls   items={this.state.items}  deletItem={this.deletItem}  />
        <Component_Classes_Alls   items={this.state.items}  deletItem={this.deletItem}  />

 
             </div> 
         
      </div>
    )
  } 
}

export default Classes_Alls
