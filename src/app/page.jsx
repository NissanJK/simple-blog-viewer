import Link from "next/link";

export default async function Home() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id}>
            <div className="card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 min-h-full">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-black">{post.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}