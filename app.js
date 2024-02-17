
// EJS framework orqali ananaviy fronted quramiz

console.log("web serverni boshlash");
const express = require("express");
const app = express();


// MongoDB chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");


// 1 - kirish codelari (expressdan kirib kelayotgan ma'lumotlarga bog'liq kodlar)
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 - sessionga bog'liq narsalar

// 3 -Views codes (bssr => backend server site randrung(backenda html yasab clenga yuborish))
app.set("views", "views");
app.set("view engine", "ejs");

// 4 - Routinglarga mo'ljallangan


app.post("/create-item", (req, res) => {
    console.log("user entered /create-item");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        console.log(data.ops[0]);
        res.json(data.ops[0]);
    });
});

app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne({ _id: new mongodb.ObjectId(id) }, function (err, data) {
        res.json({ state: "succes" });
    });
});

app.post("/edit-item", (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate(
        { _id: new mongodb.ObjectId(data.id) },
        { $set: { reja: data.new_input } },
        function (err, data) {
            res.json({ state: "success" });
        }
    );
});


app.post("/delete-all", (req, res) => {
    if(req.body.delete_all) {
        db.collection("plans").deleteMany(function() {
            res.json({ state: "Hamma rejalarni o'chirmoqchimisiz? (Are you sure delete all plans?)"});
        });
    }
});


app.get("/", (req, res) => {
    console.log("user entered /");
    db.collection("plans").find().toArray((err, data) => {
        if (err) {
            console.log(err);
            res.end("sometning went wrong");
        } else {
            console.log(data);
            res.render("reja", { items: data });
        }
    });
});

module.exports = app; 



