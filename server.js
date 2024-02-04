/* console.log("web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 1 - kirish codelari (expressdan kirib kelayotgan ma'lumotlarga bog'liq kodlar)
app.use(express.static("publik"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2 - sessionga bog'liq narsalar

// 3 -Views codes (bssr => backend server site randrung(backenda html yasab clenga yuborish))
app.set("views", "views");
app.set("view engine", "ejs");

// 4 - Routinglarga mo'ljallangan

// app.get("/", function(req, res) {
//     res.end(`<h1 style="background: red">Hello! Hush kelibsiz<h/1>`)
// });

app.get("/hello", function(req, res) {
    res.end(`<h1 style="background: red">Hello! Hush kelibsiz by GaryAli<h/1>`)
}); 
app.get("/gift", function(req, res) {
    res.end(`<h1 style="background: green">Siz sovg'alar bolimidasiz<h/1>`)
}); 

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}`);
}); */

// EJS framework orqali ananaviy fronted quramiz

console.log("web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 1 - kirish codelari (expressdan kirib kelayotgan ma'lumotlarga bog'liq kodlar)
app.use(express.static("publik"));
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

app.get("/", function (req, res) {
    res.render("harid");
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}`);
});






