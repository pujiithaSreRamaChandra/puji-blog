import {useState} from "react";
import {useNavigate} from "react-router-dom"
const Create = () => {
    const [title,setTitle] = useState('')
    const [author , setAuthor] = useState('')
    const [body , setBody] = useState('')
    const [isPending , setIsPending] = useState(false)
    const Navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title,author,body};
        setIsPending(true);
        fetch('http://localhost:3001/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
            })
            .then(() => {
            setIsPending(false);
            Navigate('/');
        })
    }

    
    return (
        <div className="create">
            <h1>Create a new blog here</h1>
            <form className="form" onSubmit={handleSubmit}>
                <label>Blog Title :</label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e) => (setTitle(e.target.value))}>
                </input>
                <label>Blog Author :</label>
                <select value = {author} onChange={(e) =>setAuthor(e.target.value)}>
                    <option value="madam curie">madam curie</option>
                    <option value="sundar pichai">sundar pichai</option>
                    <option value="albert enstein">albert enstein</option>
                </select>
                <label>Blog Body:</label>
                <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
                {!isPending && <button className="add-blog-btn">Add Blog</button>}
                {isPending && <p>Adding your blog...</p>}
                
            </form>
            
        </div>
      );
}
 
export default Create;