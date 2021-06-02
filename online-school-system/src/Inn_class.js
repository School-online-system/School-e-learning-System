import React from 'react'
// import In_classs from './In_class.css'
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
 import FormControl from '@material-ui/core/FormControl';
//  import TextField from '@material-ui/core/TextField';
 import SearchIcon from '@material-ui/icons/Search';
 import Grid from '@material-ui/core/Grid';
 const rows = [{ name: " مي سامي عبد الرحيم جبر ", name_en: "Mai sami jaber", id: 53783748, bart:" 1999 / 1 / 18", classstd: { branch: "علمي", level: 5, class: " السابع "}, father_name: "Sami", phone: 5678999, gender: "انثى", address: "غزة" },
    { name: " مي سامي عبد الرحيم جبر ", name_en: "Mai sami jaber", id: 53783748, bart:" 1999 / 1 / 18", classstd: { branch: "علمي", level: 5, class: " السابع "}, father_name: "Sami", phone: 5678999, gender: "انثى", address: "غزة"  },
    { name: " مي سامي عبد الرحيم جبر ", name_en: "Mai sami jaber", id: 53783748, bart:" 1999 / 1 / 18", classstd: { branch: "علمي", level: 5, class: " السابع "}, father_name: "Sami", phone: 5678999, gender: "انثى", address: "غزة"  },
    { name: " مي سامي عبد الرحيم جبر ", name_en: "Mai sami jaber", id: 53783748,bart:" 1999 / 1 / 18", classstd: { branch: "علمي", level: 5, class: " السابع "}, father_name: "Sami", phone: 5678999, gender: "انثى", address: "غزة"  },
    { name: " مي سامي عبد الرحيم جبر ", name_en: "Mai sami jaber", id: 53783748, bart:" 1999 / 1 / 18", classstd: { branch: "علمي", level: 5, class: " السابع "}, father_name: "Sami", phone: 5678999, gender: "انثى", address: "غزة"  },
    { name: " مي سامي عبد الرحيم جبر ", name_en: "Mai sami jaber", id: 53783748,bart:" 1999 / 1 / 18", classstd: { branch: "علمي", level: 5, class: " السابع "}, father_name: "Sami", phone: 5678999, gender: "انثى", address: "غزة"  },
    { name: " مي سامي عبد الرحيم جبر ", name_en: "Mai sami jaber", id: 53783748, bart:" 1999 / 1 / 18", classstd: { branch: "علمي", level: 5, class: " السابع "}, father_name: "Sami", phone: 5678999, gender: "انثى", address: "غزة"  },
    { name: " مي سامي عبد الرحيم جبر ", name_en: "Mai sami jaber", id: 53783748, bart:" 1999 / 1 / 18", classstd: { branch: "علمي", level: 5, class: " السابع "}, father_name: "Sami", phone: 5678999, gender: "انثى", address: "غزة"  },
    { name: " مي سامي عبد الرحيم جبر ", name_en: "Mai sami jaber", id: 53783748,bart:" 1999 / 1 / 18", classstd: { branch: "علمي", level: 5, class: " السابع "}, father_name: "Sami", phone: 5678999, gender: "انثى", address: "غزة"  },
    { name: " مي سامي عبد الرحيم جبر ", name_en: "Mai sami jaber", id: 53783748, bart:" 1999 / 1 / 18", classstd: { branch: "علمي", level: 5, class: " السابع "}, father_name: "Sami", phone: 5678999, gender: "انثى", address: "غزة"  },
    { name: " مي سامي عبد الرحيم جبر ", name_en: "Mai sami jaber", id: 53783748, bart:" 1999 / 1 / 18", classstd: { branch: "علمي", level: 5, class: " السابع "}, father_name: "Sami", phone: 5678999, gender: "انثى", address: "غزة"  },
    { name: " مي سامي عبد الرحيم جبر ", name_en: "Mai sami jaber", id: 53783748, bart:" 1999 / 1 / 18", classstd: { branch: "علمي", level: 5, class: " السابع "}, father_name: "Sami", phone: 5678999, gender: "انثى", address: "غزة"  },
    { name: " مي سامي عبد الرحيم جبر ", name_en: "Mai sami jaber", id: 53783748,bart:" 1999 / 1 / 18", classstd: { branch: "علمي", level: 5, class: " السابع "}, father_name: "Sami", phone: 5678999, gender: "انثى", address: "غزة"  },
    { name: " مي سامي عبد الرحيم جبر ", name_en: "Mai sami jaber", id: 53783748, bart:" 1999 / 1 / 18", classstd: { branch: "علمي", level: 5, class: " السابع "}, father_name: "Sami", phone: 5678999, gender: "انثى", address: "غزة"  },
    { name: " مي سامي عبد الرحيم جبر ", name_en: "Mai sami jaber", id: 53783748, bart:" 1999 / 1 / 18", classstd: { branch: "علمي", level: 5, class: " السابع "} ,father_name: "Sami", phone: 5678999, gender: "انثى", address: "غزة"  },
    ];
   
    const useStyles = makeStyles((theme) => ({
        container: {
          display: 'flex',
              flexWrap: 'wrap',
        },
        file:{
            marginRight:"12px",
            marginLeft:"12px",
            border:"1px  ",
background:"#DF9433",
fontSize:18
        },
        delete:{
            background:"rgba(250, 8, 8, 0.801)",
            marginRight:"12px",
            height: 40,
            fontSize:18
        },
        formControl: {
          margin: theme.spacing(1),
                    minWidth: 420,
        },
        update:{
            background:"#63C47D",
            marginRight:"12px",
            height: 40,
            fontSize:18,
            border:1 ,
            borderColor: 'black',
        },
        ins:{
            background:"#273cf581",
            marginRight:"12px",
            height: 40,
           fontSize:18
         

        },
        inss:{
          background:"#C991C0",
          marginRight:"12px",
          height: 40,
         fontSize:18
       

      },
        standard:{
          width: 120,
          fontSize:18
          
        },
       
        
        
      }));
function Inn_class() {
 
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
   
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
        return (
            <div>
            <Grid className="divs" >
            <Grid>
      <Button  className={classes.file} onClick={handleClickOpen}> اضافة عبر ملف      </Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <span className="sp">  قم باختيار ملف   </span>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
            <Input type="file" />
              </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose} className="diiiallo"  >
            Cancel
          </button>
          <button onClick={handleClose} className="diiallo"    >
            Ok
          </button>
        </DialogActions>
      </Dialog>
          </Grid>
           <Link to="/insert_std" className="Liks_ins">
             <Button  className={classes.ins}>اضافة طالب</Button>
                </Link>
                <Link to="/insert_teac" className="Liks_ins">
             <Button  className={classes.inss}>اضافة معلم</Button>
                </Link>
                <Button className={classes.delete}>ازالة</Button>
                <Button className={classes.update}>تعديل</Button>
                <div className="searchs">  
<input label="Search" className="standard-basic" placeholder="بحث" type="search"/>
<SearchIcon />
</div>
         </Grid>
        <table class="table_data" >
            <thead>
                <tr className="bars">
                    <th className="bar " >رقم الهاتف  </th>
                    <th className="bar " >اسم ولي الأمر  </th>
                    <th className=" bar" >الشعبة  </th>
                    <th className=" bar" >الصف  </th>
                    <th className="bar ">المرحلة</th>
                    <th className=" bar"> العنوان</th>
                    <th className="bar ">الجنس</th>
                    <th className="bar ">تاريخ الميلاد</th>
                    <th className=" bar">رقم بطاقة الهوية</th>
                    <th className=" bar" > الاسم باللغة الانجليزيه</th>
                    <th className=" bar" >اسم الطالب</th>
                </tr>
    
            </thead>
            <tbody>
            {rows.map((rows) => (
                <tr className=""  >
                    <td>{rows.phone}</td>
                    <td>{rows.father_name}</td>
                    <td>{rows.classstd.level}</td>
                    <td>{rows.classstd.class}</td>
                    <td>{rows.classstd.branch}</td>
                    <td>{rows.address}</td>
                    <td>{rows.gender}</td>
                    <td>{rows.bart}</td>
                    <td>{rows.id}</td>
                    <td>{rows.name_en} </td>
                    <td>{rows.name} </td>
                </tr>
                   ))}
                </tbody>

</table>
</div>
    )
}
export default Inn_class
