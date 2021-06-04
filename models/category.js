'use strict';
module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        name: DataTypes.STRING,
        imagePath: DataTypes.TEXT
    }, {});

    Category.associate = function(models) {
        Category.hasMany(models.Book, { foreignKey: 'categoryId' });

    };
    return Category;
};