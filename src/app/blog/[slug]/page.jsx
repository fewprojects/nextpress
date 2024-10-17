import format from "date-fns/format"
import SinglePost from "@/app/components/SinglePost"
import parseISO from "date-fns/parseISO"
import { siteConfig as siteMetadata } from '@/app/siteConfig';
import getAllBlogPosts from "@/app/blog/components/getBlogPosts"

async function getPost(slug) {
  const data = await getAllBlogPosts()
  const post = await data.find((post) => post.slug === slug)
  return post
}
export async function generateMetadata({ params }) {
  const { slug } = params
  const blog = await getPost(slug)
  if (!blog) {
    return;
  }
  const publishedTime = format(parseISO(blog.date), "yyyy-MM-dd")
  function stripHtml(html) {
    let strippedText = html.replace(/<[^>]*>/g, '');
    // Replace common HTML entities with their respective characters
    strippedText = strippedText
      .replace(/&rsquo;/g, '’')
      .replace(/&hellip;/g, '...')
      .replace(/&nbsp;/g, ' ')
      .replace(/&#8217;/g, "'")
      .replace(/&raquo;/g, '»');

    return strippedText;
  }
  const allKeywords = Object.keys(blog?.tags).join(', ');
  const description = stripHtml(blog?.excerpt)
  return {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: blog.title,
    description: description,
    keywords: allKeywords,
    openGraph: {
      title: blog.title,
      description: description,
      url: `${siteMetadata.siteUrl}/${blog.slug}`,
      siteName: 'Blog | Phoneprice24 - Smartphone Price history on Amazon',
      locale: 'en-us',
      type: 'article',
      publishedTime: publishedTime,
      images: [
        {
          url: blog?.featured_image,
          width: 800,
          height: 600,
          alt: 'Blog Image',
          type: 'image/jpeg',
        },
      ],
      locale: 'en',
      type: 'article',
      author: siteMetadata.author,
      twitter: {
        card: 'summary_large_image',
        title: blog.title,
        description: description,
        images: [
          {
            url: blog?.featured_image,
            width: 800,
            height: 600,
            alt: 'Blog Image',
            type: 'image/jpeg',
          },
        ],
      },
    }
  }
}

export default async function Page({ params }) {
  const { slug } = await params
  const post = await getPost(slug)
  return (
    <section className="z-0 container mx-auto w-full max-w-4xl grid gap-6 pb-8 pt-3 md:py-10 px-8 lg:px-12 justify-center">
      <SinglePost post={post} />
    </section>
  )
}