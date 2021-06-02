const student_model = require('../model/student').Studentmode;
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

const student_index = (req,res) => {
    res.send('students Index Page');
};

const student_create = (req,res) => {
    res.send('students Create Page');
};

const studentAddFromExcel = async (req,res) => {
    const {urlexcel} = req.body
   
    xlsxFile(urlexcel + '').then((rows) => {
        rows.shift();
        rows.shift();
        rows.shift();
        var student, parentdata, classdata = {}
        rows.forEach((col) => {
            for (var i = 0; i < col.length; i++) {
                student = {
                    identification_number: col[1],
                    full_name_ar: col[2],
                    full_name_en: col[3],
                    phone_number: col[11],
                    birthday_date: col[4],
                    gender: col[6],
                    address: col[10],
                    nationality: col[8],
                    religion: col[7]
                }
                parentdata = {
                    identification_number: col[16],
                    full_name_ar: col[17],
                    phone: col[11],
                    Job: col[19]
                }
                classdata = {
                    grade: col[13],
                    room: col[15],
                    branch: col[14]
                }

            }
        })
        var newparent = new parent(parentdata)
        newparent.save()
            .then((data) => {
              console.log('success ^_^', data)
              student.parent = data
              var newclass = new classmodem(classdata)
                newclass.save()
                    .then((data) => {
                        console.log('success ^_^')
                        student.classforignkey = data
                        var newstd = new std(student)
                         newstd.save()
                            .then(() => {
                              console.log('success ^_^')
                            })
                            .catch((err) => {
                             console.log(err, 'faild ^_^') 
                            })
                    })
                    .catch((err) => {
                         console.log(err, 'faild ^_^') 
                    })
            })
            .catch((err) => {
                 console.log(err, 'faild ^_^') 
            })
    })
    .catch((err) => {
    console.log(err, 'err') })
}

const student_edit = (req,res) => {
    res.send(req.params.id)
};

const student_update = async (req,res) => {
    res.send("student Update")
};

const student_delete = async (req,res) => {
    const studentID = req.params.id;  

    try {
        await student_model.findByIdAndDelete({_id: studentID})
        .then(result => {
            // res.status(201).json({ redirect: '/url' });
            res.send('Deleted Successfully');
        });
    } catch(err) {
        res.status(400).json({err});
    }
};


module.exports = {
    student_index, student_create, studentAddFromExcel, student_edit, student_update, student_delete
};