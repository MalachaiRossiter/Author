import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link} from 'react-router-dom';

const CreateForm = (props) => {
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newAuthor = ({name});
        axios.post('http://localhost:8000/api/author', newAuthor)
        .then(res => {
            console.log(res);
            console.log(res.data);
            navigate('/');
        })
        .catch((err) => {
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        });
    }

    return (
        <div>
            <Link to={`/`}>Back to Home</Link>
            <h1>Add a new author</h1>
            <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Name</label><br/>
                    <input type="text" onChange={(e) => setName(e.target.value)}/>
                </p>
                <input class="btn btn-primary" type="submit"/>
            </form>
        </div>
    )
};
export default CreateForm;
