const pool = require("../config/database");
const islandAcronym_dict = {
  "Santo Antão":"SA",
  "São Vicente": "SV",
  "São Nicolau":"SN",
  "Sal":"SL",
  "Boavista":"BV",
  "Maio":"MA",
  "Santiago":"ST",
  "Fogo":"FG",
  "Brava":"BR"
}

module.exports = {
  async read(req, res, next) {
    pool.query("select * from public.address").then((dados) => {
      res.json(dados.rows);
    });
  },

  async store(req, res, next) {
    const { island, country, city } = req.body;

    let island_acronym = islandAcronym_dict[island]

    


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
