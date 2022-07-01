const pool = require("../config/database");

module.exports = {
  async read(req, res, next) {
    pool.query("select * from public.address").then((dados) => {
      res.json(dados.rows);
    });
  },

  async store(req, res, next) {
    const { island, country, city } = req.body;

    let island_acronym;

    if (island === "Santo Antão") {
      island_acronym = "SA";
    } else if (island === "São Vicente") {
      island_acronym = "SV";
    } else if (island === "São Nicolau") {
      island_acronym = "SN";
    } else if (island === "Sal") {
      island_acronym = "SL";
    } else if (island === "Boavista") {
      island_acronym = "BV";
    } else if (island === "Maio") {
      island_acronym = "MA";
    } else if (island === "Santiago") {
      island_acronym = "ST";
    } else if (island === "Fogo") {
      island_acronym = "FG";
    } else island_acronym = "BR";

    pool.query(
      `insert into public.address (island, country, city, island_acronym,  created_at, updated_at)` +
        `values ('${island}','${country}','${city}', '${island_acronym}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`,
      (err, response) => {
        if (err) return next(err);
        res.json([
          { ok: "Address Created Sucessfully" },
          { island, country, city, island_acronym },
        ]);
      }
    );
  },
};
