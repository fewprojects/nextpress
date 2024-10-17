import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center space-y-8 py-20">
      <div className="w-36">
        <Image src={"/logo.svg"} width={800} height={800} />
      </div>
      <h1 className="text-6xl font-bold">Nextpress</h1>
      <a href="/blog">Visit Blog</a>
    </div>
  );
}
