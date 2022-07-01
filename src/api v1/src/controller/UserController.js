const pool = require('../Config/database')


filter = (query) => {
    const { name, type, sex } = query

    switch (true) {
        case name && !type && !sex:
            query = `SELECT * FROM public.user WHERE name = '${name}'`
            break;

        case type && !name && !sex:
            query = `SELECT * FROM public.user WHERE type = '${type}'`
            break;

        case sex && !name && !type:
            query = `SELECT * FROM public.user WHERE sex = '${sex}'`
            break;

        case name && type && !sex:
            query = `SELECT * FROM public.user WHERE name = '${name}' AND type = '${type}'`
            break;

        case name && sex && !type:
            query = `SELECT * FROM public.user WHERE name = '${name}' AND sex = '${sex}'`
            break;

        case sex && type && !name:
            query = `SELECT * FROM public.user WHERE type = '${type}' AND sex = '${sex}'`
            break;

        case sex && type && name:
            query = `SELECT * FROM public.user WHERE name = '${name}' AND sex = '${sex}' AND type = '${type}'`
            break;

        default:
            query = "SELECT * FROM public.user"
            break;
    }



    return query;
}
module.exports = {



    async index(req, res, next) {
        try {
            const { name, type, sex } = req.query;
            query = filter(req.query)
            const students = await pool.query(query)

            res.json(students.rows)
        } catch (err) {
            next(err)//
        }
    },



}