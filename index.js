import express from "express"; // import express
import bodyParser from "body-parser"; // import body-parser to parse the body of the request

const app = express(); // create an instance of express
const PORT = 5000; // define the port

app.use(bodyParser.json()); // use body-parser to parse the body of the request

app.get("/", (req, res) => {
  // define the route
  res.send("Hello World!"); // send a response
});

app.listen(PORT, () => {
  // listen to the port
  console.log(`Server is running on Port: http://localhost:${PORT}`);
});
