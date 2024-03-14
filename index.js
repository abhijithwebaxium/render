const express = require("express");

const app = express();

app.get('/', async (req, res) => {
    res.status(200).send({
      message: 'Hello from Backend!'
    })
  })

app.listen(5500, () => {
  console.log("Server is connected to port number 5500");
});
