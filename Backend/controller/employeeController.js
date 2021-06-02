const employee_model = require('../model/employee').employee_model;
const xlsxFile = require('read-excel-file/node');
const Permissions = require('../model/permission').permissions_model;
const validUrl = require('valid-url');

const handleError = (err) => {
    const errors = {  };

    // Duplicate error code
    if(err.code === 11000) {
        errors.email = 'Role name already exist';
        return errors;
    }

    // Validations Errors
    if(err.message.includes('permissions_model validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
};

const employee_index = (req,res) => {
    res.send('employees Index Page');
};

const employee_create = (req,res) => {
    res.send('employees Create Page');
};

const employee_addTeacherFromExcel = async (req,res) => {
    const {urlexcel} = req.body
    xlsxFile(urlexcel+'').then((rows) => {
        rows.shift();
        var data = {}
        console.log(rows);
        rows.forEach((col) => {
            console.log(col, 'col')
            for (var i = 0; i < col.length; i++) {
                data = {
                    identification_number: col[0],
                    full_name_ar: col[1],
                    job_Number: col[2],
                    full_name_en: col[3],
                    gender: col[3],
                    date_Of_birth: col[9],
                    social_Status: col[10],
                    address: col[11],
                    phone: col[13],
                    teaching_Subject: col[32],
                }
            }
        })
        var newTeacher = new employee_model(data)
        newTeacher.save().then(() => {
            console.log('success ^_^')
        }).catch((err) => {
            { console.log(err, 'faild ^_^') }
        })
    })
    .catch((err) => { 
        console.log(err, 'err') 
    })
}

const employee_edit = (req,res) => {
    res.send(req.params.id)
};

const employee_update = async (req,res) => {
    res.send("Employee Update")
};

const employee_delete = async (req,res) => {
    const employeeID = req.params.id;  

    try {
        await employee_model.findByIdAndDelete({_id: employeeID})
        .then(result => {
            // res.status(201).json({ redirect: '/url' });
            res.send('Deleted Successfully');
        });
    } catch(err) {
        res.status(400).json({err});
    }
};


module.exports = {
    employee_index, employee_create, employee_addTeacherFromExcel, employee_edit, employee_update, employee_delete
};