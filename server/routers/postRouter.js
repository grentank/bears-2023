const express = require('express');
const { Post } = require('../db/models');

const postRouter = express.Router();

postRouter
  .route('/')
  .post(async (req, res) => {
    const newPost = await Post.create(req.body);
    res.json(newPost);
  })
  .get(async (req, res) => {
    const allPosts = await Post.findAll({
      order: [['createdAt', 'DESC']],
    });
    res.json(allPosts);
  });

postRouter.route('/:id').delete(async (req, res) => {
  await Post.destroy({ where: { id: req.params.id } });
  res.json(200);
});

module.exports = postRouter;
