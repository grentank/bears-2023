/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await res.json();

    await queryInterface.bulkInsert(
      'Comments',
      data.slice(0, 100).map((comment) => ({
        message: comment.name,
        authorId: Math.floor(Math.random() * 6) + 1,
        quoteId: comment.postId,
      })),
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
