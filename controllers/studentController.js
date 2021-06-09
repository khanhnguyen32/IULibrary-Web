let controller = {};
let models = require('../models');
let Student = models.Student;
let bcrypt = require('bcryptjs');

controller.getStudentById = (studentID) => {
    return Student.findOne({
        where: { studentID: studentID }
    });
};

controller.createStudent = (student) => {
    var salt = bcrypt.genSaltSync(10);
    student.password = bcrypt.hashSync(student.password, salt);
    return Student.create(student);
};

controller.comparePassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
};
controller.isLoggedIn = (req, res, next) => {
    if (req.session.student) {
        next();
    } else {
        res.redirect(`/students/login?returnURL=${req.originalUrl}`);
    }
}
module.exports = controller;