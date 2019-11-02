exports.getRegister = (req, res, next) =>{
    res.render("auth/registration.ejs");
}



exports.postRegister = (req, res, next) =>{
    const {username,  password} = req.body;
}



