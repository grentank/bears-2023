const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Phone.init(
    {
      value: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Phone',
    },
  );
  return Phone;
};
