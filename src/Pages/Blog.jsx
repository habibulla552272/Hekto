import React from "react";
import BlogHero from "../Component/Blogpage/BlogHero";

import BlogMarge from "../Component/Blogpage/BlogMarge";

const Blog = () => {
  return (
    <section>
      <BlogHero />
      <div className="container mx-auto">
        <BlogMarge />



      </div>
    </section>
  );
};

export default Blog;
