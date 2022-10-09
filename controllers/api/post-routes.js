//put up your consts here
const router = require("express").Router();
const { Post } = require("../../models/");
const withAuth = require("../../utils/auth");

//post route
router.post("/", withAuth, async (req, res) => {
  const body = req.body;

  try {
    const newPost = await Post.creat({ ...body, userId: req.session.userId });
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//put route