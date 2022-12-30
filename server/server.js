// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const app = express();

// port = 5000;

// app.get("/api", (req, res) => {
//   res.json({ users: ["one", "usertwo"] });
// });

// app.listen(port, () => {
//   console.log("Listening to port 5000");
// });

const express = require("express");
const { Configuration, OpenAIApi } = require("openai");
const cors = require("cors");
require("dotenv").config();
const apiKey = process.env.OPENAI_API_KEY;

const app = express();

app.use(cors());
app.use(express.json());

const configuration = new Configuration({
  apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);
// const response = await openai.retrieveModel("text-davinci-003");

app.post("/", async (req, res) => {
  // console.log(req.body);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    max_tokens: 7,
    temperature: 0,
  });
  if (response.data) {
    res.json(response.data.choices[0].text);
  }
  // console.log(response.data);
  // res.json(req.body);
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
