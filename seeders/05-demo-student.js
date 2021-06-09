'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { studentID: "ITITIU18234", password: "123", fullname: "Nguyen Ngoc Mai Oanh", avatarPath: '../img/user/maioanhcute.jpg', isAdmin: false },
            { studentID: "ITITIU18186", password: "123", fullname: "Nguyen Quoc Khanh", avatarPath: '../img/user/hellokatun.jpg', isAdmin: false },
            { studentID: "ITITIU18217", password: "123", fullname: "Tran Quoc Thinh", avatarPath: '../img/user/thinhtran.jpg', isAdmin: false },
        ];

        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });

        return queryInterface.bulkInsert('Students', data, {});

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Students', null, {});
    }
};