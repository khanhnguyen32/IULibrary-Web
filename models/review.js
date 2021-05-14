'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    message: DataTypes.TEXT,
    rating: DataTypes.INTEGER
  },  {});

  Review.associate = function(models){
    Review.belongsTo(models.Student, { foreignKey: 'studentId'});
    Review.belongsTo(models.Book, { foreignKey: 'bookId'});

  };
  return Review;
};