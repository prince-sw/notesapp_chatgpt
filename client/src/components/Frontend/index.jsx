import React, { useState } from "react";

function Frontend() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/", {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((text) => setResult(text));
  };
  return (
    <>
      <h1>Movie to Emoji</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={handleChange} />
        <button type="submit">Send</button>
      </form>
      <div>{result}</div>
    </>
  );
}

export default Frontend;
