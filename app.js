const { Group, Student, Post } = require('./db/models');

const prettyString = (obj) => JSON.parse(JSON.stringify(obj));

(async function () {
  try {
    // await Group.create({ title: 'Bears' })
    // await Student.create({
    //   name: 'Alex',
    //   groupId: 1,
    // });
    // const alex = await Student.findOne({ where: { name: 'Alex' } });
    // console.log(alex);
    // await Group.bulkCreate([{ title: 'Bears' }, { title: 'Bees' }, { title: 'Beavers' }]);
    // await Student.bulkCreate([
    //   { name: 'Tikhon', groupId: 1 },
    //   { name: 'Emin', groupId: 1 },
    //   { name: 'Katya', groupId: 1 },
    //   { name: 'Leonid', groupId: 2 },
    //   { name: 'Zori', groupId: 2 },
    //   { name: 'Magomed', groupId: 2 },
    //   { name: 'Natasha', groupId: 3 },
    //   { name: 'Alexey', groupId: 3 },
    //   { name: 'Ibragim', groupId: 3 },
    // ]);
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const posts = await response.json();
    // await Post.bulkCreate(
    //   posts
    //     .filter((post) => post.userId <= 9)
    //     .map((post) => ({ body: post.body, authorId: post.userId })),
    // );

    // await Student.update({ name: 'Maga' }, { where: { name: 'Magomed' } });

    // const students = await Student.findAll({
    //   where: { groupId: 2 },
    // });

    // console.log('Alexey posts: ', prettyString(students));

    // const alexey = await Student.findOne({ where: { name: 'Alexey' } });

    // const alexeyPosts = await Post.findAll({
    //   where: { authorId: alexey.id },
    // });

    // await Student.destroy({ where: { id: alexey.id } });

    // const deletedPosts = await Post.findAll({
    //   where: { authorId: null },
    // });

    // console.log('Alexey posts: ', prettyString(alexeyPosts));
    // console.log('Deleted posts: ', prettyString(deletedPosts));

    // const tikhon = await Student.findOne({
    //   where: { name: 'Tikhon' },
    //   include: Post,
    // });
    // console.log(prettyString(tikhon.Posts.map((post) => post.body.slice(0, 5))));

    // const onePost = await Post.findOne({
    //   where: { id: 14 },
    //   include: {
    //     model: Student,
    //     include: Group,
    //   },
    // });
    // console.log(prettyString(onePost.Student.Group.title));

    const oneGroup = await Group.findOne({
      where: { title: 'Beavers' },
      include: {
        model: Student,
        include: Post,
      },
    });

    console.log(prettyString(oneGroup.Students));
  } catch (error) {
    console.error(error);
  }
})();
