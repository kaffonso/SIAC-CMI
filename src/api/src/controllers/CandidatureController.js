const pool = require("../config/database");

module.exports = {
  async read(req, res, next) {
    pool.query("select * from public.candidature").then((dados) => {
      res.json(dados.rows);
    });
  },
  async store(req, res, next) {
    const { id_candidate, id_course, status } = req.body;

    pool.query(
      `insert into public.candidature (id_candidate, id_course, status, created_at, updated_at)` +
        `values ('${id_candidate}','${id_course}','${status}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`,
      (err, response) => {
        if (err) return next(err);
        res.json([
          { ok: "Candidature Created Sucessfully" },
          { id_candidate, id_course, status },
        ]);
      }
    );
  },
};