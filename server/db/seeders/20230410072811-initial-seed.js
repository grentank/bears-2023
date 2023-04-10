const axios = require('axios');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const response = await axios('https://jsonplaceholder.typicode.com/posts');
    await queryInterface.bulkInsert(
      'Posts',
      response.data.map((post) => ({ title: post.title })),
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
