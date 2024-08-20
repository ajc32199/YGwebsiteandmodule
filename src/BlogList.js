const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
        ))
      ) : (
        <p>No blogs to display</p>
      )}
    </div>
  );
};

export default BlogList;
