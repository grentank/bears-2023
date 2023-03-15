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
6. Для того, чтобы Sequelize отслеживал накатанные сиды, можно добавить в файл `database.json` в режим `development` такие строчки:

   ```json
   {
     "seederStorage": "sequelize",
     "seederStorageTableName": "SequelizeData"
   }
   ```

7. Создаём БД (если нужно) через `npx sequelize-cli db:create`
8. Создаём модель через `npx sequelize-cli model:generate --name Student --attributes name:string,groupId:integer`
9. Прописать связи в миграциях:

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

10. В миграциях можно добавить строчку на значение по умолчанию, например, для полей `createdAt, updatedAt`:

    ```js
    {
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW'),
        },
        updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW'),
        }
    }
    ```

11. Можно уже накатывать миграции `npx sequelize-cli db:migrate`, а откатывать через `npx sequelize-cli db:migrate:undo:all`
12. Прописать ассоциации в моделях:

    ```js
        static associate({ Group, Post }) {
        this.belongsTo(Group, { foreignKey: 'groupId' });
        this.hasMany(Post, { foreignKey: 'authorId' });
        }
    ```

13. Создаём сиды: `npx sequelize-cli seed:create --name seed-name`
14. Используем шаблон внутри созданного файла с помощью методов `bulkInsert` и `bulkDelete`
15. Можно уже накатывать сиды `npx sequelize-cli db:seed:all`, а откатывать через `npx sequelize-cli db:seed:undo:all`
16. Импортируем модели: `const { Group, Student, Post } = require('./db/models');`
17. Для связи Many-To-Many можно использовать ассоциацию `belongsToMany`:

    ```js
    class User extends Model {
      static associate({ Comment, Quote }) {
        this.belongsToMany(Quote, {
          through: 'Comments',
          foreignKey: 'authorId',
        });
      }
    }
    ```

18. Можно сочетать оба подхода с помощью Super Many-To-Many. Тогда стоит прописать alias через ключ `as`, чтобы Sequelize мог понять, какую именно таблицу присоединять:

    ```js
    class User extends Model {
      static associate({ Comment, Quote }) {
        this.hasMany(Comment, {
          foreignKey: 'authorId',
          as: 'comments',
        });
        this.belongsToMany(Quote, {
          through: 'Comments',
          foreignKey: 'authorId',
          as: 'commentedTo',
        });
      }
    }

    class Quote extends Model {
      static associate({ Comment, User }) {
        this.hasMany(Comment, {
          foreignKey: 'quoteId',
          as: 'reviews',
        });
        this.belongsToMany(User, {
          through: 'Comments',
          foreignKey: 'quoteId',
          as: 'commentsFrom',
        });
      }
    }

    class Comment extends Model {
      static associate(models) {
        this.belongsTo(models.User, {
          foreignKey: 'authorId',
          as: 'author',
        });
        this.belongsTo(models.Quote, {
          foreignKey: 'quoteId',
          as: 'reviewTo',
        });
      }
    }
    ```
