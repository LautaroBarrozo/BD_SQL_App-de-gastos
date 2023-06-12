import mysql, {Connection} from "mysql"

const DATABASE_URL = 'mysql://rdef9x03oaqmbaa50qny:pscale_pw_KBKr0Hs2cHwQSwzjuwXTnoQPWZFhOPQMLo0yUwZph7P@aws.connect.psdb.cloud/gastos?ssl={"rejectUnauthorized":true}'

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
