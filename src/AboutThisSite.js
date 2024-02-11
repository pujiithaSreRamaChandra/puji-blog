import { Link } from "react-router-dom";

const AboutThisSite = () => {
    return ( 
        <div className="about-me">
            <h1>This site is made by @pujiitha_sre_charapaka</h1>
            <Link to ="https://github.com/pujiithaSreRamaChandra">Do visit my Git-hub for more projects</Link>
        </div>
        
     );
}
 
export default AboutThisSite;