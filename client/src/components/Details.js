import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const Details = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [loaded, setLoaded] =useState(false);

    const [name, setName] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then((res) => {
            setName(res.data.name);
            setLoaded(true);
        })
        .catch((err) => console.log(err));
    }, []);

    const deleteAuthor = e => {
        axios.delete(`http://localhost:8000/api/author/${id}`)
        .then(res => {
            console.log(res);
            navigate('/');
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <Link to={`/`}>Back to home</Link>
            <h3>Author name: {name}</h3>
            <button class="btn btn-danger" onClick={deleteAuthor}>Kill: {name}</button>
        </div>
    )
}
export default Details;