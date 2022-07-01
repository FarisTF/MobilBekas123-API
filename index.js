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

const pool = new Pool({
    user: 'mxzxtnrhvxfcpv',
    host: 'ec2-54-75-184-144.eu-west-1.compute.amazonaws.com',
    database: 'diug4ik6i5fnp',
    password: 'fe60cef12aa094db49406d52c257fea627cda5e3faecad2705a62aa1aa670572',
    port: 5432,
    ssl: {
      rejectUnauthorized: false,
  }
  });

const ResponseClass = require("./model/response")
const db = require('./queries');

app.get("/mobilBekas", db.getMobilBekas);