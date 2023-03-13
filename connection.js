const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('students', 'admin', '123', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;

// (async function () {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// })();
