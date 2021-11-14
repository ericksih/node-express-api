import dotenv from "dotenv"; // import dotenv
dotenv.config(); // load the dotenv file to get the environment variables from the .env file

import express from "express"; // import express
import bodyParser from "body-parser"; // import body-parser to parse the body of the request
import userRoutes from "./routes/users.js"; // import user routes
const app = express(); // create an instance of express

const PORT = process.env.PORT; // define the port

app.use(bodyParser.json()); // use body-parser to parse the body of the request

app.use("/users", userRoutes); // use usersRouter

app.get("/", (req, res) => {
  // define the route
  res.send("Hello World!"); // send a response
});

app.listen(PORT, () => {
  // listen to the port
  console.log(`Server is running on Port: http://localhost:${PORT}`);
});
