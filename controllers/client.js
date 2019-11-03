const firebase = require("../modules/firebase");

exports.getIndex = (req, res, next) => {
  console.log(req.session);
  res.render("index.ejs", {
    userId: req.session.user
  });
};

exports.getUtils = (req, res, next) => {
  const { typeOfUtil, startDate, endDate, loan } = req.body;

  console.log(loan, "dasdoahsdioabsdiabsdiklabdkjasbldjkzlbczuxbuisda")

  let docRef = firebase.Firestore.collection("users").doc("ZqkPLXc8E7VKrdCriVgB9cQEigt1");

  docRef.set({ 
      banking: {
        endDate: endDate,
        startDate: startDate,
        loan: loan,
    }
  });



  //   console.log(firebase);

  // res.redirect("/");

  // docRef.set({
  //   first: "Ada",
  //   last: "Lovelace",
  //   born: 1815
  // });

let data = []

  let readDataRef = firebase.Firestore.collection('users').doc('ZqkPLXc8E7VKrdCriVgB9cQEigt1');


  let getDoc = readDataRef.get()
    .then(doc => {
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        console.log('Document data:', doc.data());
      }
    })
    .catch(err => {
      console.log('Error getting document', err);
    });
  

  res.redirect("/");
};



exports.getAllUtils = (req, res, next )=>{
  let readDataRef = firebase.Firestore.collection('users').doc('ZqkPLXc8E7VKrdCriVgB9cQEigt1');


  let getDoc = readDataRef.get()
    .then(doc => {
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        res.json(doc.data());
      }
    })
    .catch(err => {
      console.log('Error getting document', err);
    });
  

}