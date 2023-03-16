const inquirer = require('inquirer');
const { Phone } = require('../db/models');

async function phonesPage(phoneId) {
  const pickedPhone = await Phone.findOne({ where: { id: phoneId } });

  return inquirer.prompt([
    {
      type: 'list',
      name: 'phonePageAction',
      message: `-->${pickedPhone.value}`,
      choices: [
        {
          name: 'Edit',
          value: 'editPhone',
        },
        {
          name: 'Delete',
          value: 'deletePhone',
        },
      ],
    },
  ]);
}

module.exports = phonesPage;
