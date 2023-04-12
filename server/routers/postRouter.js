const express = require('express');
const { Post, User } = require('../db/models');

const postRouter = express.Router();

postRouter
  .route('/')
  .post(async (req, res) => {
    const newPost = await Post.create({ ...req.body, userId: req.session.user.id });
    const newPostWithUser = await Post.findOne({ where: { id: newPost.id }, include: User });
    res.json(newPostWithUser);
  })
  .get(async (req, res) => {
    const allPosts = await Post.findAll({
      order: [['createdAt', 'DESC']],
      include: User,
    });
    res.json(allPosts);
  });

postRouter.route('/:id').delete(async (req, res) => {
  await Post.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

module.exports = postRouter;
