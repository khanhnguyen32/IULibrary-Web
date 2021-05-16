'use strict';
module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        name: DataTypes.STRING,
        imagePath: DataTypes.TEXT
    }, {});

    Category.associate = function(models) {
        Category.belongsTo(models.Book, { foreignKey: 'bookId' });

    };
    return Category;
};