interface metadata{
    title: string,
    description: string,
    published: string,
    slug: string
  }

export default function BlogLayout({children, metadata}: {children: React.ReactNode, metadata: metadata}) {
  return <div className="max-w-4xl">
      <h1>{metadata.title}</h1>
        <p>{metadata.description}</p>
        <p>{metadata.published}</p>
        {children}
    </div>
}