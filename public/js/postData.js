const utilityName = document.querySelector("#utilityName");
const utilityPrice = document.querySelector("#utilityPrice");
const inputBtn = document.querySelector("#inputBtn");
const userId = document.querySelector("#userId");

firebase.initializeApp({
  apiKey: "AIzaSyAw-d8AMzPTx56XHA5SlGPOoRM5dXHyyro",
  authDomain: "semicolon-7db7e.firebaseapp.com",
  projectId: "semicolon-7db7e"
});

var db = firebase.firestore();

inputBtn.addEventListener("click", async () => {
  const Name = utilityName.value;
  const Price = utilityPrice.value;

  console.log("asdasd");

  console.log(Name, Price, userId.value);

  // let docRef = db.collection("users").doc(userId.value);

  //   docRef
  //     .set({
  //       name: Name,
  //       price: Price
  //     })
  //     .then(function() {
  //       console.log("Document successfully written!");
  //     })
  //     .catch(function(error) {
  //       console.error("Error writing document: ", error);
  //     });

  //   let docRef = await db
  //     .collection("users")
  //     .doc("YSYnEKg5YgH5i47RhNOe")
  //     .get();
  //   console.log(docRef);
  try {
    let place = await db
      .collection("users")
      .doc("YSYnEKg5YgH5i47RhNOe")
      .get();

    if (place) {
      console.log(place.data());
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.log(error);
  }
});
