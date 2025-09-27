// Main application component for the blog dashboard

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import BlogNavbar from './components/BlogNavBar.jsx';
import PostList from './components/PostList';
import blogPosts from './components/data.js';
import './App.css';

function App() {
   const PostsPage = () => (
    <>
      <h1 className="mb-4">All Blog Posts</h1>
      <PostList posts={blogPosts} />
    </>
  );

  // A simple component for the home page message
  const HomePage = () => (
    <>
      <h1 className="mb-4">Welcome Home!</h1>
      <p>Here are our most recent posts.</p>
      <PostList posts={blogPosts} />
    </>
  );
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