import BlogMain from "@/components/blog/blog-main";
import ContactUs from "@/components/home/contact-us";
import HeroSection from "@/components/ui/hero-section";
import React from "react";

const BlogPage = () => {
  return (
    <>
      <HeroSection
        tagText="Blog"
        whiteText="Insightful Tech"
        highlightText="Blogs"
        description="Stay updated with the latest trends in technology, cybersecurity, and digital innovation. Explore expert opinions, industry insights, and solutions that shape the future of IT."
        backgroundImage="/images/home/bg-hero.png"
      />
      <BlogMain />
      <ContactUs />
    </>
  );
};

export default BlogPage;
