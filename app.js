const inquirer = require('inquirer');
const { User, Phone } = require('./db/models');
const addContactPage = require('./pages/addContactPage');
const addPhonePage = require('./pages/addPhonePage');
const contactsPage = require('./pages/contactsPage');
const editPhonePage = require('./pages/editPhonePage');
const mainPage = require('./pages/mainPage');
const phonesPage = require('./pages/phonesPage');

async function run() {
  console.clear();
  const { main: mainPageAction } = await mainPage();
  if (mainPageAction === 'add') {
    const { name, phone } = await addContactPage();
    const newUser = await User.create({ name });
    await Phone.create({ value: phone, userId: newUser.id });
    return run();
  }

  const userId = mainPageAction;
  const { contactPageAction } = await contactsPage(userId);
  if (contactPageAction === 'addPhone') {
    const { value } = await addPhonePage();
    await Phone.create({ value, userId });
    return run();
  }

  if (contactPageAction === 'deleteContact') {
    await User.destroy({ where: { id: userId } });
    return run();
  }

  const phoneId = contactPageAction;
  const { phonePageAction } = await phonesPage(phoneId);

  if (phonePageAction === 'deletePhone') {
    await Phone.destroy({ where: { id: phoneId } });
    return run();
  }

  const { value } = await editPhonePage();
  await Phone.update(
    { value },
    {
      where: { id: phoneId },
    },
  );
  return run();
}

run();
