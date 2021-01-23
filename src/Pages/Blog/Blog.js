import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="blog-container">
        <h1
          className="sub-header"
          style={{ marginTop: 0, margin: 0, textAlign: "left" }}
        >
          Blog
        </h1>
        <p style={{ marginBottom: 80, fontSize: 18 }}>
          In the future, I'll be posting articles here about technology, my
          experiences, and more!
        </p>
      </div>
    </div>
  );
};

export default Blog;
