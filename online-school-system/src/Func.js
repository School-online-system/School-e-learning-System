import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
  import Grid from '@material-ui/core/Grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CancelIcon from '@material-ui/icons/Cancel';
import FormControl from '@material-ui/core/FormControl';
import  { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
 
 
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
   function Func() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const [list, setList] = useState([]);

    const handleButtonClicked = () => {
      setList((prevList) => {
        const newList = [...prevList];
        const id =  document.getElementById('home_cell')
        newList.push({
          id :[],
          location: " "
        })
        return newList;
      })
    }
    const handleClickOpen = () => {
    
      setOpen(true);
    };
  
   
    const handleClose = () => {
      var x = document.getElementById("myTexts").value;
    document.getElementById("demos").innerHTML = x;
      setOpen(false);
    };
  return (
    <div>
         <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <span className="sp">  اضافة وحدة دراسية   </span>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
            <input type="text" id="myTexts" />
              </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose}  className="diiiallo"   >
            الغاء
          </button>
          <button onClick={handleClose}  className="diiallo"  >
            اضافة
          </button>
        </DialogActions>
      </Dialog>
     <Grid id="home_cell">
       
    <button className="dialoo"  onClick={handleButtonClicked}>  الأنشطة والواجبات  الخاصة بالوحدات الدراسية    </button>
    {list.map((listItem) => <div key={listItem.id}>
    <Grid id="homes_cell">

       <Button  className={classes.file} onClick={handleClickOpen}>  رفع ملف</Button>
       <Button  className={classes.filee} onClick={handleClickOpen}> اضافة نص   </Button>
<Button  className={classes.fileee} onClick={handleClickOpen}> الوحدة  </Button>
       <span id="demos"></span>
       <br />
         <span className="header-option_deleet" ><CancelIcon   style={{ fontSize:20 }}/></span>
           </Grid> 
       </div>)}
           
                  
     </Grid>
     </div>

     )
 }
 
 export default Func
 
 