const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'authorId',
        as: 'author',
      });
      this.belongsTo(models.Quote, {
        foreignKey: 'quoteId',
        as: 'reviewTo',
      });
    }
  }
  Comment.init(
    {
      message: DataTypes.TEXT,
      authorId: DataTypes.INTEGER,
      quoteId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Comment',
    },
  );
  return Comment;
};
