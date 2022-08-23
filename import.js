//Imports
const firestoreService = require("firestore-export-import");
const firebaseConfig = require("./Firebase.js");
const serviceAccount = require("./src/serviceAccount.json");

//Json to Firestore
const jsonToFirestore = async () => {
  try {
    console.log("Initializing Firebase");
    await firestoreService.initializeFirebaseApp(
      serviceAccount,
      firebaseConfig.databaseURL
    );
    console.log("Firebase Initialized");

    await firestoreService.restore("src/components/api_components/Api.json");
    console.log("Upload success");
  } catch (error) {
    console.log(error);
  }
};

jsonToFirestore();
