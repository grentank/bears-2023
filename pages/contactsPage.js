const inquirer = require('inquirer');
const { User, Phone } = require('../db/models');

async function contactsPage(userId) {
  const pickedUser = await User.findOne({
    where: { id: userId },
    include: Phone,
  });

  return inquirer.prompt([
    {
      type: 'list',
      name: 'contactPageAction',
      message: `${pickedUser.name} phones:`,
      choices: [
        {
          name: 'Add phone',
          value: 'addPhone',
        },
        {
          name: 'Delete contact',
          value: 'deleteContact',
        },
        ...pickedUser.Phones.map((phone) => ({ name: phone.value, value: phone.id })),
      ],
    },
  ]);
}

module.exports = contactsPage;
