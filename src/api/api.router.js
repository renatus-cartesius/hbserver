const router = new require("express").Router();
const apiController = require("./api.controller.js");

// Distributing routes to specific files based on role
const { apiOperationsRouter, apiAccountsRouter } = require("./routes/index.js");

router.use("/operations", apiOperationsRouter);
router.use("/accounts", apiAccountsRouter);

module.exports = router
