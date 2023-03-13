const sequelize = require('./connection');

// async function getBears() {
//   //   const [results] = await sequelize.query(`
//   //     SELECT * FROM bears;
//   //     `);
//   //   //   console.log(results.map((el) => el.name));
//   //   console.log(results.sort((bear1, bear2) => bear2.age - bear1.age));
//   const [results] = await sequelize.query(`
//     SELECT name FROM bears ORDER BY age DESC;
//     `);
//   console.log(results);
// }

async function run() {
  const [results] = await sequelize.query(`

    DROP TABLE IF EXISTS posts;

    DROP TABLE IF EXISTS bears;

    CREATE TABLE bears (
        id serial PRIMARY KEY,
        name varchar(20),
        age integer
    );

    CREATE TABLE posts (
        id serial PRIMARY KEY,
        body text,
        "authorId" INTEGER REFERENCES bears(id) ON DELETE SET NULL
    );

    INSERT INTO bears (name, age) VALUES
        ('Misha', 20),
        ('Aina', 25),
        ('Bob', 34);

    INSERT INTO posts (body, "authorId") VALUES
        ('Hello from Misha!', 1),
        ('Is anybody here?', 1),
        ('Greetings!', 2),
        ('I am Beb', 3),
        ('bye', 3),
        ('👋', 2);

        DELETE FROM bears WHERE name = 'Bob';

        SELECT * FROM posts;
    `);

  // SELECT * from bears JOIN posts ON bears.id = posts.authorId;

  console.log(results);
}

// async function run() {
//     const [results] = await sequelize.query(`
//         UPDATE bears SET age = 50 WHERE name = 'Bob';

//         DELETE FROM posts WHERE authorId = 3;

//         DELETE FROM bears WHERE name = 'Bob';
//       `);

//     console.log(results);
//   }

run();
