let controller = {};
let models = require('../models')
let Review = models.Review;
let Sequelize = require('sequelize');
let Op = Sequelize.Op;

controller.add = (review) => {
    return new Promise((resolve, reject) => {
        Review
            .findOne({
                where: {
                    studentId: review.studentId,
                    bookId: review.bookId
                }
            })
            .then(data => {
                if (data) {
                    return Review.update(review, {
                        where: {
                            studentId: review.studentId,
                            bookId: review.bookId
                        }
                    })
                } else {
                    return Review.create(review);
                }
            })

        .then(() => {
            models.Book
                .findOne({
                    where: { id: review.bookId },
                    include: [{ model: models.Review }]

                })
                .then(book => {
                    let overallReview = 0;
                    for (let i = 0; i < book.Reviews.length; i++) {
                        overallReview += book.Reviews[i].rating;
                    }
                    overallReview = overallReview / book.Reviews.length;
                    return models.Book.update({
                        overallReview: overallReview,
                        reviewCount: book.Reviews.length
                    }, {
                        where: { id: book.id }
                    })
                });
        })

        .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};

controller.getStudentReviewBook = (studentId, bookId) => {
    return Review.findOne({
        where: {
            studentId,
            bookId
        }
    });
};
module.exports = controller;