const pool = require('../config/database')

module.exports = {
  async read (req, res, next){
    pool.query("select * from public.course").then(dados => {res.json(dados.rows)})
  },

  async store(req, res, next) {
    const { name, acronym, year } = req.body;

    pool.query(
      `insert into public.course (name, acronym, year, created_at, updated_at)` +
        `values ('${name}','${acronym}','${year}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`,
      (err, response) => {
        if (err) return next(err);
        res.json([
          { ok: "Course Created Sucessfully" },
          { name, acronym, year },
        ]);
      }
    );
  },
  
}