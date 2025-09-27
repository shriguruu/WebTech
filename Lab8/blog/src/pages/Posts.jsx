// Page to display all blog posts

import PostList from '../components/PostList';
import blogPosts from '../components/data.js';

const PostsPage = () => (
    <>
      <h1 className="mb-4">All Blog Posts</h1>
      <PostList posts={blogPosts} />
    </>
);

export default PostsPage;