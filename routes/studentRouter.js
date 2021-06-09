let express = require('express');
let router = express.Router();
let studentController = require('../controllers/studentController');

router.get('/login', (req, res) => {
    req.session.returnURL = req.query.returnURL;
    res.render('login');
});

router.post('/login', (req, res, next) => {
    let studentID = req.body.studentID;
    let password = req.body.password;
    let keepLoggedIn = req.body.keepLoggedIn != undefined;
    studentController
        .getStudentById(studentID)
        .then(student => {
            if (student) {
                if (studentController.comparePassword(password, student.password)) {
                    req.session.cookie.maxAge = keepLoggedIn ? 24 * 30 * 60 * 60 * 100 : null;
                    req.session.student = student;
                    if (req.session.returnURL) {
                        res.redirect(req.session.returnURL);
                    } else {
                        res.redirect('/');
                    }
                    res.redirect('/');
                } else {
                    res.render('login', {
                        message: "Incorrect Password!",
                        type: 'alert-danger'
                    });
                }
            } else {
                res.render('login', {
                    message: 'Student ID does not exist!',
                    type: 'alert-danger'
                });
            }
        })
});
router.get('/register', (req, res) => {
    res.render('register');
});
router.post('/register', (req, res, next) => {
    let fullname = req.body.fullname;
    let studentID = req.body.studentID;
    let password = req.body.password

    let confirmPassword = req.body.confirmPassword;
    let keepLoggedIn = (req.body.keepLoggedIn != undefined);

    if (password != confirmPassword) {
        return res.render('register', {
            message: 'Confirm password does not match!',
            type: 'alert-danger'
        });
    }

    studentController
        .getStudentById(studentID)
        .then(student => {
            if (student) {
                return res.render('register', {
                    message: `ID ${studentID} existed! Enter another ID.`,
                    type: 'alert-danger'

                });
            }
            student = {
                fullname,
                studentID: studentID,
                password
            };
            return studentController
                .createStudent(student)
                .then(student => {
                    if (keepLoggedIn) {
                        req.session.cookie.maxAge = 24 * 30 * 60 * 60 * 100;
                        req.session.student = student;
                        res.redirect('/');
                    } else {
                        return res.render('login', {
                            message: 'Register Done! You can login now',
                            type: 'alert-primary'
                        });
                    }
                });

        })
        .catch(error => next(error));
});
router.get('/logout', (req, res, next) => {
    req.session.destroy(error => {
        if (error) {
            return next(error)
        };
        return res.redirect('/students/login');
    })
})

module.exports = router;