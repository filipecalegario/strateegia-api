import dotenv from 'dotenv';
import { auth, getAllProjects, getAllMyTools, createTool } from "./strateegia-api.js";

dotenv.config();

const STRATEEGIA_USERNAME = process.env.STRATEEGIA_USERNAME;
const STRATEEGIA_PASSWORD = process.env.STRATEEGIA_PASSWORD;

console.log(`${STRATEEGIA_USERNAME}:${STRATEEGIA_PASSWORD}`);

const access_token = await auth(STRATEEGIA_USERNAME, STRATEEGIA_PASSWORD);

console.log(access_token);

// const allProjects = await getAllProjects(access_token);

// console.log(allProjects);

// const allTools = await getAllMyTools(access_token);

// console.log(allTools);

// const questions = [{ "question": "My first question" }, { "question": "My second question" }];
// const references = [{ "description": "My first reference", "url": "https://www.google.com" }, { "description": "My second reference", "url": "https://www.ufpe.br" }];

// const responseFromCreateTool = await createTool(access_token, "My new tool", "BLUE", "this is my new tool", questions, references);

// console.log(responseFromCreateTool);

const mapId = "5ea96f7d33cacd07a60426b2";

const mapContents = await getMapById(access_token, mapId);

console.log(mapContents);

const checkpoints = mapContents.points.filter(point => point.point_type === "CONVERSATION");

console.log(checkpoints);