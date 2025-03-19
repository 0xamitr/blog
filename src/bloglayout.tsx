export default function BlogLayout({children, metadata}: {children: React.ReactNode, metadata: any}) {
  return <div>
      <h1>{metadata.title}</h1>
        <p>{metadata.description}</p>
        {children}
    </div>
}