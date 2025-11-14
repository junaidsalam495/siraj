import React from "react";
import { blogPosts } from "@/mock/blog-us";
import { BlogCardSimple } from "../ui/card/blog-card";

const BlogMain = () => {
  return (
    <section className="relative w-full py-20 mx-auto px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-4">
        {blogPosts?.map((post) => (
          <BlogCardSimple
            key={post?.id}
            image={post?.image}
            date={post?.date}
            comments={post?.comments}
            title={post?.title}
            description={post?.description}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogMain;
