const express = require("express");
const router = express.Router();
const ODPGroupRouter = require("./odp_groups");

router.use("/odp_groups", ODPGroupRouter);

module.exports = router;