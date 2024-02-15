const http = require("http");
const mongodb = require("mongodb");

const connectionString = "mongodb+srv://jimbek03:lPX77fckmkvejZSC77fc2@cluster0.e9ek49o.mongodb.net/Reja";

mongodb.connect(connectionString, {
    userNewUrlParser: true,
    userUnifiedTopology: true,
}, (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection succed:")
        module.exports = client;

        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function () {
            console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
        });
    }
});

