// app/blogs/[[...slug]]/page.js
import React from 'react';
import { createClient } from '../../../prismicio';
import { notFound } from 'next/navigation';
import BlogPost from '../../../slices/BlogPost';
import Pagination from '../../../components/MoreInfo/Pagination';

const POSTS_PER_PAGE = 2;

export default async function BlogsPage({ params }) {
  const slug = params.slug || [];
  const currentPage = slug.length > 1 ? parseInt(slug[1], 10) : 1;
  const client = createClient();

  try {
    const response = await client.getAllByType('blogPost', {
      orderings: {
        field: 'document.first_publication_date',
        direction: 'desc'
      }
    });
    
    if (!response || response.length === 0) {
      return notFound();
    }

    const totalPosts = response.length;
    const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
    
    if (currentPage > totalPages || currentPage < 1) {
      return notFound();
    }

    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const paginatedPosts = response.slice(startIndex, startIndex + POSTS_PER_PAGE);

    return (
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <h1>All Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {paginatedPosts.map((blogPost) => (
            <BlogPost key={blogPost.id} slice={{
              primary: {
                blogImg: blogPost.data.featuredImg,
                blogTitle: blogPost.data.title,
                blogDesc: blogPost.data.shortDesc
              }
            }} />
          ))}
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return notFound();
  }
}
