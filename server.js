
// EJS framework orqali ananaviy fronted quramiz

console.log("web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    }else {
        user =JSON.parse(data);
    }
});

// 1 - kirish codelari (expressdan kirib kelayotgan ma'lumotlarga bog'liq kodlar)
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2 - sessionga bog'liq narsalar

// 3 -Views codes (bssr => backend server site randrung(backenda html yasab clenga yuborish))
app.set("views", "views");
app.set("view engine", "ejs");

// 4 - Routinglarga mo'ljallangan
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({ test: "success"});
});

app.get('/author', (req, res) => {
    res.render("author", {user: user});
});

app.get("/", function (req, res) {
    res.render("");
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}`);
});






