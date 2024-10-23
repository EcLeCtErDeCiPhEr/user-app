const express = require("express");
const router = express.Router();
const cs = require("../controller/user.controller");

router.post("/create-user", cs.createUser);
router.get("/find-user", cs.findAllUsers)
router.get("/find-one/:id", cs.findById)
router.put("/update/:id", cs.updateById)
router.delete("/delete/:id", cs.deleteById)

module.exports = router;
