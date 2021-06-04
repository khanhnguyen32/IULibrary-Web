'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [
            { address: "01.001", name: "textbook", author: "test", imagePath: '/img/home/hero-slide1.png', thumbnailPath: "", availableQuantity: 1, summary: "test", description: "test", overallReview: 0, reviewCount: 0, majorId: 1, publisherId: 1, categoryId: 2 },
            { address: "01.001", name: "textbook", author: "test", imagePath: '/img/home/hero-slide1.png', thumbnailPath: "", availableQuantity: 1, summary: "test", description: "test", overallReview: 0, reviewCount: 0, majorId: 1, publisherId: 1, categoryId: 2 },
            { address: "01.001", name: "textbook", author: "test", imagePath: '/img/home/hero-slide1.png', thumbnailPath: "", availableQuantity: 1, summary: "test", description: "test", overallReview: 0, reviewCount: 0, majorId: 1, publisherId: 1, categoryId: 2 },
            { address: "01.001", name: "textbook", author: "test", imagePath: '/img/home/hero-slide1.png', thumbnailPath: "", availableQuantity: 1, summary: "test", description: "test", overallReview: 0, reviewCount: 0, majorId: 1, publisherId: 1, categoryId: 2 },
            { address: "01.001", name: "textbook", author: "test", imagePath: '/img/home/hero-slide1.png', thumbnailPath: "", availableQuantity: 1, summary: "test", description: "test", overallReview: 0, reviewCount: 0, majorId: 2, publisherId: 2, categoryId: 1 },
            { address: "01.001", name: "textbook", author: "test", imagePath: '/img/home/hero-slide1.png', thumbnailPath: "", availableQuantity: 1, summary: "test", description: "test", overallReview: 0, reviewCount: 0, majorId: 2, publisherId: 2, categoryId: 1 },
            { address: "01.001", name: "textbook", author: "test", imagePath: '/img/home/hero-slide1.png', thumbnailPath: "", availableQuantity: 1, summary: "test", description: "test", overallReview: 0, reviewCount: 0, majorId: 3, publisherId: 1, categoryId: 1 },
            { address: "01.001", name: "textbook", author: "test", imagePath: '/img/home/hero-slide1.png', thumbnailPath: "", availableQuantity: 1, summary: "test", description: "test", overallReview: 0, reviewCount: 0, majorId: 4, publisherId: 1, categoryId: 1 },
            { address: "01.001", name: "textbook", author: "test", imagePath: '/img/home/hero-slide1.png', thumbnailPath: "", availableQuantity: 1, summary: "test", description: "test", overallReview: 0, reviewCount: 0, majorId: 5, publisherId: 1, categoryId: 1 },
            { address: "01.001", name: "textbook", author: "test", imagePath: '/img/home/hero-slide1.png', thumbnailPath: "", availableQuantity: 1, summary: "test", description: "test", overallReview: 0, reviewCount: 0, majorId: 5, publisherId: 1, categoryId: 1 }
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