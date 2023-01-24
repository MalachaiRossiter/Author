import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const UpdateForm = (props) => {
    const {id} = useParams();
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const [loaded, setLoaded] =useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then((res) => {
            setName(res.data.name);
            setLoaded(true);
        })
        .catch((err) => console.log(err));
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newAuthor = ({name});
        axios.put(`http://localhost:8000/api/author/${id}`, newAuthor)
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
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </p>
                <input class="btn btn-primary" type="submit"/>
            </form>
        </div>
    )
}
export default UpdateForm;