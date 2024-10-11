import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

import dotenv from "dotenv";
dotenv.config();

const firebaseConfig = {
    databaseURL: process.env.DATABASE_URL
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);