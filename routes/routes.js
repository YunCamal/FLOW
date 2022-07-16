// 라우터
const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", controller.findAll);
router.post("/", controller.create)
router.delete("/delete/", controller.delete);
router.put('/update/', controller.update);

module.exports = router;