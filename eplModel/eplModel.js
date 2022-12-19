import Sequelize from "sequelize";

import eplDb from "../dbConfig/eplDb.js";

const DataTypes = Sequelize;

//model showing all the fieldname and their datatype
 export const eplModel = eplDb.define('eplTable',{
    nameOfTeam: {
        type: DataTypes.STRING(200)
    },
    homeKitColor: {
        type: DataTypes.STRING(200)
    },
    awayKitColor: {
        type: DataTypes.STRING(200)
    },
    numberOfPlayers: {
        type: DataTypes.INTEGER
    },
    playerFirstName: {
        type: DataTypes.STRING
    },
    playerLastName: {
        type: DataTypes.STRING
    },
    playerAge: {
        type: DataTypes.INTEGER
    },
    playerCountry: {
        type: DataTypes.STRING
    },
    playerJerseyNumber: {
        type: DataTypes.INTEGER
    },
    playerSigningFee: {
        type: DataTypes.DOUBLE
    },
    clubOwnerName: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
})