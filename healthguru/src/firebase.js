import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: "AIzaSyCF6loxNsFZd09yOr32gRqYacCs_yMMdWw",
  authDomain: "fitme-10808.firebaseapp.com",
  projectId: "fitme-10808",
  storageBucket: "fitme-10808.appspot.com",
  messagingSenderId: "245561686839",
  appId: "1:245561686839:web:bcf9aa828bf2fc8771b8b2",
  measurementId: "G-F1XF1JNPCQ"
})

export const auth= app.auth()
export default app