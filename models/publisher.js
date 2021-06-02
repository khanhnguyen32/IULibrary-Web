'use strict';
module.exports = (sequelize, DataTypes) => {
    const Publisher = sequelize.define('Publisher', {
        name: DataTypes.STRING,
        summary: DataTypes.TEXT,
        imagePath: DataTypes.TEXT
    }, {});

    Publisher.associate = function(models) {
        Publisher.hasMany(models.Book, { foreignKey: 'publisherId' });

    };
    return Publisher;
};