'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    message: DataTypes.TEXT
  },  {});

  Comment.associate = function(models){

    Comment.belongsTo(models.Student, { foreignKey: 'studentId'});
    Comment.belongsTo(models.Book, { foreignKey: 'bookId'});
    Comment.belongsTo(models.Comment, { as: 'Parent', foreignKey: 'parentCommentId'});
    Comment.hasMany(models.Comment, { as: 'SubComments', foreignKey: 'parentCommentId'});

  };
  return Comment;
};