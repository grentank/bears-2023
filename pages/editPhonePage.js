const inquirer = require('inquirer');

async function editPhonePage() {
  const questions = [
    {
      type: 'input',
      name: 'value',
      message: 'Edit number:',
    },
  ];

  return inquirer.prompt(questions);
}

module.exports = editPhonePage;
