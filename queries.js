const Pool = require("pg").Pool;
const connectionString = process.env.DATABASE_URL
const pool = new Pool({
    connectionString,
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

const getPenjual = (request, response) => {
    var responseReturn = new ResponseClass();
    pool.query('SELECT * FROM penjual ORDER BY idPenjual ASC', (error, results) => {
        if (error) {
            throw error
          }
          response.status(200).json(results.rows)
        })
      }

const getModelMobil = (request, response) => {
  var responseReturn = new ResponseClass();
  pool.query('SELECT * FROM modelMobil ORDER BY idModel ASC', (error, results) => {
      if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
    }

const createModelMobil = (request, response) => {
    const { idModel, brand, model, tipeMobil } = request.body;
    pool.query('INSERT INTO modelMobil (idModel, brand, model, tipeMobil) VALUES ($1, $2, $3, $4)', [idModel, brand, model, tipeMobil], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send("Model Mobil Ditambahkan");
    })
}

const deleteModel = (request, response) => {
  const idModel = parseInt(request.params.id)
  pool.query('DELETE FROM modelMobil WHERE id = $1', [idModel], (error, results) => {
      if (error) {
          throw error
      }
      response.status(201).send("Model Dihapus");
  })
}

module.exports = {
    getMobilBekas,
    getPenjual,
    getModelMobil,
    createModelMobil,
    deleteModel}