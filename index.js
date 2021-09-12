const express = require('express')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes"));

const PORT =  4000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = server;
