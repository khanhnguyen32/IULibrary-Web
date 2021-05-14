'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [{ name: "Business", imagePath: '/img/home/business.png'},
      { name: "Computers & Tech", imagePath: 'img/home/Computer_Tech.jpg'},
      { name: "History", imagePath: 'img/home/History.jpg'},
      { name: "Science & Math", imagePath: 'img/home/Science_Math.jpg'},
      { name: "Sport", imagePath: 'img/home/Sport.jpg'}
    ];
    
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });

    return queryInterface.bulkInsert('Categories', data, {});
   
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
    
  }
};
