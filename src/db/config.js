import { Sequelize } from "sequelize";
const sequelize = new Sequelize("sma","postgres","maaz138",{
    host: 'localhost',
    dialect:'postgres',
    port: 5432,
    logging: false //true //false
});

export const connectDB= async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } 
      catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

export default sequelize;