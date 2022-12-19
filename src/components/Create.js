import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {
    
    const [ title, setTitle ] = useState('');
    const [ body, setBody ]  = useState('');
    const [ author, setAuthor]  = useState('Mario');
    const [ isPending, setIsPending ] = useState(false);

    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        const blog = {title, body, author};
        
        fetch('http://localhost:8000/blogs', 
        {
            method:"POST",
            headers: {"Content-type": "application/json"},
            body:JSON.stringify(blog)
        })
        .then((resp) => {
            setIsPending(false);
            setTitle('');
            setAuthor('Mario');
            setBody('');
            navigate('/');
        });
    } 

    return ( 
    <div className="create">
        <h2>Add a new blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
            <label>Blog body:</label>
            <textarea required value={body} onChange={ (e) => setBody(e.target.value)}/>
            <label>Blog author:</label>
            <select value={author} onChange={ (e) => setAuthor(e.target.value)}>
                <option value="Mario">Mario</option>
                <option value="Yoshi">Yoshi</option>
            </select>
            <button disabled={isPending}>Add blog</button>
        </form>

    </div> 
    );
}
 
export default Create;