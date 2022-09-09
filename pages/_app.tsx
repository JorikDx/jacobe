import '../styles/desktop/globals.css'
import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'antd/dist/antd.css';
config.autoAddCss = false
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
function MyApp({ Component, pageProps }: AppProps) {
  // Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCxRQdG2wQET6qbDsCXjIrUoDR-Ef_6YEM",
    authDomain: "jacobe-8ad29.firebaseapp.com",
    databaseURL: "https://jacobe-8ad29-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "jacobe-8ad29",
    storageBucket: "jacobe-8ad29.appspot.com",
    messagingSenderId: "854380106691",
    appId: "1:854380106691:web:ac65871f466128bf78e376"
  };

  const app = initializeApp(firebaseConfig)
  const database = getDatabase(app);

  return <Component {...pageProps} />
}

export default MyApp
