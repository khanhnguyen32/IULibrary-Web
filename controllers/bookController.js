let controller = {};
let models = require('../models')
let Book = models.Book;
let Sequelize = require('sequelize');
let Op = Sequelize.Op;

controller.getTrendingProducts = () => {
    return new Promise((resolve, reject) => {
        Book
            .findAll({
                order: [
                    ['overallReview', 'DESC']
                ],
                limit: 8,
                include: [{ model: models.Major }, { model: models.Publisher }],
                attributes: ['id', 'name', 'imagepath', 'availableQuantity']
            })
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};

controller.getAll = (query) => {
    return new Promise((resolve, reject) => {
        let options = {
            include: [{ model: models.Major },
                { model: models.Publisher }
            ],
            attributes: ['id', 'name', 'imagePath', 'availableQuantity', 'majorId'],
            where: {
                availableQuantity: {
                    [Op.gte]: query.min,
                    [Op.lte]: query.max
                }
            }
        };
        if (query.major > 0) {
            options.where.majorId = query.major;
        }
        if (query.search != '') {
            options.where.name = {
                [Op.iLike]: `%${query.search}%`
            }
        }
        if (query.publisher > 0) {
            options.where.publisherId = query.publisher;
        }
        if (query.category > 0) {
            options.where.publisherId = query.publisher;
        }
        if (query.limit > 0) {
            options.limit = query.limit;
            options.offset = query.limit * (query.page - 1);
        }
        if (query.sort) {
            switch (query.sort) {
                case 'name':
                    options.order = [
                        ['name', 'ASC']
                    ];
                    break;
                case 'price':
                    options.order = [
                        ['price', 'ASC']
                    ];
                    break;
                case 'overallReview':
                    options.order = [
                        ['overallReview', 'DESC']
                    ];
                    break;
                default:
                    options.order = [
                        ['name', 'ASC']
                    ];
            }
        }
        Book
            .findAndCountAll(options)
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};

controller.getById = (id) => {
    return new Promise((resolve, reject) => {
        let book;
        Book
            .findOne({
                where: { id: id },
                include: [{ model: models.Major }],
            })
            .then(result => {
                book = result;
                return models.Comment.findAll({
                    where: { bookId: id, parentCommentId: null },
                    include: [
                        { model: models.User },
                        {
                            model: models.Comment,
                            as: 'SubComments',
                            include: [{ model: models.User }]
                        }
                    ]
                });
            })
            .then(comments => {
                book.Comments = comments;
                return models.Review.findAll({
                    where: { bookId: id },
                    include: [{ model: models.User }]
                });
            })
            .then(reviews => {
                product.Reviews = reviews;

                let stars = [];
                for (let i = 1; i <= 5; i++) {
                    stars.push(reviews.filter(item => (item.rating == i)).length);
                }
                book.stars = stars;
                resolve(book);
            })
            .catch(error => reject(new Error(error)));
    });
};
module.exports = controller;