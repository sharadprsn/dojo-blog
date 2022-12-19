
import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';


function App() {
  return (
    <Router>
       <div className="App">
          <Navbar/>
          <div className="content" >
            <Routes>
              <Route exact path='/' element={ <Home/> } />
              <Route exact path='/create' element={ <Create />}/>
              <Route path='/blog/:id' element={ <BlogDetails /> }/>
              <Route path='*' element={ <NotFound />}/>
            </Routes>
          </div>
        </div>
    </Router>
    
  );
}

export default App;
