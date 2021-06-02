let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    let majorController = require('../controllers/majorController');
    majorController
        .getAll()
        .then(data => {
            res.locals.majors = data;
            let bookController = require('../controllers/bookController');
            return bookController.getTrendingProducts();

        })
        .then(data => {
            res.locals.trendingProducts = data;
            res.render('index');
        })
        .catch(error => next(error));
});


module.exports = router;