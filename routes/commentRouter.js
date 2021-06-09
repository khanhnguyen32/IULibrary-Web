let express = require('express');
let router = express.Router();
let studentController = require('../controllers/studentController');

router.post('/', studentController.isLoggedIn, (req, res, next) => {
    let controller = require('../controllers/commentController');
    let comment = {
        studentId: req.session.student.id,
        bookId: req.body.bookId,
        message: req.body.message
    };
    if (!isNaN(req.body.parentCommentId) && (req.body.parentCommentId != '')) {
        comment.parentCommentId = req.body.parentCommentId;
    }

    controller
        .add(comment)
        .then(data => {
            res.redirect('/book/' + data.bookId);
        })
        .catch(error => next(error));
});

module.exports = router;