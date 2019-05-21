import Firebase from 'firebase';

let firebaseConfig = {
  apiKey: "AIzaSyBXDJZv4i46xC3eRg-iQf_BI2s6i2_Aw7Q",
  authDomain: "react-native-idlan.firebaseapp.com",
  databaseURL: "https://react-native-idlan.firebaseio.com",
  projectId: "react-native-idlan",
  storageBucket: "react-native-idlan.appspot.com",
  messagingSenderId: "635708758322",
  appId: "1:635708758322:web:9cced9bc6784f914"
};


  let app = Firebase.initializeApp(firebaseConfig);
  export const db = app.database()