import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyDHgk0gcii6NFmvZZHBNrqgW9qrjJkxIjE",
      authDomain: "snspj-dcb3e.firebaseapp.com",
      projectId: "snspj-dcb3e",
      storageBucket: "snspj-dcb3e.appspot.com",
      messagingSenderId: "1077114202460",
      appId: "1:1077114202460:web:808f07adff5dfc3aaf7999",
      measurementId: "G-KCPX7C8992"
    }
  )
}
  
export default firebase