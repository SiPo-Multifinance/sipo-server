const express = require("express");
const router = express.Router();
const ODPGroupRouter = require("./odp_groups");
const UserRouter = require("./user");
const OJTDataRouter = require("./ojt_data");
const DataDetailsRouter = require("./data_details");
const NanoDetailRouter = require("./nano_details");

router.use("/odp_groups", ODPGroupRouter);
router.use("/users", UserRouter);
router.use("/ojt_data", OJTDataRouter);
router.use("/data_details", DataDetailsRouter);
router.use("/nano_details", NanoDetailRouter);

module.exports = router;