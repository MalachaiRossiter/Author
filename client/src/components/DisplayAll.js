import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const DisplayAll = (props) => {
    const [authorList, setAuthorList] = useState ([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
        .then(res => {
            console.log(res.data);
            setAuthorList(res.data);
        })
        .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <h1>Welcome to the book shop of DOOOM</h1>
            <p>Please look through our fine selection of authors</p>
            <Link to={"/author/add"}>Please add more authors you know</Link>
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                authorList && authorList.map((author, index) => (
                    <tr key={index}>
                        <td>{author.name}</td>
                        <td><Link to={`/author/details/${author._id}`}>Details</Link> | <Link to={`/author/edit/${author._id}`}>Edit</Link></td>
                    </tr>
                ))
                }
                </tbody>
            </table>
        </div>
    )
}
export default DisplayAll;