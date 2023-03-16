const inquirer = require('inquirer');
const { User } = require('../db/models');

async function mainPage() {
  const allUsers = await User.findAll();

  return inquirer.prompt([
    {
      type: 'list',
      name: 'main',
      message: 'Contacts:',
      choices: [
        {
          name: 'Add contact',
          value: 'add',
        },
        ...allUsers.map((user) => ({ name: user.name, value: user.id })),
      ],
    },
  ]);
}

module.exports = mainPage;
