import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
  import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
 import  { useState } from 'react';
 import FormControl from '@material-ui/core/FormControl';
import Func from './Func'
import CancelIcon from '@material-ui/icons/Cancel';

export const Material=()=> { 
 
  const useStyles = makeStyles((theme) => ({
    file: {
      background:"#DF9433",
      marginRight:"5px",
      height: 32,
      fontWeight:900,

      margin:"5px",
     fontSize:14
       },  
       formControl: {
        margin: theme.spacing(1),
                  minWidth: 420,
                  fontSize:25
      },
       filee: {
        background:"#84b13cb2",
        marginRight:"5px",
        height: 32,
        fontWeight:900,

        margin:"2px",
       fontSize:14
         },  
         fileee: {
          background:"#ebaf607e",
          marginRight:"5px",
          height: 32,
          fontWeight:900,
          margin:"2px",
         fontSize:14
           }, 
    }));
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
     const [list, setList] = useState([]);
    const [mune, setMune] = useState([]);
 
  const handleButtonClicked = () => {
    setList((prevList) => {
      const newList = [...prevList];
      const id =  document.getElementById('home_cell')
        newList.push({
        id:[],
       })
      return newList;
    })
  }
 
   const handleButtonClickeds = () => {
    
    setMune((prevMune) => {
      const newMune = [...prevMune];
      const id = document.getElementById('cells')
         newMune.push({
      
      })
      return newMune;
    })
  }
   
 
     
   const handleClickOpen = () => {
    
    setOpen(true);
  };
 const deletItem=()=>{

 }
 const handleSave =()=>{
  var x = document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = x;
  setOpen(false);
}

 
  const handleClose = () => {
    setOpen(false);
  };

    return (
        <div>
           <Grid  className="cell">
        <button className="dialoo"  onClick={handleButtonClickeds}>اضافة وحدة دراسية  </button>
        <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <span className="sp">  اسم الوحدة الدراسية   </span>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
            <input type="text" id="myText" />
              </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose}  className="diiiallo"   >
            الغاء
          </button>
          <button onClick={handleSave}  className="diiallo"  >
            اضافة
          </button>
        </DialogActions>
      </Dialog>
      {mune.map((listItem) => <div key={listItem.id}>
        <Grid id="cells">
           <Button  className={classes.file} onClick={handleClickOpen}>  رفع ملف</Button>
           <form action="/subject/create" method="POST" enctype="multipart/form-data">
              <input type="file" name="file" accept="application/pdf"/>
           <button>Submit</button>
        </form>
   <Button  className={classes.filee} onClick={handleClickOpen}> اضافة نص   </Button>
  <Button  className={classes.fileee} onClick={handleClickOpen}> الوحدة  </Button>
          <span id="demo"> </span>
         <br />
         <span className="header-option_deleet" ><CancelIcon onClick={deletItem} style={{ fontSize:20 }}/></span>
        </Grid> 
      </div>
        )}
     
       </Grid> 
       <Grid> 

      <Func />
        </Grid>
 
      </div>
 
    )
}

export default Material
 // <button onClick={()=>setShow(true)}>show</button>
// <button onClick={()=>setShow(false)}>move</button>
 //<button onClick={handleButtonClicked}>Add an Item</button>
 //    {
  //show?<span>mai sami </span>:null
//}
 