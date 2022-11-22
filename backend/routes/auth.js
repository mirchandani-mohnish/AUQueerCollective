const router = require("express").Router();
const User = require("../models/user.model");

//auth with google
router.route("/login").post((req, res) => {
  console.log("Someone trying to log in ");
  const { username, socialId } = req.body;
  console.log("Backend Login req received");
  // Find or create a new user and send it as response
  User.findOne({ socialId: socialId })
    .then((foundUser) => {
      console.log(foundUser);
      if (foundUser) {
        res.json(foundUser);
      } else {
        const newUser = new User({
          username: username,
          socialId: socialId,
        });
        newUser
          .save()
          .then(() =>
            User.findOne({
              socialId: socialId,
            }).then((foundNewUser) => res.json(foundNewUser))
          )
          .catch((err) => res.status(400).json("Error: " + err));
      }
    })
    .catch((err) => res.status(400).json("Error : " + err));
});

module.exports = router;
