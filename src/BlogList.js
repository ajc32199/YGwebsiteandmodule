const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
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
