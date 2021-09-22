const Post = require('../../../core/posts');
const { Request, Response, NextFunction } = require('express');

/**
 * Handler function for getting all Posts.
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.aggregate()
      .lookup({
        from: 'users',
        localField: 'createdBy',
        foreignField: '_id',
        as: 'user'
      })
      .project({
        _id: '_id',
        title: 'title',
        content: 'content',
        tags: 'tags',
        createdBy: { $first: '$user.username' }
      });
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json(error);
  }
};

/**
 * Handler function for adding new posts.
 * The request body should hold the info about the new post.
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
const addNewPost = async (req, res, next) => {
  const { title, content, tags, createdBy } = req.body;

  if ((!title, !content, !tags, !createdBy)) {
    return res.status(400).json('Missing data!');
  }

  try {
    await Post.create({ title, content, tags, createdBy });
    return res.status(201).json('Post added!');
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllPosts,
  addNewPost
};
