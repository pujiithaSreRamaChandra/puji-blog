import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="Not-found">
            <h1>OOPS the page you requested doesnt exist <span id = "l-emoji">(⁠*⁠・⁠～⁠・⁠*⁠)</span></h1>
            <Link to='/'>click here to go back to the homepage</Link>
        </div>
     );
}
 
export default NotFound;