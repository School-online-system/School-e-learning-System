const User = require('../model/user');
const School = require('../model/school').Schoolmode;
const Role = require('../model/role').role_model;
const Permissions = require('../model/permission').permissions_model;
const jwt = require('jsonwebtoken');

const handleError = (err) => {
    const errors = { email: '', password: '' };

    // Incorrect Email When Login
    if(err.message === 'Incorrect Email') {
        errors.email = 'The email is not registered';
    }

    // Incorrect Password When Login
    if(err.message === 'Wrong Password') {
        errors.password = 'The password is incorrect';
    }

    // Duplicate error code
    if(err.code === 11000) {
        errors.email = 'Already Exist';
        return errors;
    }

    // Validations Errors
    if(err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
};

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
    return jwt.sign({ id }, 'Mhmod nodejs course', {
        expiresIn: maxAge
    });
};

const auth_singup = (req,res) => {
    // res.render('signup');
    return 'signup';
};

const auth_login = (req,res) => {
    res.send('Login View');
};

const auth_signup_post = async (req,res) => {
    
    const { email, password, identification_number, school_Name, city, ministry, phone_number, job_Number } = req.body;
    console.log(req.body);
    const permission = new Permissions({ edit_employees: true, edit_students: true, edit_parents: true, edit_sections: true, edit_materials: true })
    return permission.save()
        .then((permission) => {
            const role = new Role({ name: "Admin", permissions_id: permission._id })
           return role.save()
                .then((role) => {
                    const user = new User({ email, password, username: identification_number, role_Id: role._id })
                   return user.save()
                        .then((user) => {
                            const school = new School({ school_Name, city, ministry, phone_number, managerId: user._id });
                          return  school.save()
                                .then((school) => {
                                    const token = createToken(user._id);
                                    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
                                    res.status(201).json({ user: user._id })
                                }).catch(err => {
                                     User.deleteOne({ _id: user._id });
                                    const errors = handleError(err);
                                        console.log('eer')
                                    res.status(400).json({ errors });
                                                                    
                                })
                        }).catch(err => {
                             Permissions.deleteOne({ _id: permission._id })
                             .then(()=>{
                                Role.deleteOne({ _id: role._id })
                                .then(()=>{
                                    const errors = handleError(err);
                                    console.log('eer')
                                    res.status(400).json({ errors });
                                })
                             }).catch(()=>{
                                res.send({error:new Error('Permissions didn`t deleted')})
                             })
                            
                        })
                })
        }).catch(err => {
            const errors = handleError(err);
            res.status(400).send('test error');
            
        })
    // const role = await new Role.create({name: "Admin", permissions_id: permission._id});
    
    // try{
    //     const user = await new User.create({ email, password, username: identification_number, role_Id: role._id });
    //     try {
    //         const school = await new School.create({ school_Name, city, ministry, phone_number, managerId: user._id });
    //         const token = createToken(user._id);
    //         res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    //         res.status(201).json({ user: user._id });
    //     } catch(err) {
    //         await User.deleteOne({ _id: user._id });
    //         const errors = handleError(err);
    //         res.status(400).json({errors});
    //     }
    // } catch(err) {
    //     await Permissions.deleteOne({ _id: permission._id });
    //     await Role.deleteOne({ _id: role._id });
    //     const errors = handleError(err);
    //     res.status(400).json({errors});
    // }
};

const auth_login_post = async (req,res) => {
    const {username, password} = req.body;
    
    if(validateEmail(username)) {
        try {
            const user = await User.loginUseEmail(username, password);
            const token = createToken(user._id);
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
            res.status(201).json({ user: user._id });
        } 
        catch(err) {
            const errors = handleError(err);
            res.status(400).json({errors});
        }
    } else if (!isNaN(username)){
        try {
            const user = await User.loginUsID(username, password);
            const token = createToken(user._id);
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
            res.status(201).json({ user: user._id });
        } 
        catch(err) {
            const errors = handleError(err);
            res.status(400).json({errors});
        }
    } else {
        res.send('Unnone');
    }
};

const auth_logout = (req,res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
};

function validateEmail(email) 
{
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
}

const validate = (req,res) => {
    console.log(validateEmail('anystring@anystring.'));
};

module.exports = {
    auth_singup, auth_login, auth_signup_post, auth_login_post, auth_logout
};