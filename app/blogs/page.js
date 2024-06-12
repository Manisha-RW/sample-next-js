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
      <div>
        <h1>All Blog Posts</h1>
        <div>
          {response.map((blogPost) => (
            <BlogPost key={blogPost.id} slice={{ primary: {
              blogImg: blogPost.data.featuredImg,
              blogTitle: blogPost.data.title,
              blogDesc: blogPost.data.shortDesc
            }}} />
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
