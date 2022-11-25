const express = require("express");
const app = express();

// app method
app.all("/", (req, res) => {
  res.status(200).json({ ...req.headers, visitTime: Date(Date.now()) });
});
app.listen(
  {
    port:
      typeof process.env.serverPort === "string" &&
      !isNaN(process.env.serverPort)
        ? process.env.serverPort
        : 8000,
  },
  () => {
    console.log(
      `started app on ${
        typeof process.env.serverPort === "string" &&
        !isNaN(process.env.serverPort)
          ? process.env.serverPort
          : 8000
      } port success`
    );
  }
);
