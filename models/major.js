'use strict';
module.exports = (sequelize, DataTypes) => {
  const Major = sequelize.define('Major', {
    name: DataTypes.STRING,
    imagePath: DataTypes.TEXT
  },  {});

  Major.associate = function(models){
    Major.belongsTo(models.Book, { foreignKey: 'bookId'});

  };
  return Major;
};