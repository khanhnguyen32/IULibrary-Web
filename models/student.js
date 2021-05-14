'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    studentID: DataTypes.STRING,
    password: DataTypes.STRING,
    fullname: DataTypes.STRING,
    avatarPath: DataTypes.TEXT,
    isAdmin: DataTypes.BOOLEAN
  },  {});

  Student.associate = function(models){
    Student.hasMany(models.Comment, { foreignKey: 'studentId'});
    Student.hasMany(models.Review, { foreignKey: 'studentId'});

  };
  return Student;
};