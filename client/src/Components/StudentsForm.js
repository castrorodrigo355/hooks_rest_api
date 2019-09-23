import React, { useState } from 'react';

const StudentsForm = (props) => {

    const [person, setPerson] = useState({name: '', age: ''})
    // const dispatch = useDispatch();
    // const addStudent = (student) => dispatch(addStudentAction(student));

    const onChange = e => {
        setPerson({...person, [e.target.name]: e.target.value}) 
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log(e)
        // if(person.name === '' || person.age === '') {
        //     console.log("please complet fields")
        // }else{
        //     const student = {
        //         name: person.name,
        //         age: person.age,
        //     }
        //     // console.log(formDataStudent)
        //     props.onPostStudent(student)
        //     // setPerson({ name: '', age: '' });
        // }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" value={person.name} onChange={onChange}
                            className="form-control" name="name" id="name" placeholder="Name..."/>
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input type="number" value={person.age} onChange={onChange}
                            className="form-control" name="age" id="age" placeholder="Age..."/>
                </div>
                <button type="submit" className="btn btn-primary">Add Student</button>
            </form>
        </div>
    );
}

export default StudentsForm;