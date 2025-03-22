
interface metadata {
  title: string,
  description: string,
  published: string,
  slug: string
}

export default function BlogLayout({ children, metadata }: { children: React.ReactNode, metadata: metadata }) {
  return <div className="max-w-4xl ">
    <div className="flex flex-col">
      <div>
        <h1>{metadata.title}</h1>
        <p className="text-gray-500">{metadata.description}</p>
        <p className="text-sm">{new Date(metadata.published).toDateString()}</p>
        </div>
      <div>
        {children}
      </div>
    </div>
  </div>
}