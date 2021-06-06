'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [
            { name: "Deitel", summary: "", imagePath: '/img/product/B1.jpg' },
            { name: "CreateSpace Independent Publishing Platform", summary: "", imagePath: '/img/home/hero-slide1.png' },
            { name: "Bloomberg", summary: "", imagePath: '/img/home/hero-slide1.png' },
            { name: "Oxford", summary: "", imagePath: '/img/home/hero-slide1.png' },
            { name: "Cambridge", summary: "", imagePath: '/img/home/hero-slide1.png' },
            { name: "California", summary: "", imagePath: '/img/home/hero-slide1.png' },
            { name: "The MIT Press", summary: "", imagePath: '/img/home/hero-slide1.png' },
            { name: "Cengage Learning", summary: "", imagePath: '/img/home/hero-slide1.png' },
            { name: "Elsevier", summary: "", imagePath: '/img/home/hero-slide1.png' },
            { name: "ForDummies", summary: "", imagePath: '/img/home/hero-slide1.png' },
            { name: "Wrox", summary: "", imagePath: '/img/home/hero-slide1.png' },
            { name: "Apress", summary: "", imagePath: '/img/home/hero-slide1.png' }
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