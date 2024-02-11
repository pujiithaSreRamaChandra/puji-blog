import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const {data,isLoading,error} = useFetch('http://localhost:3001/blogs/' + id);
    const Navigate = useNavigate();
    
    const handleDelete = () =>{
        fetch('http://localhost:3001/blogs/' + data.id,{
            method : 'DELETE'
        })
        .then(()=>{
            Navigate('/')
        })
    }
    return (
         <div className="Actual-blog">
            {isLoading && <div>BLOGS LOADING.. <span id="l-emoji">(" ^ ~ ^ ")</span></div>}
            {error && <p>{error}</p>}
            {data && (
                <article>
                    <h1>{data.title}</h1>
                    <p>written by {data.author}</p>
                    <p>{data.body}</p>
                    <button className="delete-blog" onClick={handleDelete}>Delete blog</button>
                </article>
            )}
            
         </div>
    
    );
}
 
export default BlogDetails;