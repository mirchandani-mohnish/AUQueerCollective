const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
// const passport = require("passport");
const session = require("express-session");

// const passportSetup = require("./passport");
const app = express();
app.use(express.json());
// app.use(cors());

const PORT = process.env.PORT || 5000;
app.use(
  session({
    name: "session",
    secret: "mohnishisnice",
    maxAge: 24 * 60 * 60 * 100,
  })
);

// app.use(passport.initialize());
// app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

//config MongoDB
const uri = process.env.MONGO_URI;
console.log(uri);
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once("open", () =>
  console.log("MongoDB connection has been established!")
);

//config routes
const postsRouter = require("./routes/posts");
const authRouter = require("./routes/auth");
const conversationsRouter = require("./routes/conversations");
app.use("/conversations", conversationsRouter);
app.use("/auth", authRouter);
app.use("/server/posts", postsRouter);

//Load the npm build package of the frontend CRA
if (process.env.NODE_ENV === "production") {
  // set a static folder
  app.use(express.static("frontend/build"));

  // Provide a wildcard as a fallback for all routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"));
  });
}

//Host app at PORT
app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}!`));
