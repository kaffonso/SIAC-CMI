const pool = require("../config/database");

module.exports = {
  async read(req, res, next) {
    pool.query("select * from public.user").then((dados) => {
      res.json(dados.rows);
    });
  },

  async store(req, res, next) {
    const { name, email, password, type, telephone, sex } = req.body;

    pool.query(
      `insert into public.user(name, email, password, type, telephone, sex, created_at, updated_at)` +
        `values ('${name}', '${email}', '${password}', '${type}', '${telephone}', '${sex}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`,
      (err, response) => {
        if (err) return next(err);
        res.json([
          { ok: "User Created Sucessfully" },
          { name, email, password, type, telephone, sex },
        ]);
      }
    );
  },
};
