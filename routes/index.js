const express = require("express");
const router = express.Router();
const ODPGroupRouter = require("./odp_groups");
const UserRouter = require("./user");

router.use("/odp_groups", ODPGroupRouter);
router.use("/users", UserRouter);

module.exports = router;