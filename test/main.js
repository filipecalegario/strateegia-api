import { createTool, getConvergencePointById, createConvergencePoint, createMap } from "../strateegia-api.js";

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

    // const convergencePoint = await getConvergencePointById(accessToken, "6281406ae3d4056cc9163837");
    // console.log(convergencePoint);
    // const closing_date = new Date();
    // closing_date.setDate(closing_date.getDate() + 2);
    // console.log(closing_date.toISOString());
    // const positionX = 7;
    // const positionY = 8;
    // const questions = [{"text": "question2", options: [{"text": "optionA"}, {"text": "optionB"}]}];
    // const responseFromCreateConvergencePoint = await createConvergencePoint(accessToken, "61f2aa932a0271235e71b33e", closing_date, positionX, positionY, questions);
    // console.log(responseFromCreateConvergencePoint);
    const projectId = "627e4febe3d4056cc916370b";
    const title = "Mapa Morfológico";

    const responseFromCreateMap = await createMap(accessToken, projectId, title);
    console.log(responseFromCreateMap);

}

