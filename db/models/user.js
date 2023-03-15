const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Comment, Quote }) {
      this.hasMany(Comment, {
        foreignKey: 'authorId',
        as: 'comments',
      });
      this.belongsToMany(Quote, {
        through: 'Comments',
        foreignKey: 'authorId',
        as: 'commentedTo',
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
