// const userDataController=require("../controllers/userController");
// //const emailPasswordControllers = require("../controllers/ReviewController");
// const router=require("express").Router()

// // router.post("/",userDataController.addUserData);


// // new post method

// // router.post("/",userDataController.UserEmailPassword);
// //get Product Reviews 
// // router.get("/getUserData/:id",userDataController.getUserData)
// router.get("/login",userDataController.loginUser)
// module.exports=router


const userDataController=require("../controllers/userController");
//const emailPasswordControllers = require("../controllers/ReviewController");
const router=require("express").Router()

router.post("/",userDataController.addUserData);


//get Product Reviews 
router.get("/getUserData/:id",userDataController.getUserData)
router.post("/login",userDataController.loginUser)
router.post("/logoutUser",userDataController.logoutUser)
module.exports=router
