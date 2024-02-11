import { Link } from "react-router-dom";

const Blogs = ({blogs,date,title}) => {
    return (  
        <div className="blogs">
            <h3>{title}</h3>
            <h4>Updated on {date}</h4>
            {blogs.map((blog) => (
                <div className="blog-preview" key = {blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h1>{blog.title}</h1>
                        <p>blog by {blog.author}</p>
                    </Link>

                </div>
            ))}
        </div>
    );
}
 
export default Blogs;
