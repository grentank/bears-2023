const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Group, Post }) {
      this.belongsTo(Group, { foreignKey: 'groupId' });
      this.hasMany(Post, { foreignKey: 'authorId' });
    }
  }
  Student.init(
    {
      name: DataTypes.STRING,
      groupId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Student',
    },
  );
  return Student;
};
