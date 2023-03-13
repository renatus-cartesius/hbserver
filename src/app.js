const app = require("express")();
const port = process.env.HBS_PORT;

const hbdriver = require("homebank-driver");

const apiRouter = require("./api/api.router.js");

app.use("/api", apiRouter);

app.listen(port, ()=>console.log(`Home bank server running on ${port}`));

