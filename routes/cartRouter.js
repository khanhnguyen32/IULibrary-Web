let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    var cart = req.session.cart;
    res.locals.cart = cart.getCart();
    res.render('cart');
});


router.post('/', (req, res, next) => {
    var bookId = req.body.id;
    var quantity = isNaN(req.body.quantity) ? 1 : req.body.quantity;
    var bookController = require('../controllers/bookController');
    bookController
        .getById(bookId)
        .then(book => {
            var cartitem = req.session.cart.add(book, bookId, quantity);
            res.json(cartitem);
        })
        .catch(error => next(error));
})
router.put('/', (req, res) => {
    var bookId = req.body.id;
    var quantity = parseInt(req.body.quantity);
    var cartItem = req.session.cart.update(bookId, quantity);
    res.json(cartItem);
});

router.delete('/', (req, res) => {
    var bookId = req.body.id;
    req.session.cart.remove(bookId);
    res.json({
        totalQuantity: req.session.cart.totalQuantity,

    });
});
router.delete('/all', (req, res) => {
    req.session.cart.empty();
    res.sendStatus(204);
    res.end();
});

module.exports = router;