//routes!
const router = require("express").Router();

const userRoutes = require("./user_routes");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");

//router.use here
router.use("/user", userRoutes);
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);

module.exports = router;
