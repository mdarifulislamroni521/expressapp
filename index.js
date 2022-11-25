const express = require("express");
const app = express();

// app method
app.all("/", (req, res) => {
  res.status(200).json({ ...req.headers, visitTime: Date(Date.now()) });
});

app.listen({ port: 8000 }, () => {
  console.log("started app on 8383 port success");
});
