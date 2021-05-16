'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { name: "Business", summary: "", imagePath: '/img/home/hero-slide1.png' },
            { name: "IT & Tech", summary: "", imagePath: '/img/home/hero-slide2.png' },
            { name: "Bio, Food & Chemistry", summary: "", imagePath: '/img/home/hero-slide3.png' },
            { name: "English Linguistics", summary: "", imagePath: '/img/home/hero-slide1.png' },
            { name: "Industry & Systems", summary: "", imagePath: '/img/home/hero-slide2.png' }
        ];

        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });

        return queryInterface.bulkInsert('Majors', data, {});

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Majors', null, {});
    }
};