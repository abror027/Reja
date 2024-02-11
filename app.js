
// EJS framework orqali ananaviy fronted quramiz

console.log("web serverni boshlash");
const express = require("express");
const app = express();


// MongoDB chaqirish
const db = require("./server").db();


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


app.get("/", (req, res) => {
    // console.log(req.body);
    res.render("reja")
    
});

module.exports = app;







