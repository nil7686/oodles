const {Router} = require('express')
const router = Router();
const usercontroller = require('/home/nilesh/Desktop/HATRIK/Registration_Login_form/Controllers/controller')

router.get("/user",usercontroller.Registration)
router.post("/user",usercontroller.Login)

module.exports = router;