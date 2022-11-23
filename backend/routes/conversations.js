const router = require("express").Router();
let Conversation = require("../models/conversation.model");

// Root route - get all threads
router.route("/").get((req, res) => {
  Conversation.find()
    .then((conversations) => res.json(conversations))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Route to add a new thread
router.route("/new").post((req, res) => {
  //Retrieve data for post
  const { title, body, author } = req.body;
  const date = Date.parse(req.body.date);
  var threadId = 0;
  Conversation.find()
    .then((conversations) => {
      threadId = conversations.length + 1;
      console.log(threadId);
      const newThread = new Conversation({
        title,
        body,
        author,
        date,
        threadId: threadId,
      });

      //Create a new Post and save it to D

      // Save the new post
      newThread
        .save()
        .then(() => res.json("Thread Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((e) => console.log("some error during new thread upload"));
});

//route to display a particular thread
router.route("/:id").get((req, res) => {
  Conversation.find({ threadId: req.params.id })
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/reply").post((req, res) => {
  //Retrieve data for post

  const { title, body, author, threadId } = req.body;
  const date = Date.parse(req.body.date);

  //Create a new Post and save it to DB
  const newThread = new Conversation({
    title,
    body,
    author,
    date,
    threadId: threadId,
  });

  // Save the new post
  newThread
    .save()
    .then(() => res.json("Thread Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// // Route to edit a particular post
// router.route("/:id").post((req, res) => {
//   Conversation.find(req.params.id)
//     .then((thread) => {
//       thread.title = req.body.title;
//       thread.body = req.body.body;
//       post.author = req.body.author;
//       post.date = Date.parse(req.body.date);
//       post.comments = req.body.comments;

//       post
//         .save()
//         .then(() => res.json("Post Edited"))
//         .catch((err) => res.status(400).json("Error: " + err));
//     })
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// Route to Delete a reply
router.route("/:id").delete((req, res) => {
  Conversation.findByIdAndDelete({ threadId: req.params.id })
    .then(() => res.json("Post Deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
