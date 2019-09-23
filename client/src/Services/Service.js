const url = `http://localhost:3000/api/students/`;

export default {
    getStudents, getStudent, deleteStudent, postStudent, updateStudent
}

async function getStudents() {
    const request = await fetch(`${url}`);
    const data = await request.json();
    return data;
}

async function getStudent(id) {
    const request = await fetch(`${url}${id}`);
    const data = await request.json();
    return data;
}

async function deleteStudent(id){
    const response = await fetch(`${url}${id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method:"DELETE"
    })
    const data = await response.json();
    return data
}

async function postStudent(student){
    const response = await fetch(`${url}`, {
        method: 'POST',
        headers: { 'Accept': 'application/json',
                    'Content-Type': 'application/json'},
        body: JSON.stringify(student)
    });
    const data = await response.json();
    return data
}

async function updateStudent(id, student){
    const response = await fetch(`${url}${id}`, {
        method: 'PUT',
        headers: { 'Accept': 'application/json',
                    'Content-Type': 'application/json'},
        body: JSON.stringify(student)
    });
    const data = await response.json();
    return data
}