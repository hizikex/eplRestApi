//import sequelize
import Sequelize from 'sequelize';

//create a database connection configuration
const eplDb = new Sequelize('eplDB', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

export default eplDb;