exports.getIndex = (req, res, next) =>{
    console.log(req.session);
    res.render('index.ejs',{
        userId: req.session.user
    });
}  