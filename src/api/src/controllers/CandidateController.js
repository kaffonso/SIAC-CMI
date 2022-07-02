const pool = require("../config/database");

module.exports = {
  async read(req, res, next) {
    pool.query("select * from public.candidate").then((dados) => {
      res.json(dados.rows);
    });
  },
  async store(req, res, next) {
    const { full_name, id_user, id_address, birth_date } = req.body;

    pool.query(
      `insert into public.candidate (full_name, id_user, id_address, birth_date, created_at, updated_at)` +
        `values ('${full_name}','${id_user}','${id_address}', '${birth_date},'CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`,
      (err, response) => {
        if (err) return next(err);
        res.json([
          { ok: "Employee Created Sucessfully" },
          { full_name, id_user, id_address, birth_date },
        ]);
      }
    );
  },
};
