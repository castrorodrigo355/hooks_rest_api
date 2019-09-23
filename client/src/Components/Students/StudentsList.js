import React, { useState } from 'react'

const StudentsList = (props) => {

    // const [idRegister, setIdRegister] = useState(null);

    const deleteStudent = id => {
        props.onDeleteStudent(id)
    }

    const getStudent = id => {
        props.onGetStudent(id)
    }

    const updateStudent = student => {
        // const studentRegister = { 
        //     _id: student._id,
        //     name: student.name,
        //     age: student.age
        // };
        // setIdRegister({idRegister: studentRegister});
        props.onUpdateStudent(student)
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
                            <button type="submit" className="btn btn-danger" onClick={() => deleteStudent(student._id)}>Delete</button>
                            <button type="submit" className="btn btn-secondary" onClick={() => updateStudent(student)}>Edit</button>
                            <button type="submit" className="btn btn-info" onClick={() => getStudent(student._id)}>Info</button>
                        </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default StudentsList;