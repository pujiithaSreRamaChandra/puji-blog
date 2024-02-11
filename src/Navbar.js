

const Navbar = () => {
    return ( 
        <nav className="Navbar">
            <h1>THE PUJI BLOG</h1>
            <div className="links">
                <a href="/">HOME</a>
                <a href="/AboutThisSite">ABOUT SITE</a>
                <a href ="create" to="/create">NEW BLOG</a>
            </div>
        </nav>
     );
}
 
export default Navbar;