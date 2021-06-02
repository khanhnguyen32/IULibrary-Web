let controller = {};
let models = require('../models')
let Publisher = models.Publisher;
let Sequelize = require('sequelize');
let Op = Sequelize.Op;

controller.getAll = (query) => {
    return new Promise((resolve, reject) => {
        let options = {
            attributes: ['id', 'name', 'imagePath'],
            include: [{
                model: models.Book,
                attributes: ['id'],
                where: {
                    availableQuantity: {
                        [Op.gte]: query.min,
                        [Op.lte]: query.max
                    }
                }
            }]
        };

        if (query.major > 0) {
            options.include[0].where.majorId =
                query.major;
        }
        if (query.search != '') {
            options.include[0].where.name = {
                [Op.iLike]: `%${query.search}%`
            }
        }
        if (query.category > 0) {
            options.include[0].where.categoryId =
                query.category;
        }

        Publisher
            .findAll(options)
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};
module.exports = controller;