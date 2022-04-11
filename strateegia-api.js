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

function defaultHeader(token) {
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
}

export async function getAllProjects(token) {

    return await fetch(`${API_URL_PROJECTS}project?size=5000`, {
        method: 'get',
        headers: defaultHeader(token)
    }).then(async (data) => {
        const response = await data.json()
        return response
    }).catch((error) => {
        throw new Error('Erro no processamento')
    });
}

export async function getSummaryProjectsByUser(token) {

    return await fetch(`${API_URL_PROJECTS}project/summary?size=5000`, {
        method: 'get',
        headers: defaultHeader(token)
    }).then(async (response) => {
        const data = await response.json();
        return data;
    }).catch((error) => {
        throw new Error('Erro no processamento')
    });

}

export async function getProjectById(token, projectId) {

    return await fetch(`${API_URL_PROJECTS}project/${projectId}`, {
        method: 'get',
        headers: defaultHeader(token)
    }).then(async (response) => {
        const data = await response.json();
        return data;
    }).catch((error) => {
        throw new Error('Erro no processamento')
    });
}
export async function getCommentEngagementByContent(token, projectId) {

    return await fetch(`${API_URL_PROJECTS}project/${projectId}/divergence-point-engagement`, {
        method: 'get',
        headers: defaultHeader(token)
    }).then(async (response) => {
        const data = await response.json();
        return data;
    }).catch((error) => {
        throw new Error('Erro no processamento')
    });
}

export async function getAllDivergencePointsByMapId(token, mapId) {

    return await fetch(`${API_URL_PROJECTS}map/${mapId}/divergence-point?size=5000`, {
        method: 'get',
        headers: defaultHeader(token)
    }).then(async (response) => {
        const data = await response.json();
        return data;
    }).catch((error) => {
        throw new Error('Erro no processamento')
    });
}

export async function getMapById(token, mapId) {

    return await fetch(`${API_URL_PROJECTS}map/${mapId}`, {
        method: 'get',
        headers: defaultHeader(token)
    }).then(async (response) => {
        const data = await response.json();
        return data;
    }).catch((error) => {
        throw new Error('Erro no processamento')
    });
}

export async function getDivergencePointById(token, contentId) {

    return await fetch(`${API_URL_PROJECTS}divergence-point/${contentId}`, {
        method: 'get',
        headers: defaultHeader(token)
    }).then(async (response) => {
        const data = await response.json();
        return data;
    }).catch((error) => {
        throw new Error('Erro no processamento')
    });
}

export async function getParentComments(token, divPointId, questionId) {

    return await fetch(`${API_URL_PROJECTS}divergence-point/${divPointId}/question/${questionId}/comment?size=5000`, {
        method: 'get',
        headers: defaultHeader(token)
    }).then(async (response) => {
        const data = await response.json();
        return data;
    }).catch((error) => {
        throw new Error('Erro no processamento')
    });
}

export async function getCommentsGroupedByQuestionReport(token, divPointId) {

    return await fetch(`${API_URL_PROJECTS}divergence-point/${divPointId}/comment/report?size=5000`, {
        method: 'get',
        headers: defaultHeader(token)
    }).then(async (response) => {
        const data = await response.json();
        return data;
    }).catch((error) => {
        throw new Error('Erro no processamento')
    });
}

export async function getUser(token) {

    return await fetch(`${API_URL_USERS}user/me`, {
        method: 'get',
        headers: defaultHeader(token)
    }).then(async (response) => {
        const data = await response.json();
        return data;
    }).catch((error) => {
        throw new Error('Erro no processamento')
    });
}

export async function createParentComment(token, divPointId, questionId, comment) {
    const payload = { "text": comment }
    const JSONkit = JSON.stringify(payload);

    return await fetch(`${API_URL_PROJECTS}divergence-point/${divPointId}/question/${questionId}/comment`, {
        method: 'post',
        headers: defaultHeader(token),
        body: `${JSONkit}`
    }).then(async (response) => {
        const data = await response.json();
        return data;
    }).catch((error) => {
        throw new Error('Erro no processamento')
    });
}

export async function createReplyComment(token, parentCommentId, comment) {
    const payload = { "text": comment }
    const JSONkit = JSON.stringify(payload);

    return await fetch(`${API_URL_PROJECTS}question/comment/${parentCommentId}/reply`, {
        method: 'post',
        headers: defaultHeader(token),
        body: `${JSONkit}`
    }).then(async (response) => {
        const data = await response.json();
        return data;
    }).catch((error) => {
        throw new Error('Erro no processamento')
    });
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

    return await fetch(`${API_URL_PROJECTS}map/${mapId}/divergence-point`, {
        method: 'post',
        headers: defaultHeader(token),
        body: `${JSONkit}`
    }).then(async (response) => {
        const data = await response.json();
        return data;
    }).catch((error) => {
        throw new Error('Erro no processamento')
    });
}

// ###### TOOLS #######

export async function getAllMyTools(token) {

    return await fetch(`${API_URL_TOOLS}tool?size=5000`, {
        method: 'get',
        headers: defaultHeader(token)
    }).then(async (data) => {
        const response = await data.json();
        return response;
    }).catch((error) => {
        throw new Error('Erro no processamento')
    });

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

    return await fetch(`${API_URL_TOOLS}tool`, {
        method: 'post',
        headers: defaultHeader(token),
        body: `${JSONkit}`
    }).then(async (response) => {
        const data = await response.json();
        return data;
    }).catch((error) => {
        throw new Error('Erro no processamento')
    });
}