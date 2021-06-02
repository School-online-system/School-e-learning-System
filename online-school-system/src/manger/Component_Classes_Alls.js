import React from 'react'
import { Link } from 'react-router-dom';
import Component_Classes_Allss from './Component_Classes_Alls.css'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CancelIcon from '@material-ui/icons/Cancel';
  const Component_Classes_Alls=(props)=> {
    const {items}=props;//take data
    const {deletItem}=props //delete data
 
    const Listitems=items.map(item =>{
        return(
          <div> 
            <div className="component_Classes_Alls" key={item.id}>
                <p className="header-optss">المرحلة:{item.branch} </p>
                <p className="header-optss">المرحلة:{item.level} </p>
               <p className="header-optss">المرحلة:{item.class} </p>
                <span className="header-option_delet" ><CancelIcon onClick={()=>deletItem(item.id)}   style={{ fontSize:20 }}/></span>
            </div>
            </div>
        )
    } );
 
       return (
        <div>
            {Listitems}
        </div>
    )
}
export default Component_Classes_Alls
 