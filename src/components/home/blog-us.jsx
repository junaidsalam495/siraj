import React from "react";
import { blogPosts } from "@/mock/blog-us";
import UnderlineTitle from "../ui/text/underline-title";
import { BlogCardLarge, BlogCardSmall } from "../ui/card/blog-card";
import { SectionHeading } from "../ui/text/heading-text";
import Image from "next/image";

const BlogUs = () => {
  return (
    <section className="relative w-full py-20 mx-auto px-4 md:px-20">
      <div className="flex flex-col items-center mb-12 max-w-2xl mx-auto justify-center">
        <UnderlineTitle text="OUR BLOGS" />
        <SectionHeading
          whiteText="Latest News & Articles From"
          highlightText="The Blog Posts"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
        <BlogCardLarge
          tags={blogPosts[0]?.tags}
          authorImage={blogPosts[0]?.authorImage}
          author={blogPosts[0]?.author}
          date={blogPosts[0]?.date}
          comments={blogPosts[0]?.comments}
          title={blogPosts[0]?.title}
          description={blogPosts[0]?.description}
        />
        <div className="flex flex-col gap-4">
          {blogPosts?.slice(1)?.map((post) => (
            <BlogCardSmall
              key={post?.id}
              tags={post?.tags}
              image={post?.image}
              authorImage={post?.authorImage}
              author={post?.author}
              date={post?.date}
              comments={post?.comments}
              title={post?.title}
              description={post?.description}
            />
          ))}
        </div>
      </div>
      <Image
        src="/images/gradient-circle.png"
        width={600}
        height={600}
        alt="Gradient"
        className="absolute left-0 top-0"
      />
    </section>
  );
};

export default BlogUs;
