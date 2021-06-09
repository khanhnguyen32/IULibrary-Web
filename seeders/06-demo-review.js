'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [{ message: "Good book. I love it", rating: 5, studentId: 1, bookId: 1 },
            { message: "Good book. I love it", rating: 5, studentId: 1, bookId: 1 }
        ];

        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });

        return queryInterface.bulkInsert('Reviews', data, {});

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Reviews', null, {});
    }
};