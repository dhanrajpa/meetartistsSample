
router.get('/',(req,res)=>{
    res.send("Hello...")
})

router.get('/list',passport.authenticate('jwt',{session:false}),userCtrl.userList)

router.post('/add',userCtrl.userAdd)

router.post('/email-send',userCtrl.emailSend)

router.post('/change-password',userCtrl.changePassword)


module.exports=router;