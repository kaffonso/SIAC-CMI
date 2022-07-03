const pool = require("../config/database");
const filter = (query) => {
  const { name, sex, course, year } = query

  switch (true) {
    case name && !sex && !course:
      query = `SELECT registration.id, registration.created_at, row_to_json(student) as student, row_to_json(course) as course,
        row_to_json(user_info) as user FROM public.registration` +
        ` inner join (select * from public.student) student on student.code = public.registration.id_student` +
        ` inner join (select * from public.course) course on course.id = public.registration.id_course` +
        ` INNER JOIN (SELECT * FROM public.user) user_info ON student.id_user = user_info.id
          WHERE student.full_name like '${name}%'`
      break;


    case sex && !name && !course:
      query = `SELECT registration.id, registration.created_at, row_to_json(student) as student, row_to_json(course) as course,
        row_to_json(user_info) as user FROM public.registration` +
        ` inner join (select * from public.student) student on student.code = public.registration.id_student` +
        ` inner join (select * from public.course) course on course.id = public.registration.id_course` +
        ` INNER JOIN (SELECT * FROM public.user) user_info ON student.id_user = user_info.id  
          WHERE user_info.sex = '${sex.toUpperCase()}'`
      break;


    case course && !sex && !name:
      query = `SELECT registration.id, registration.created_at, row_to_json(student) as student, row_to_json(course) as course,
            row_to_json(user_info) as user FROM public.registration` +
        ` inner join (select * from public.student) student on student.code = public.registration.id_student` +
        ` inner join (select * from public.course) course on course.id = public.registration.id_course` +
        ` INNER JOIN (SELECT * FROM public.user) user_info ON student.id_user = user_info.id  
          WHERE course.acronym = '${course.toUpperCase()}'`
      break;

      case year && !course && !sex && !name:
        query = `SELECT registration.id, registration.created_at, row_to_json(student) as student, row_to_json(course) as course,
              row_to_json(user_info) as user FROM public.registration` +
          ` inner join (select * from public.student) student on student.code = public.registration.id_student` +
          ` inner join (select * from public.course) course on course.id = public.registration.id_course` +
          ` INNER JOIN (SELECT * FROM public.user) user_info ON student.id_user = user_info.id  
            WHERE course.year = '${year}'`
        break;

    case name && sex && !course:
      query = `SELECT registration.id, registration.created_at, row_to_json(student) as student, row_to_json(course) as course,
        row_to_json(user_info) as user FROM public.registration` +
        ` inner join (select * from public.student) student on student.code = public.registration.id_student` +
        ` inner join (select * from public.course) course on course.id = public.registration.id_course` +
        ` INNER JOIN (SELECT * FROM public.user) user_info ON student.id_user = user_info.id 
          WHERE student.full_name = '${name}' AND user.sex = '${sex.toUpperCase()}'`
      break;



    default:
      query = `SELECT registration.id, registration.created_at, row_to_json(student) as student, row_to_json(course) as course,
        row_to_json(user_info) as user FROM public.registration` +
        ` inner join (select * from public.student) student on student.code = public.registration.id_student` +
        ` inner join (select * from public.course) course on course.id = public.registration.id_course` +
        ` INNER JOIN (SELECT * FROM public.user) user_info ON student.id_user = user_info.id `


    // query = `SELECT student.code, student.full_name, row_to_json(address) as address, 
    // row_to_json(user_info) as user, row_to_json(course) as course FROM public.student INNER`+
    // ` JOIN (SELECT * FROM public.address) address ON public.student.id_address = address.id`+
    // ` INNER JOIN (SELECT * FROM public.user) user_info ON public.student.id_user = user_info.id `+
    // ` INNER JOIN (SELECT * FROM public.course) course ON course.id = public.student.id_course`
    // break;


  }
  return query;
}

module.exports = {
  async read(req, res, next) {
    pool.query("select * from public.registration").then((dados) => {
      res.json(dados.rows);
    });
  },

  async read_full(req, res, next) {

    const query = filter(req.query)
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