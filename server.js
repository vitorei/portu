import express from "express"

const app = express()

app.post("/cadastro", (req, res) => {
    res.send("oioioio")
})

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})