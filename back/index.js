const express = require("express");
const axios = require("axios");
const server = express();
var favoritos = [];

server.use(express.json());

server.get("/", (req, res) => {
    res.send("estoy aca")
})

server.post("/Favoritos", (req, res) => {
    if (req.body) {

        favoritos.push(req.body)
        res.send(favoritos)
        return favoritos
    }
    else res.send("funca")
});
server.get("/Favoritos", (req, res) => {
    return res.send(favoritos)
}
)

server.listen(3001);
