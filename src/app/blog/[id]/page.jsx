export default async function BlogDetail({ params }) {
    const post = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    ).then((res) => res.json());
  
    return (
      <div className="container mx-auto p-6 min-h-screen">
        <div className="max-w-3xl mx-auto text-black bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-700 leading-relaxed">{post.body}</p>
          </div>
        </div>
      </div>
    );
  }