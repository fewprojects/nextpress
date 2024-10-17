import Image from "next/image"
import format from 'date-fns/format';
import Avatar from "/public/icons/android-chrome-512x512.png"
import parseISO from 'date-fns/parseISO';

function SinglePost({ post }) {
  return (
    <article className="w-full">
      <h1 className="text-5xl font-semibold text-gray-900 sm:text-6xl tracking-normal mb-5">{post.title}</h1>
      <div className="flex felx-row justify-space gap-3 items-center w-full">
        <div style={{ 'width': '2rem', 'height': '2rem', 'borderRadius': '0%', }}>
          <Image
            alt="Author Avatar"
            src={Avatar}
            width={100}
            height={100}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            priority={true}
            className="rounded-none"
          />
        </div>
        <p>By Phoneprice24 | Published on {format(parseISO(post?.date), "yyyy-MM-dd")}</p>
      </div>
      <div className='w-full max-w-3xl rounded-lg my-10'>
        <Image
          alt="Featrued Image"
          src={post?.featured_image}
          width={600}
          height={400}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
          priority={true}
          className="rounded-lg"
        />
      </div>
      <section dangerouslySetInnerHTML={{ __html: post?.content }} className="prose prose-h1:tracking-tighter prose-a:text-blue-600 hover:prose-a:text-blue-500 max-w-4xl" />
    </article>
  );
}

export default SinglePost;