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
  const inputText = req.body.inputValue;
  console.log(inputText);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Rephrase this for cv Currently seeking an opportunity to work in an organization where I can apply my knowledge and skills in a professional environment to help the company as much as I can, while also gaining valuable experience and developing my technical expertise. : ${inputText}`,
    temperature: 0.8,
    max_tokens: 200,
  });

  if (response.data) {
    res.json(response.data.choices[0].text);
    res.json(console.log(response.data.choices[0].text));
    // res.json(response.data[0].url);
  }
  // console.log(response.data);
  // res.json(req.body);
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
