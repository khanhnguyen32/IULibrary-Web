let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    if ((req.query.major == null) || isNaN(req.query.major)) {
        req.query.major = 0;
    }
    if ((req.query.publisher == null) || isNaN(req.query.publisher)) {
        req.query.publisher = 0;
    }
    if ((req.query.category == null) || isNaN(req.query.category)) {
        req.query.category = 0;
    }
    if ((req.query.min == null) || isNaN(req.query.min)) {
        req.query.min = 0;
    }
    if ((req.query.max == null) || isNaN(req.query.max)) {
        req.query.max = 100000000;
    }
    if ((req.query.sort == null)) {
        req.query.sort = 'name';
    }
    if ((req.query.limit == null) || isNaN(req.query.limit)) {
        req.query.limit = 9;
    }
    if ((req.query.page == null) || isNaN(req.query.page)) {
        req.query.page = 1;
    }
    if ((req.query.search == null) || isNaN(req.query.search.trim() == '')) {
        req.query.search = '';
    }
    let majorController = require('../controllers/majorController');
    majorController
        .getAll(req.query)
        .then(data => {
            res.locals.majors = data;
            let publisherController = require('../controllers/publisherController');
            return publisherController.getAll(req.query);
        })
        .then(data => {
            res.locals.publishers = data;
            let categoryController = require('../controllers/categoryController');
            return categoryController.getAll(req.query);

        })
        .then(data => {
            res.locals.categories = data;
            let bookController = require('../controllers/bookController');
            return bookController.getAll(req.query);
        })
        .then(data => {
            res.locals.books = data.rows;
            res.locals.pagination = {
                page: parseInt(req.query.page),
                limit: parseInt(req.query.limit),
                totalRows: data.count
            }
            res.render('major');
        })
        .catch(error => next(error));

});

router.get('/:id', (req, res, next) => {
    let bookController = require('../controllers/bookController');
    bookController
        .getById(req.params.id)
        .then(book => {
            res.locals.book = book;
            let reviewController = require('../controllers/reviewController');
            return reviewController.getUserReviewProduct(
                req.session.user ? req.session.user.id : 0,
                req.params.id
            );
        })
        .then(review => {
            res.locals.userReview = review;
            res.render('singleproduct');
        })
        .catch(error => next(error));

});

module.exports = router;