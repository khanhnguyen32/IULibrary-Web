'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [{ name: "Business", summary: "", imagePath: '/img/home/hero-slide1.png' },
            { name: "Computers & Tech", summary: "", imagePath: '/img/home/hero-slide2.png' },
            { name: "History", summary: "", imagePath: '/img/home/hero-slide3.png' },
            { name: "Science & Math", summary: "", imagePath: '/img/home/hero-slide1.png' },
            { name: "Sport", summary: "", imagePath: '/img/home/hero-slide2.png' }
        ];

        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });

        return queryInterface.bulkInsert('Categories', data, {});

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Categories', null, {});
    }
};