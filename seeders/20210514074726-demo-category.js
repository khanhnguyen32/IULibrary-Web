'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [{ name: "Business", summary: "Help more Business Knowledge",imagePath: '/img/home/business.png'},
      { name: "Computers & Tech", summary: "Help more Technology Knowledge",imagePath: 'img/home/Computer_Tech.jpg'},
      { name: "History", summary: "Help more Knowledge about History", imagePath: 'img/home/History.jpg'},
      { name: "Science",  summary: "Help more Knowledge of Science",imagePath: 'img/home/Science_Math.jpg'},
      { name: "Sport",  summary: "Help more Sport Knowledge",imagePath: 'img/home/Sport.jpg'}
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
