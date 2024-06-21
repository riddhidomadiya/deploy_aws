const express = require("express");
const app = express();
const port = process.env.PORT || 80;

require("./db/db");
const user = require("./route/users");

app.use(express.json());
app.use("/user", user);

app.get('/', async (req, res) => {
    res.send("backend api run on server...");
});

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
});