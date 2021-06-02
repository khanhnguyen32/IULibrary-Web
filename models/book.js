'use strict';
module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
        address: DataTypes.STRING,
        name: DataTypes.STRING,
        author: DataTypes.STRING,
        imagePath: DataTypes.TEXT,
        thumbnailPath: DataTypes.TEXT,
        availableQuantity: DataTypes.INTEGER,
        summary: DataTypes.TEXT,
        description: DataTypes.TEXT,
        overallReview: DataTypes.DOUBLE,
        reviewCount: DataTypes.INTEGER
    }, {});

    Book.associate = function(models) {

        Book.belongsTo(models.Major, { foreignKey: 'majorId' });
        Book.belongsTo(models.Publisher, { foreignKey: 'pulisherId' });
        Book.hasMany(models.Category, { foreignKey: 'bookId' });
        Book.hasMany(models.Comment, { foreignKey: 'bookId' });
        Book.hasMany(models.Review, { foreignKey: 'bookId' });

    };
    return Book;
};