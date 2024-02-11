import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Create from './create';
import BlogDetails from './BlogDetails';
import AboutThisSite from './AboutThisSite';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Router>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path ='/Create' element={<Create/>}></Route>
            <Route exact path = '/AboutThisSite' element ={<AboutThisSite></AboutThisSite>}></Route>
            <Route exact path='/blogs/:id' element ={<BlogDetails></BlogDetails>}></Route>
            <Route exact path ='*' element={<NotFound></NotFound>}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
