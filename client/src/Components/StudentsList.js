import React from 'react'

const StudentsList = (props) => {

    const deleteStudent = id => {
        props.onDeleteStudent(id)
    }
    const getStudent = id => {
        props.onGetStudent(id)
    }

    return (
        <div>
            <ul>
                {
                    props.students.map((student, i) => {
                        return(
                        <li key={i}>
                            {student.name} - 
                            {student.age} - 
                            <button onClick={() => deleteStudent(student._id)}>Delete</button>
                            <button onClick={() => getStudent(student._id)}>Info</button>
                        </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default StudentsList;