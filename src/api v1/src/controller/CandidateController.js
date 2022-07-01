const pool = require('../Config/database')

const filter = (query) => {
    const { name, sex } = query

    switch (true) {
        case name && !sex:
            query = `SELECT student.code, student.full_name, row_to_json(address) as address, 
            row_to_json(user_info) as user, row_to_json(course) as course FROM public.student INNER`+
            ` JOIN (SELECT * FROM public.address) address ON public.student.id_address = address.id`+
            ` INNER JOIN (SELECT * FROM public.user) user_info ON public.student.id_user = user_info.id `+
            ` INNER JOIN (SELECT * FROM public.course) course ON course.id = public.student.id_course 
            WHERE student.full_name like '${name}%'`
            break;


        case sex && !name:
            query = `SELECT student.code, student.full_name, row_to_json(address) as address, 
            row_to_json(user_info) as user, row_to_json(course) as course FROM public.student INNER`+
            ` JOIN (SELECT * FROM public.address) address ON public.student.id_address = address.id`+
            ` INNER JOIN (SELECT * FROM public.user) user_info ON public.student.id_user = user_info.id `+
            ` INNER JOIN (SELECT * FROM public.course) course ON course.id = public.student.id_course 
            WHERE user_info.sex = '${sex.toUpperCase()}'`
            break;

    

        case name && sex :
            query = `SELECT student.code, student.full_name, row_to_json(address) as address, 
            row_to_json(user_info) as user, row_to_json(course) as course FROM public.student INNER`+
            ` JOIN (SELECT * FROM public.address) address ON public.student.id_address = address.id`+
            ` INNER JOIN (SELECT * FROM public.user) user_info ON public.student.id_user = user_info.id `+
            ` INNER JOIN (SELECT * FROM public.course) course ON course.id = public.student.id_course 
            WHERE student.full_name = '${name}' AND user.sex = '${sex.toUpperCase()}'`
            break;

       

        default:
            query = `SELECT candidate.id, candidate.full_name, row_to_json(address) as address, 
            row_to_json(user_info) as user, row_to_json(course) as course FROM public.candidate INNER`+
            ` JOIN (SELECT * FROM public.address) address ON public.candidate.id_address = address.id`+
            ` INNER JOIN (SELECT * FROM public.user) user_info ON public.candidate.id_user = user_info.id `+
            ` INNER JOIN (SELECT * FROM public.course) course ON course.id = public.candidate.id_course`
            query = "SELECT * FROM public.candidate"

            break;

            
    }


    console.log(query)
    return query;
}

module.exports = {

    async index(req, res, next) {
        try {
            const query = filter(req.query);
            
            const {rows} = await pool.query(query)
            res.json(rows)
        } catch (err) {
            next(err)//
        }
    },

    async store( req, res, next){
        try {
            const {full_name, id_user,id_address,birth_date} = req.body
            query = `INSERT INTO candidate(full_name, id_user, id_address, created_at, updated_at,birth_date) VALUES ('${full_name}', ${id_user}, ${id_address}, NOW(), NOW(),'${birth_date}')`
            const result = await pool.query(query)
            res.json("success")
            }
        catch (err){
            console.log(err)
            next(err)
        }
    }
}