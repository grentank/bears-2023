const axios = require('axios');
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { data: users } = await axios('https://jsonplaceholder.typicode.com/users');

    await queryInterface.bulkInsert(
      'Users',
      users.map((user) => ({
        name: user.name,
        hashpass: bcrypt.hashSync('123', 1),
        email: user.email,
      })),
      {},
    );

    const { data: posts } = await axios('https://jsonplaceholder.typicode.com/posts');
    await queryInterface.bulkInsert(
      'Posts',
      posts.map((post) => ({ title: post.title, body: post.body, userId: post.userId })),
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
