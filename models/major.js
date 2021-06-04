'use strict';
module.exports = (sequelize, DataTypes) => {
    const Major = sequelize.define('Major', {
        name: DataTypes.STRING,
        summary: DataTypes.TEXT,
        imagePath: DataTypes.TEXT
    }, {});

    Major.associate = function(models) {
        Major.hasMany(models.Book, { foreignKey: 'majorId' });

    };
    return Major;
};