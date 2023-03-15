const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Quote extends Model {
    static associate({ Comment, User }) {
      this.hasMany(Comment, { 
        foreignKey: 'quoteId',
        as: 'reviews'
       });
      this.belongsToMany(User, { 
        through: 'Comments', 
        foreignKey: 'quoteId',
        as: 'commentsFrom'
       });
    }
  }
  Quote.init(
    {
      body: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Quote',
    },
  );
  return Quote;
};
