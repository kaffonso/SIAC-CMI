const pool = require('../config/database')

module.exports = {
  async read (req, res, next){
    pool.query("select * from public.employee").then(dados => {res.json(dados.rows)})
  },
  
  async store(req, res, next) {
    const { full_name, id_user, id_address } = req.body;

    pool.query(
      `insert into public.employee (full_name, id_user, id_address, created_at, updated_at)` +
        `values ('${full_name}','${id_user}','${id_address}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`,
      (err, response) => {
        if (err) return next(err);
        res.json([
          { ok: "Employee Created Sucessfully" },
          { full_name, id_user, id_address },
        ]);
      }
    );
  },
}