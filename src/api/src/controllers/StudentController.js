const pool = require("../config/database");

module.exports = {
  async read(req, res, next) {
    pool.query("select * from public.student").then((dados) => {
      res.json(dados.rows);
    });
  },

  async read_full(req, res, next) {
    pool
      .query(
        `SELECT student.code, student.full_name, row_to_json(address) as address, row_to_json(user_info) as user, row_to_json(course) as course FROM public.student INNER` +
          ` JOIN (SELECT * FROM public.address) address ON public.student.id_address = address.id` +
          ` INNER JOIN (SELECT * FROM public.user) user_info ON public.student.id_user = user_info.id ` +
          ` INNER JOIN (SELECT * FROM public.course) course ON course.id = public.student.id_course`
      )
      .then((dados) => {
        res.json(dados.rows);
      });
  },

  async store(req, res, next) {
    const { full_name, id_user, id_course, id_address } = req.body;

    pool.query(
      `insert into public.student(full_name, id_user, id_course, id_address, created_at, updated_at)` +
        `values ('${full_name}','${id_user}','${id_course}','${id_address}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`,
      (err, response) => {
        if (err) return next(err);
        res.json([
          { ok: "Student Created Sucessfully" },
          { full_name, id_user, id_course, id_address },
        ]);
      }
    );
  },
};
