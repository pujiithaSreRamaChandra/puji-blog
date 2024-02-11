import Blogs from "./Blogs";
import useFetch from "./useFetch";


const Home = () => {
    const {data,isLoading,error} = useFetch("http://localhost:3001/blogs");
    
    //JSX to be returned on the home page
    return (
        <div className="home">
            {error && <h1 className="error-message">{error}</h1>}
            {isLoading && <div className="loading">BLOGS LOADING.. <span id= "l-emoji">(" ^ ~ ^ ")</span></div>}
            {data && <Blogs blogs={data} title="All blogs" date="12-02-2024"></Blogs>}
        </div>
      );
}
 
export default Home;