const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.get("/", (request, response) => {
    response.json({
        info: 'Helo ngab ini API mobilBekasnya Faris'
    });
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });

const { Pool } = require('pg');
require('dotenv').config()
const connectionString = process.env.DATABASE_URL
const pool = new Pool({
    connectionString,
    ssl: {
      rejectUnauthorized: false,
  }
  });

const ResponseClass = require("./model/response")
const db = require('./queries');

app.get("/mobilBekas", db.getMobilBekas);
app.get("/penjual", db.getPenjual);
app.get("/modelMobil", db.getModelMobil);
app.put("/modelMobil", db.createModelMobil);
app.delete("/modelMobil", db.deleteModel);