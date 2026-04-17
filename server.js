import express from "express"
import cors from "cors"
import mysql from "mysql2"

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "saude"
})

app.post("/cadastro", (req, res) => {
    const { nome, email, senha } = req.body

    const sql = "INSERT INTO usuarios (nome, email, senha) VALUE (?,?,?)"
})

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})