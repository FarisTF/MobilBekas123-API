const Pool = require("pg").Pool;
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

const getMobilBekas = (request, response) => {
    var responseReturn = new ResponseClass();
    pool.query('SELECT * FROM mobilBekas ORDER BY idMobilBekas ASC', (error, results) => {
        if (error) {
            throw error
          }
          response.status(200).json(results.rows)
        })
      }

module.exports = {
    getMobilBekas}