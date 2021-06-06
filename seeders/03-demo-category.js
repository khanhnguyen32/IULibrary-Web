'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [
            { name: "textbook", imagePath: '/img/product/B1.jpg' },
            { name: "reference", imagePath: '/img/home/hero-slide2.png' },
            { name: "magazine", imagePath: '/img/home/hero-slide3.png' },
            { name: "research paper", imagePath: '/img/home/hero-slide1.png' },
            { name: "non-academic", imagePath: '/img/home/hero-slide2.png' }
        ];

        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });

        return queryInterface.bulkInsert('Categories', data, {});
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Categories', null, {});

    }
};