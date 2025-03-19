import { promises as fs } from 'fs';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const {slug} = await params

  const {default:BlogPost, metadata} = await import(`@/content/${slug}.mdx`)
  console.log(metadata)

  return (
    <>
      <BlogPost />
    </>
  );

 
}
 
export async function generateStaticParams() {
  const filenames = await fs.readdir('src/content')
  return filenames.map((filename) => {
    return { slug: filename.replace(/\.mdx$/, '') }
  })
}
 
export const dynamicParams = false