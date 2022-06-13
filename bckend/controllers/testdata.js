const pool = require('../config/database');

module.exports = {
  testarBD: async (req, res) => {
    pool.query('Select * from curso').then((testData) => {
      console.log(testData);
      res.send(testData.rows);
    });
  }
}
