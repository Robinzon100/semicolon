const firebase = ("../modules/firebase")


exports.getIndex = (req, res, next) => {
    console.log(req.session);
    res.render('index.ejs', {
        userId: req.session.user
    });
}



exports.getUtils = (req, res, next) => {
    const { typeOfUtil, startDate, endDate } = req.body;

    console.log(firebase);
    

    let docRef = firebase.Firestore.collection('users').doc(req.session.user);

    docRef.set({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815
    });


     res.redirect('/');


}  