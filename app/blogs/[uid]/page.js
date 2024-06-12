import { notFound } from 'next/navigation';
import { SliceZone } from '@prismicio/react';
import { createClient } from '../../../prismicio';
import { components } from '../../../slices';

export default async function BlogPostPage({ params }) {
  const { uid } = params;
  const client = createClient();

  try {
    const blogPost = await client.getByUID('blogPost', uid);

    if (!blogPost) {
      return notFound();
    }

    return (
      <div>
        <h1>{blogPost.data.title}</h1>
        <PrismicRichText field={data.shortDesc} />
        <p>By {blogPost.data.author}</p>
        <p>{new Date(blogPost.data.publishDate).toLocaleDateString()}</p>
        <img src={blogPost.data.featuredImg.url} alt={blogPost.data.featuredImg.alt} />
        <SliceZone slices={blogPost.data.slices} components={components} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return notFound();
  }
}

export async function generateMetadata({ params }) {
  const { uid } = params;
  const client = createClient();

  try {
    const blogPost = await client.getByUID('blogPost', uid);

    if (!blogPost) {
      return {
        title: 'Not Found',
        description: 'The requested blog post could not be found.',
      };
    }

    return {
      title: blogPost.data.title,
      description: blogPost.data.meta_description,
    };
  } catch (error) {
    console.error('Error generating metadata for blog post:', error);
    return {
      title: 'Error',
      description: 'There was an error retrieving the blog post metadata.',
    };
  }
}
