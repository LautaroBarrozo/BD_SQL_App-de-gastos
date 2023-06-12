import express from "express"
import {connectDB, getDB} from "./dbConnect"

const PORT = process.env.PORT || 3000
const app = express()

app.get(
    "/",
    (req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write("Usando GET y la ruta /spences podras ver todos los gastos\n")
        res.write("Usando POST y la ruta /addSpence podras agregar un gasto nuevo\n")
        res.write("Para agregar un gasto deberas completar las keys de la pestaña params\n")
        res.write("\n")
        res.write("Las keys son: user_name, spence_name, spence_value en ese orden\n")
        res.write("\n")
        res.write("El value de user_name debe ser el nombre de la persona que realizó el gasto\n")
        res.write("El value de spence_name debe ser el nombre del producto en el que se realizó el gasto\n")
        res.write("El value de spence_value debe ser el precio del producto en el que se realizó el gasto\n")
        res.send()
        next()
    }
)

app.get(
    "/spences",
    (req: express.Request, res: express.Response, next: express.NextFunction) => {
        getDB().query('SELECT * FROM spences', function (error, results, fields){
            if (error) throw error
            res.send(results)
        });
    }
)

app.post(
    "/addSpence",
    (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const user_name = req.query.user_name
        const spence_name = req.query.spence_name
        const spence_value = req.query.spence_value
        getDB().query('INSERT INTO spences(user_name, spence_name, spence_value) VALUES(?,?,?)',[user_name,spence_name,spence_value ], function (error, results, fields){
            if (error) throw error
            res.send("posted")
        });
    }
)

app.listen(PORT, () => {
    connectDB()
    console.log("Server running on port 3000");
})