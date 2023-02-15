const router = new require("express").Router();
const controller = require("./controller");

router.get("/list_all", (req, res)=>{
    res.send(controller.list_all());
})

router.get("/status/:account_key", (req, res)=>{
    res.send(controller.status(req.params.account_key));
})

router.get("/operations/:account_key", (req, res)=>{
    res.send(controller.operations(req.params.account_key));
})

module.exports = router;