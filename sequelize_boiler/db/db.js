import Sequelize from "sequelize";
// import "../config/config.json";

export const sequelize = new Sequelize(
  "test_db_2",
  "postgres",
  "girl4yeah",
  //   process.env.DATABASE,
  //   process.env.USERNAME,
  //   process.env.PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    logging: false,
  }
);

export default sequelize;
