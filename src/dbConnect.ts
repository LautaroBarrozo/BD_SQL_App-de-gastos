import mysql, {Connection} from "mysql"

// tabla a crear en la base de datos

// CREATE TABLE spences (
// 	 id int NOT NULL AUTO_INCREMENT,
// 	 user_name varchar(255) NOT NULL,
// 	 spence_name varchar(255) NOT NULL,
// 	 spence_value int NOT NULL,
// 	 PRIMARY KEY(id)
// )

// poner url de base de datos
const DATABASE_URL = ''

let connection: Connection | null = null 

export const connectDB = () => {
    connection = mysql.createConnection(DATABASE_URL)

    connection.connect()

    return connection
}

export const getDB = () => {
    if(connection){
        return connection
    }

    return connectDB()
}
