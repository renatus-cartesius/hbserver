const router = new require("express").Router();
const controller = require("./controller");

router.get("/list_all", (req, res)=>{
    res.send(controller.list_all());
})

module.exports = router;