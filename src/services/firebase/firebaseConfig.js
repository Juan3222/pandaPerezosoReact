import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyB2EOLbNe313PXMsgnb5PCpaKNCiT2Zs0Y",
	authDomain: "pandaperezosoreact.firebaseapp.com",
	projectId: "pandaperezosoreact",
	storageBucket: "pandaperezosoreact.appspot.com",
	messagingSenderId: "307852021531",
	appId: "1:307852021531:web:423bdd369cccf2c1468dbe",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
