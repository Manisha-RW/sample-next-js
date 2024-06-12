import React from 'react';
import { createClient } from '../../prismicio';
import { notFound } from 'next/navigation';
import BlogPost from '../../slices/BlogPost';
import Pagination from '../../components/MoreInfo/Pagination';

export default async function BlogsPage() {
  const client = createClient();

  try {
    const response = await client.getAllByType('blogPost');

    if (!response || response.length === 0) {
      return notFound();
    }

    return (
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <h1>All Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {response.map((blogPost) => (
            <BlogPost key={blogPost.id} slice={{
              primary: {
                blogImg: blogPost.data.featuredImg,
                blogTitle: blogPost.data.title,
                blogDesc: blogPost.data.shortDesc
              }
            }} />
          ))}
        </div>
        <Pagination />
      </div>
    );
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return notFound();
  }
}
