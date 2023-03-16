/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [{ name: 'Alex' }, { name: 'Bob' }, { name: 'Beb' }],
      {},
    );
    await queryInterface.bulkInsert(
      'Phones',
      [
        { value: '84956273812', userId: 1 },
        { value: '87896273212', userId: 1 },
        { value: '+1345956273812', userId: 1 },
        { value: '32791237142', userId: 2 },
        { value: '827-323-123', userId: 2 },
        { value: '+12312', userId: 2 },
        { value: '111111111', userId: 3 },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Phones', null, {});
  },
};
