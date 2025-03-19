import { promises as fs } from 'fs';
import BlogLayout from '@/bloglayout';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const {slug} = await params
  const fileContent = await fs.readFile(process.cwd() + '/src/content/' + slug + '.mdx', "utf8");

  const {default:BlogPost, metadata} = await import(`@/content/${slug}.mdx`)
  console.log(metadata)

  return (
    <>
      <BlogPost />
    </>
  );

 
}
 
export async function generateStaticParams() {
  let filenames = await fs.readdir('src/content')
  return filenames.map((filename) => {
    return { slug: filename.replace(/\.mdx$/, '') }
  })
}
 
export const dynamicParams = false