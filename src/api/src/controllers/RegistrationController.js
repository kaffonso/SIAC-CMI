const pool = require("../config/database");

module.exports = {
  async read(req, res, next) {
    pool.query("select * from public.registration").then((dados) => {
      res.json(dados.rows);
    });
  },
  async store(req, res, next) {
    const { id_student, id_course } = req.body;

    pool.query(
      `insert into public.registration (id_student,id_course, created_at, updated_at)` +
        `values ('${id_student}','${id_course}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`,
      (err, response) => {
        if (err) return next(err);
        res.json([
          { ok: "Registration Created Sucessfully" },
          { id_student, id_course },
        ]);
      }
    );
  },
};