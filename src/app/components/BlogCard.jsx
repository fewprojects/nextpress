import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import Image from 'next/image';
import Link from 'next/link';
function BlogCard({ blog }) {
  console.log(blog.slug)
  return (
    <section>
      <Link href={`/blog/${blog.slug}`}>
        <div className='w-full rounded-lg border p-4 space-y-4 my-4'>
          <div className=''>
            <Image
              alt="Blog Thumbnail"
              src={blog?.featured_image}
              width={930}
              height={630}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
              priority={true}
              className="rounded-lg"
            />
          </div>
          <div className='w-full'>
            <h1 className='text-2xl font-semibold mb-4 tracking-normal'>{blog.title}</h1>
            <p className='mb-4'>{format(parseISO(blog.date), 'yyyy-MM-dd')} | by Phoneprice24</p>
          </div>
        </div>
      </Link>
    </section>
    // <div>{JSON.stringify(blog)}</div>
  );
}

export default BlogCard;