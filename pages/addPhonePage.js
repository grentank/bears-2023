const inquirer = require('inquirer');

async function addPhonePage() {
  const questions = [
    {
      type: 'input',
      name: 'value',
      message: 'Add a phone number to a contact:',
    },
  ];

  return inquirer.prompt(questions);
}

module.exports = addPhonePage;
