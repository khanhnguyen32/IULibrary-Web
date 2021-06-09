'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [{
                message: 'Tạm ổn hiuhiu',
                studentId: 1,
                bookId: 1,
                parentCommentId: null
            },
            {
                message: 'Tạm ổn hiuhiu',
                studentId: 1,
                bookId: 1,
                parentCommentId: null
            }
        ];

        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });

        return queryInterface.bulkInsert('Comments', data, {});

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Comments', null, {});
    }
};