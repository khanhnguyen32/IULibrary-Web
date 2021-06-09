let express = require('express');
let router = express.Router();
let studentController = require('../controllers/studentController');

router.post('/', studentController.isLoggedIn, (req, res, next) => {
    let controller = require('../controllers/reviewController');
    let review = {
        studentId: req.session.student.id,
        bookId: req.body.bookId,
        rating: req.body.rating,
        message: req.body.message
    };

    controller
        .add(review)
        .then(() => {
            res.redirect('/book/' + review.bookId);
        })
        .catch(error => next(error));
});

module.exports = router;