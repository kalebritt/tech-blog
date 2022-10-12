const router = require("express").Router();
const { User } = require("../../models");

//post route
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.userId = newUser.id;
      req.sessionID.username = newUser.username;
      req.session.loggedIn = true;

      res.json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//login route
router.post('/login', async (req,res) => {
    try{
        const user = await User.findOne({
            where: {
                username: req.body.username,
            };
        });
        if (!user) {
            res.status(400).json({ message: 'No user found!' });
            return;
        }

    }
})