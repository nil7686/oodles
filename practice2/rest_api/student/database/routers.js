const {Router} = require('express')
const router = Router();
const controller = require("./controller")

router.get("/user",controller.getStudents)
router.post("/user",controller.addStudents)

module.exports = router;