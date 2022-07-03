const pool = require("../config/database");
const filter = (query) => {
  const { name, year, course } = query


  if (name && !year && !course) {
    return query = `SELECT registration.id, registration.created_at, row_to_json(student) as student, row_to_json(course) as course,
      row_to_json(user_info) as user FROM public.registration` +
      ` inner join (select * from public.student) student on student.code = public.registration.id_student` +
      ` inner join (select * from public.course) course on course.id = public.registration.id_course` +
      ` INNER JOIN (SELECT * FROM public.user) user_info ON student.id_user = user_info.id
        WHERE student.full_name like '${name}%'`


  }

  else if (year && !name && !course) {
    return query = `SELECT registration.id, registration.created_at, row_to_json(student) as student, row_to_json(course) as course,
        row_to_json(user_info) as user FROM public.registration` +
      ` inner join (select * from public.student) student on student.code = public.registration.id_student` +
      ` inner join (select * from public.course) course on course.id = public.registration.id_course` +
      ` INNER JOIN (SELECT * FROM public.user) user_info ON student.id_user = user_info.id  
          WHERE course.year = '${year.toUpperCase()}'`
  }


  else if (course && !year && !name) {
    return query = `SELECT registration.id, registration.created_at, row_to_json(student) as student, row_to_json(course) as course,
            row_to_json(user_info) as user FROM public.registration` +
      ` inner join (select * from public.student) student on student.code = public.registration.id_student` +
      ` inner join (select * from public.course) course on course.id = public.registration.id_course` +
      ` INNER JOIN (SELECT * FROM public.user) user_info ON student.id_user = user_info.id  
          WHERE course.acronym = '${course.toUpperCase()}'`

  }

  else if (year && !course && !name) {

    return query = `SELECT registration.id, registration.created_at, row_to_json(student) as student, row_to_json(course) as course,
              row_to_json(user_info) as user FROM public.registration` +
      ` inner join (select * from public.student) student on student.code = public.registration.id_student` +
      ` inner join (select * from public.course) course on course.id = public.registration.id_course` +
      ` INNER JOIN (SELECT * FROM public.user) user_info ON student.id_user = user_info.id  
            WHERE course.year = '${year}'`
  }





  else {
    return query = `SELECT registration.id, registration.created_at, row_to_json(student) as student, row_to_json(course) as course,
        row_to_json(user_info) as user FROM public.registration` +
      ` inner join (select * from public.student) student on student.code = public.registration.id_student` +
      ` inner join (select * from public.course) course on course.id = public.registration.id_course` +
      ` INNER JOIN (SELECT * FROM public.user) user_info ON student.id_user = user_info.id `
  }


}

module.exports = {
  async read(req, res, next) {
    pool.query("select * from public.registration").then((dados) => {
      res.json(dados.rows);
    });
  },

  async read_full(req, res, next) {

    const query = filter(req.query)
    console.log(query)
    const { rows } = await pool.query(query)

    res.json(rows)


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