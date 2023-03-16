const inquirer = require('inquirer');

async function addContactPage() {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: "Enter new contact's name",
    },
    {
      type: 'input',
      name: 'phone',
      message: 'Enter new phone number',
    },
  ];

  return inquirer.prompt(questions);
}

module.exports = addContactPage;
