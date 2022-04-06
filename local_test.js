import dotenv from 'dotenv';
import { auth, getAllProjects } from "./strateegia-api.js";

dotenv.config();

const STRATEEGIA_USERNAME = process.env.STRATEEGIA_USERNAME;
const STRATEEGIA_PASSWORD = process.env.STRATEEGIA_PASSWORD;

console.log(`${STRATEEGIA_USERNAME}:${STRATEEGIA_PASSWORD}`);

const access_token = await auth(STRATEEGIA_USERNAME, STRATEEGIA_PASSWORD);

console.log(access_token);

const allProjects = await getAllProjects(access_token);

console.log(allProjects);