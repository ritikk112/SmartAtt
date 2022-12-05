const config = {
    db: {
      /* don't expose password or any sensitive info, rather user dotenv package from npm to load data from config */
      host: "localhost",
      user: "root",
      password: "",
      database: "finstudentrecords",
    }
  };
  module.exports = config;