/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Alex',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Bob',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Charlie',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Dilan',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Epoch',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Fedor',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );

    const response = await fetch('https://api.quotable.io/quotes');
    const data = await response.json();

    await queryInterface.bulkInsert(
      'Quotes',
      data.results.map((quote) => ({
        body: quote.content,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});

    await queryInterface.bulkDelete('Quotes', null, {});
  },
};
