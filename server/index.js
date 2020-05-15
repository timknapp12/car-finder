require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const cors = require("cors");

const port = 8080;

const app = express();

app.use(express.static(`${__dirname}/../build`));

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then((db) => {
  app.set("db", db);
});

// const db = massive({
//   host: "kilter-pilot.cvyy9prhef09.us-east-1.rds.amazonaws.com",
//   port: 5432,
//   database: "postgres",
//   user: "postgres",
//   password: process.env.PASSWORD,
//   ssl: true,
// });

// app.set("db", db);

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

app.get("/api/listings", (req, res, next) => {
  const db = req.app.get("db");

  db.get_listings()
    .then((listings) => res.status(200).send(listings))
    .catch(() => res.status(500).send());
  //   return res.send(["this", "is", "a", "test"]);
});

app.get("/api/products", (req, res, next) => {
  const db = req.app.get("db");

  db.get_products()
    .then((products) => res.status(200).send(products))
    .catch(() => res.status(500).send());
});

app.listen(port, () => console.log(`listening on port ${port}`));
