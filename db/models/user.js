const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Phone }) {
      this.hasMany(Phone, { foreignKey: 'userId' });
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
