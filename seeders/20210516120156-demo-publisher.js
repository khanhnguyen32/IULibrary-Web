'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [
            { name: "Deitel", summary: "", imagePath: '/img/home/hero-slide1.png' },
            { name: "Pearson", summary: "", imagePath: '/img/home/hero-slide1.png' },
            { name: "Bloomberg", summary: "", imagePath: '/img/home/hero-slide1.png' }
        ];

        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });

        return queryInterface.bulkInsert('Publishers', data, {});
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Publishers', null, {});
    }
};