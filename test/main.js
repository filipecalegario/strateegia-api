import { createTool, getConvergencePointById } from "../strateegia-api.js";

const accessToken = localStorage.getItem("strateegiaAccessToken");

if (accessToken == 'undefined') {
    console.log("No access token");
    window.alert("Authentication failed: No access token");
} else {
    test();
}

async function test() {
    // const questions = [{ "question": "My first question" }, { "question": "My second question" }];
    // const references = [{ "description": "My first reference", "url": "https://www.google.com" }, { "description": "My second reference", "url": "https://www.ufpe.br" }];

    // const responseFromCreateTool = await createTool(accessToken, "My second new tool", "BLUE", "this is my new tool", questions, references);

    // console.log(responseFromCreateTool);

    const convergencePoint = await getConvergencePointById(accessToken, "625079c6aedbf41fe9d1df0f");
    console.log(convergencePoint);
}

