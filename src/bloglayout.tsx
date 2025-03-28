
interface metadata {
  title: string,
  description: string,
  published: string,
  slug: string
}

export default function BlogLayout({ children, metadata }: { children: React.ReactNode, metadata: metadata }) {
  return <div className="max-w-3xl">
    <div className="flex flex-col">
      <div>
        <h1>{metadata.title}</h1>
        <p className="text-gray-500">{metadata.description}</p>
        <p className="text-sm pt-2">- {new Date(metadata.published).toDateString()}</p>
        <hr className="border-gray-400 dark:border-neutral-500 mt-5 mb-10" />
        </div>
      <div>
        {children}
      </div>
    </div>
  </div>
}