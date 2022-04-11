const API_URL_PROJECTS = 'https://api.strateegia.digital/projects/v1/';
const API_URL_USERS = 'https://api.strateegia.digital/users/v1/';
const API_URL_TOOLS = 'https://api.strateegia.digital/tools/v1/';

// import fetch from 'node-fetch'

export async function auth(username, password) {
    const base64Login = btoa(`${username}:${password}`);

    return await fetch(`${API_URL_USERS}auth/signin`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${base64Login}`
        }
    }).then(async (data) => {
        const response = await data.json()
        return response.access_token
    }).catch((error) => {
        throw new Error('Erro na autenticação')
    });
}

//Default Header Strateegia Request
function defaultHeader(token) {
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
}

//Default Get Request
async function defaultGet(token, url) {
    return await fetch(url, {
        method: 'get',
        headers: defaultHeader(token)
    }).then(async (data) => {
        const response = await data.json()
        return response
    }).catch((error) => {
        throw new Error('Erro no processamento')
    });
}

//Default Post Request
async function defaultPost(token, url, body) {
    return await fetch(url, {
        method: 'get',
        headers: defaultHeader(token),
        body: body
    }).then(async (data) => {
        const response = await data.json()
        return response
    }).catch((error) => {
        throw new Error('Erro no processamento')
    });
}

export async function getAllProjects(token) {
    return await defaultGet(token, `${API_URL_PROJECTS}project?size=5000`)
}

export async function getSummaryProjectsByUser(token) {
    return await defaultGet(token, `${API_URL_PROJECTS}project/summary?size=5000`)
}

export async function getProjectById(token, projectId) {
    return await defaultGet(token, `${API_URL_PROJECTS}project/${projectId}`)
}
export async function getCommentEngagementByContent(token, projectId) {
    return await defaultGet(token, `${API_URL_PROJECTS}project/${projectId}/divergence-point-engagement`)
}

export async function getAllDivergencePointsByMapId(token, mapId) {
    return await defaultGet(token, `${API_URL_PROJECTS}map/${mapId}/divergence-point?size=5000`)
}

export async function getMapById(token, mapId) {

    return await defaultGet(token, `${API_URL_PROJECTS}map/${mapId}`)
}

export async function getDivergencePointById(token, contentId) {
    return await defaultGet(token, `${API_URL_PROJECTS}divergence-point/${contentId}`)
}

export async function getParentComments(token, divPointId, questionId) {
    return await defaultGet(token, `${API_URL_PROJECTS}divergence-point/${divPointId}/question/${questionId}/comment?size=5000`)
}

export async function getCommentsGroupedByQuestionReport(token, divPointId) {
    return await defaultGet(token, `${API_URL_PROJECTS}divergence-point/${divPointId}/comment/report?size=5000`)
}

export async function getUser(token) {
    return await defaultGet(token, `${API_URL_USERS}user/me`)
}

export async function createParentComment(token, divPointId, questionId, comment) {
    const payload = { "text": comment }
    const JSONkit = JSON.stringify(payload);

    return await defaultPost(token, `${API_URL_PROJECTS}divergence-point/${divPointId}/question/${questionId}/comment`, `${JSONkit}`)
}

export async function createReplyComment(token, parentCommentId, comment) {
    const payload = { "text": comment }
    const JSONkit = JSON.stringify(payload);

    return await defaultPost(token, `${API_URL_PROJECTS}question/comment/${parentCommentId}/reply`, `${JSONkit}`)
}

export async function createDivergencePoint(token, mapId, toolId, col, row) {
    const payload = {
        "position": {
            "col": col,
            "row": row
        },
        "tool_id": toolId
    }
    const JSONkit = JSON.stringify(payload);
    return await defaultPost(token, `${API_URL_PROJECTS}map/${mapId}/divergence-point`, `${JSONkit}`)
}

// ###### TOOLS #######

export async function getAllMyTools(token) {

    return await defaultGet(token, `${API_URL_TOOLS}tool?size=5000`)

}

export async function createTool(token, title, color, description, questions, references) {
    const payload = {
        "title": title,
        "color": color,
        "description": description,
        "questions": questions,
        "references": references,
    }
    const JSONkit = JSON.stringify(payload);

    return await defaultPost(token, `${API_URL_TOOLS}tool`, `${JSONkit}`)
}