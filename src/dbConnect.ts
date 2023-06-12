import mysql, {Connection} from "mysql"


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
