// Page to display home content with recent blog posts

import PostList from '../components/PostList';
import blogPosts from '../components/data.js';

const HomePage = () => (
    <>
      <h1 className="mb-4">Welcome Home!</h1>
      <p>Here are our most recent posts.</p>
      <PostList posts={blogPosts} />
    </>
);

export default HomePage