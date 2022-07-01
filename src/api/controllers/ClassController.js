const pool = require("../config/database");

module.exports = {
  async read(req, res, next) {
    pool.query("select * from public.class").then((dados) => {
      res.json(dados.rows);
    });
  },
  async store(req, res, next) {
    const { name, semester, id_course } = req.body;

    pool.query(
      `insert into public.class (name, semester, id_course, created_at, updated_at)` +
        `values ('${name}','${semester}','${id_course}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`,
      (err, response) => {
        if (err) return next(err);
        res.json([
          { ok: "Class Created Sucessfully" },
          { name, semester, id_course },
        ]);
      }
    );
  },
};
