import { siteConfig as siteMetadata } from '@/app/siteConfig';
import getAllBlogPosts from './components/getBlogPosts';
import BlogCard from '../components/BlogCard';

async function Page() {
  const data = await getAllBlogPosts()
  return (
    <section className='z-0 container grid gap-6 pb-8 pt-3 md:py-10 px-8 lg:px-12'>
      <h1 className="text-4xl font-semibold text-gray-900 sm:text-6xl tracking-normal mb-10">
        Blog
      </h1>
      <div>
        <div className='w-full lg:grid lg:grid-cols-3 gap-4 lg:space-y-0'>
          {
            data?.map((blog) => (
              // <BlogCard key={blog.ID} blog={blog} />
              // <p>{JSON.stringify(blog)}</p>
              <BlogCard blog={blog} key={blog.ID}/>
            ))
          }
        </div>
      </div>
    </section>
  );
}
export default Page;
export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: "Blog",
  description: "Read blog posts about how to downlaod Instagram reels online for free. Easy and Quick Tips and tricks",
  keywords: "Instagram blog, Download reels tricks,",
  openGraph: {
    title: "Blog | Downloadreels.app",
    description: "Read blog posts about how to downlaod Instagram reels online for free. Easy and Quick Tips and tricks",
    url: `${siteMetadata.siteUrl}/blog`,
    siteName: siteMetadata.title,
    locale: 'en-us',
    type: 'webpage',
    images: [
      {
        url: `${siteMetadata.siteUrl}/images/og_img.jpg`,
        width: 800,
        height: 600,
        alt: 'Blog Image',
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    type: 'website',
    author: siteMetadata.author,
    twitter: {
      card: 'summary_large_image',
      title: "Blog | Downloadreels.app",
      description: "Read blog posts about how to downlaod Instagram reels online for free. Easy and Quick Tips and tricks",
      images: [
        {
          url: `${siteMetadata.siteUrl}/images/og_img.jpg`,
          width: 800,
          height: 600,
          alt: 'Blog Image',
          type: 'image/jpeg',
        },
      ],
    },
  }
}
