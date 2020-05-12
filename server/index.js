require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");

const port = 8000;

const app = express();

app.use(express.static(`${__dirname}/../build`));

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then((db) => {
  app.set("db", db);
});

app.listen(port, () => console.log(`listening on port ${port}`));
