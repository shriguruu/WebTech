// Main application component for the blog dashboard

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import BlogNavbar from './components/BlogNavBar.jsx';
import HomePage from './pages/Home.jsx';
import PostsPage from './pages/Posts.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BlogNavbar />
        <Container>
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/posts" Component={PostsPage} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;