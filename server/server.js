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
  const inputText = req.body.message;
  console.log(inputText);
  // const response = await openai.createCompletion({
  //   model: "text-davinci-003",
  //   prompt: `Convert the following movie into emoji: ${inputText}`,
  //   temperature: 0.8,
  //   max_tokens: 60,
  // });
  const response = await openai.createImage({
    prompt: "A cute baby sea otter",
    n: 2,
    size: "1024x1024",
  });
  if (response.data) {
    // res.json(response.data.choices[0].text);
    res.json(response.data[0].url);
  }
  // console.log(response.data);
  // res.json(req.body);
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
