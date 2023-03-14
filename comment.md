0. Выполнить инициализацию проекта
1. Установить зависимости для sequelize `npm install sequelize pg pg-hstore`
2. Установить sequelize-cli `npm install --save-dev sequelize-cli`
3. Создаём файл `.sequelizerc`:

   ```js
   const path = require('path');
   module.exports = {
     config: path.resolve('db', 'database.json'),
     'models-path': path.resolve('db', 'models'),
     'seeders-path': path.resolve('db', 'seeders'),
     'migrations-path': path.resolve('db', 'migrations'),
   };
   ```

4. Инициализируем sequelize: `npx sequelize-cli init`
5. Ввели данные для подключения в файле `database.json`
6. Создаём БД (если нужно) через `npx sequelize-cli db:create`
7. Создаём модель через `npx sequelize-cli model:generate --name Student --attributes name:string,groupId:integer`
8. Прописать связи в миграциях:

```js
{
    groupId: {
        type: Sequelize.INTEGER,
        references: {
            model: {
                tableName: 'Groups'
            },
            key: 'id'
        },
        allowNull: false,
        onDelete: 'CASCADE'
    }
}
```

9. Можно уже накатывать миграции `npx sequelize-cli db:migrate`, а откатывать через `npx sequelize-cli db:migrate:undo:all`
10. Прописать ассоциации в моделях:

```js
    static associate({ Group, Post }) {
      this.belongsTo(Group, { foreignKey: 'groupId' });
      this.hasMany(Post, { foreignKey: 'authorId' });
    }
```

11. Импортируем модели: `const { Group, Student, Post } = require('./db/models');`