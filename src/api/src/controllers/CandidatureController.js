const pool = require("../config/database");
const filter = (query) => {
  const { name, course, status } = query


      if( name && !course && !status){
        return query = `SELECT candidature.id, candidature.status, row_to_json(candidate) as candidate, row_to_json(course) as course FROM public.candidature` +
        ` INNER JOIN (SELECT candidate.id, candidate.full_name, row_to_json(user_info) as user, row_to_json(address) as address FROM public.candidate`+
        ` INNER JOIN (SELECT * FROM public.user) user_info ON user_info.id = public.candidate.id_user`+
        ` INNER JOIN (SELECT * FROM public.address) address on address.id = public.candidate.id_address) candidate ON candidate.id = public.candidature.id_candidate` +
        ` INNER JOIN (SELECT * FROM public.course) course ON course.id = public.candidature.id_course
          WHERE candidate.full_name like '${name}%'`
          
           
  }


      if( course && !name && !status){
        return query = `SELECT candidature.id, candidature.status, row_to_json(candidate) as candidate, row_to_json(course) as course FROM public.candidature` +
        ` INNER JOIN (SELECT candidate.id, candidate.full_name, row_to_json(user_info) as user, row_to_json(address) as address FROM public.candidate`+
        ` INNER JOIN (SELECT * FROM public.user) user_info ON user_info.id = public.candidate.id_user`+
        ` INNER JOIN (SELECT * FROM public.address) address on address.id = public.candidate.id_address) candidate ON candidate.id = public.candidature.id_candidate` +
        ` INNER JOIN (SELECT * FROM public.course) course ON course.id = public.candidature.id_course 
          WHERE course.acronym = '${course.toUpperCase()}'`
          
  }
 
        if( status && !course && !name){
         return query = `SELECT candidature.id, candidature.status, row_to_json(candidate) as candidate, row_to_json(course) as course FROM public.candidature` +
          ` INNER JOIN (SELECT candidate.id, candidate.full_name, row_to_json(user_info) as user, row_to_json(address) as address FROM public.candidate`+
          ` INNER JOIN (SELECT * FROM public.user) user_info ON user_info.id = public.candidate.id_user`+
          ` INNER JOIN (SELECT * FROM public.address) address on address.id = public.candidate.id_address) candidate ON candidate.id = public.candidature.id_candidate` +
          ` INNER JOIN (SELECT * FROM public.course) course ON course.id = public.candidature.id_course 
            WHERE candidature.status = '${status}'`
             
  }

      if( name && course && status){
        return query = `SELECT candidature.id, candidature.status, row_to_json(candidate) as candidate, row_to_json(course) as course FROM public.candidature` +
        ` INNER JOIN (SELECT candidate.id, candidate.full_name, row_to_json(user_info) as user, row_to_json(address) as address FROM public.candidate`+
        ` INNER JOIN (SELECT * FROM public.user) user_info ON user_info.id = public.candidate.id_user`+
        ` INNER JOIN (SELECT * FROM public.address) address on address.id = public.candidate.id_address) candidate ON candidate.id = public.candidature.id_candidate` +
        ` INNER JOIN (SELECT * FROM public.course) course ON course.id = public.candidature.id_course
          WHERE candidate.full_name = '${name}%' AND user.course = '${course.toUpperCase()}' AND candidature.status = '${status}'`
          
  }
        
      if(name && course && !status){
       return query = `SELECT candidature.id, candidature.status, row_to_json(candidate) as candidate, row_to_json(course) as course FROM public.candidature` +
        ` INNER JOIN (SELECT candidate.id, candidate.full_name, row_to_json(user_info) as user, row_to_json(address) as address FROM public.candidate`+
        ` INNER JOIN (SELECT * FROM public.user) user_info ON user_info.id = public.candidate.id_user`+
        ` INNER JOIN (SELECT * FROM public.address) address on address.id = public.candidate.id_address WHERE public.candidate.full_name = '${name}%' AND public.user.course = '${course.toUpperCase()}') candidate ON candidate.id = public.candidature.id_candidate` +
        ` INNER JOIN (SELECT * FROM public.course) course ON course.id = public.candidature.id_course`
          
  }

      if(!name && course && status){ 
        return query = `SELECT candidature.id, candidature.status, row_to_json(candidate) as candidate, row_to_json(course) as course FROM public.candidature` +
        ` INNER JOIN (SELECT candidate.id, candidate.full_name, row_to_json(user_info) as user, row_to_json(address) as address FROM public.candidate`+
        ` INNER JOIN (SELECT * FROM public.user) user_info ON user_info.id = public.candidate.id_user WHERE user_info.course = '${course.toUpperCase()}'`+
        ` INNER JOIN (SELECT * FROM public.address) address on address.id = public.candidate.id_address) candidate ON candidate.id = public.candidature.id_candidate` +
        ` INNER JOIN (SELECT * FROM public.course) course ON course.id = public.candidature.id_course WHERE candidature.status = '${status}'`
          } 

      if(name && !course && status){
        return query = `SELECT candidature.id, candidature.status, row_to_json(candidate) as candidate, row_to_json(course) as course FROM public.candidature` +
        ` INNER JOIN (SELECT candidate.id, candidate.full_name, row_to_json(user_info) as user, row_to_json(address) as address FROM public.candidate`+
        ` INNER JOIN (SELECT * FROM public.user) user_info ON user_info.id = public.candidate.id_user`+
        ` INNER JOIN (SELECT * FROM public.address) address on address.id = public.candidate.id_address) candidate ON candidate.id = public.candidature.id_candidate` +
        ` INNER JOIN (SELECT * FROM public.course) course ON course.id = public.candidature.id_course
          WHERE candidate.full_name = '${name}%' AND candidature.status = '${status}'`
          }
     

      else{

       

        return query = `SELECT candidature.id, candidature.status, row_to_json(candidate) as candidate, row_to_json(course) as course FROM public.candidature` +
        ` INNER JOIN (SELECT candidate.id, candidate.full_name, row_to_json(user_info) as user, row_to_json(address) as address FROM public.candidate`+
        ` INNER JOIN (SELECT * FROM public.user) user_info ON user_info.id = public.candidate.id_user`+
        ` INNER JOIN (SELECT * FROM public.address) address on address.id = public.candidate.id_address) candidate ON candidate.id = public.candidature.id_candidate` +
        ` INNER JOIN (SELECT * FROM public.course) course ON course.id = public.candidature.id_course`
              }
    
      
         
        
  
 
}



module.exports = {
  async read(req, res, next) {
    pool.query("select * from public.candidature").then((dados) => {
      res.json(dados.rows);
    });
  },

  async read_full(req, res, next) {
    const query = filter(req.query)
    console.log(query)
    const {rows} = await pool.query(query)

    res.json(rows)
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
