const API_URL_PROJECTS = 'https://api.strateegia.digital/projects/v1/';
const API_URL_USERS = 'https://api.strateegia.digital/users/v1/';
const API_URL_TOOLS = 'https://api.strateegia.digital/tools/v1/';

export async function auth(username, password) {
    const base64Login = btoa(`${username}:${password}`);

    const response = await fetch(`${API_URL_USERS}auth/signin`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${base64Login}`
        }
    });

    const data = await response.json();

    return data.access_token;
}

export async function getAllProjects(token) {

    const response = await fetch(`${API_URL_PROJECTS}project?size=5000`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();

    return data;
}

export async function getSummaryProjectsByUser(token) {

    const response = await fetch(`${API_URL_PROJECTS}project/summary?size=5000`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();

    return data;
}

export async function getProjectById(token, projectId) {

    const response = await fetch(`${API_URL_PROJECTS}project/${projectId}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();

    return data;
}

export async function getCommentEngagementByContent(token, projectId) {

    const response = await fetch(`${API_URL_PROJECTS}project/${projectId}/divergence-point-engagement`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();

    return data;
}

export async function getAllDivergencePointsByMapId(token, mapId) {

    const response = await fetch(`${API_URL_PROJECTS}map/${mapId}/divergence-point?size=5000`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();

    return data;
}

export async function getMapById(token, mapId) {

    const response = await fetch(`${API_URL_PROJECTS}map/${mapId}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();

    return data;
}

export async function getDivergencePointById(token, contentId) {

    const response = await fetch(`${API_URL_PROJECTS}divergence-point/${contentId}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();

    return data;
}

export async function getParentComments(token, divPointId, questionId) {

    const response = await fetch(`${API_URL_PROJECTS}divergence-point/${divPointId}/question/${questionId}/comment?size=5000`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();

    return data;
}

export async function getCommentsGroupedByQuestionReport(token, divPointId) {

    const response = await fetch(`${API_URL_PROJECTS}divergence-point/${divPointId}/comment/report?size=5000`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();

    return data;
}

export async function getConvergencePointById(token, contentId) {

    const response = await fetch(`${API_URL_PROJECTS}convergence-point/${contentId}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();

    return data;
}

export async function getCheckpointById(token, contentId) {

    const response = await fetch(`${API_URL_PROJECTS}checkpoint/${contentId}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();

    return data;
}

export async function getAllCheckpointCommentsByCheckpointId(token, checkpointId) {

    const response = await fetch(`${API_URL_PROJECTS}checkpoint/${checkpointId}/comment?size=5000`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();

    return data;
}

export async function getAllReplyCheckpointCommentsByParentId(token, parentId) {

    const response = await fetch(`${API_URL_PROJECTS}comment/${parentId}/reply?size=5000`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();

    return data;
}

export async function getUser(token) {

    const response = await fetch(`${API_URL_USERS}user/me`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();

    return data;
}

// CREATEs

export async function createMap(token, projectId, title) {
    const response = await fetch(`${API_URL_PROJECTS}project/${projectId}/map`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            title: title
        })
    });

    const data = await response.json();

    return data;
}

export async function createParentComment(token, divPointId, questionId, comment) {
    const payload = { "text": comment }
    const JSONkit = JSON.stringify(payload);

    const response = await fetch(`${API_URL_PROJECTS}divergence-point/${divPointId}/question/${questionId}/comment`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: `${JSONkit}`
    });

    return await response.json();
}

export async function createReplyComment(token, parentCommentId, comment) {
    const payload = { "text": comment }
    const JSONkit = JSON.stringify(payload);

    const response = await fetch(`${API_URL_PROJECTS}question/comment/${parentCommentId}/reply`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: `${JSONkit}`
    });

    return await response.json();
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

    const response = await fetch(`${API_URL_PROJECTS}map/${mapId}/divergence-point`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: `${JSONkit}`
    });

    return await response.json();
}

// ###### CONVERGENCE POINTS #######

export async function createConvergencePoint(token, mapId, closingDate, positionX, positionY, questions) {
    // const payload = {
    //     "closing_date": "2022-02-12T04:54:07.085Z",
    //     "position": {
    //         "col": 0,
    //         "row": 0
    //     },
    //     "questions": [
    //         {
    //             "text": "string",
    //             "options": [
    //                 {
    //                     "text": "string"
    //                 }
    //             ],
    //         }
    //     ]
    // }
    const payload = {
        "closing_date": closingDate,
        "position": {
            "row": positionX,
            "col": positionY
        },
        "questions": questions
    }
    const JSONkit = JSON.stringify(payload);

    const response = await fetch(`${API_URL_PROJECTS}map/${mapId}/convergence-point`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: `${JSONkit}`
    });

    return await response.json();
}

// ###### TOOLS #######

export async function getAllMyTools(token) {

    const response = await fetch(`${API_URL_TOOLS}tool?size=5000`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();

    return data;
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

    const response = await fetch(`${API_URL_TOOLS}tool`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: `${JSONkit}`
    });

    return await response.json();
}




