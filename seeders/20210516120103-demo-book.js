'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [
            { address: "01.001", name: "textbook", author: "test", imagePath: '/img/home/hero-slide1.png', thumbnailPath: "", availableQuantity: 1, summary: "test", description: "test", overallReview: 0, reviewCount: 0 },
            { address: "01.001", name: "textbook", author: "test", imagePath: '/img/home/hero-slide1.png', thumbnailPath: "", availableQuantity: 1, summary: "test", description: "test", overallReview: 0, reviewCount: 0 },
            { address: "01.001", name: "textbook", author: "test", imagePath: '/img/home/hero-slide1.png', thumbnailPath: "", availableQuantity: 1, summary: "test", description: "test", overallReview: 0, reviewCount: 0 },
            { address: "01.001", name: "textbook", author: "test", imagePath: '/img/home/hero-slide1.png', thumbnailPath: "", availableQuantity: 1, summary: "test", description: "test", overallReview: 0, reviewCount: 0 },
            { address: "01.001", name: "textbook", author: "test", imagePath: '/img/home/hero-slide1.png', thumbnailPath: "", availableQuantity: 1, summary: "test", description: "test", overallReview: 0, reviewCount: 0 },
            { address: "01.001", name: "textbook", author: "test", imagePath: '/img/home/hero-slide1.png', thumbnailPath: "", availableQuantity: 1, summary: "test", description: "test", overallReview: 0, reviewCount: 0 },
            { address: "01.001", name: "textbook", author: "test", imagePath: '/img/home/hero-slide1.png', thumbnailPath: "", availableQuantity: 1, summary: "test", description: "test", overallReview: 0, reviewCount: 0 },
            { address: "01.001", name: "textbook", author: "test", imagePath: '/img/home/hero-slide1.png', thumbnailPath: "", availableQuantity: 1, summary: "test", description: "test", overallReview: 0, reviewCount: 0 },
            { address: "01.001", name: "textbook", author: "test", imagePath: '/img/home/hero-slide1.png', thumbnailPath: "", availableQuantity: 1, summary: "test", description: "test", overallReview: 0, reviewCount: 0 },
            { address: "01.001", name: "textbook", author: "test", imagePath: '/img/home/hero-slide1.png', thumbnailPath: "", availableQuantity: 1, summary: "test", description: "test", overallReview: 0, reviewCount: 0 }
        ];

        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });

        return queryInterface.bulkInsert('Books', data, {});
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Books', null, {});
    }
};