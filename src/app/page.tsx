import fs from "fs";
import Link from "next/link";


export default async function Home() {
  const folder = fs.readdirSync(process.cwd() + "/src/content");

  const blogs: {
    date: Date;
    matter: any
  }[] = await Promise.all(
    folder.map(async (file) => {
      console.log(file);
      const { default: BlogPost, metadata } = await import(`@/content/${file}`);
      console.log("metadata", metadata);
      return {
        date: new Date(metadata.published),
        matter: metadata
      };
    })
  );


  blogs.sort((a, b) => {
    return b.date.valueOf() - a.date.valueOf()
  })

  const top10 = blogs.slice(0, 10)
  console.log(top10)

  return (
    <div>
      <main className="flex flex-col items-center max-width: var(--container-7xl)">
        <h1>BLOG</h1>
        <ul>
          {top10.map((blog, index) => {
            return (
              <Link  key = {index} href={`/${blog.matter.slug}`}><li key={blog.matter.title}>
                <h2>{blog.matter.title}</h2>
                <p>{blog.matter.description}</p>
                <p>{blog.date.toDateString()}</p>
              </li></Link>
            )
          })}
        </ul>
      </main>

    </div>
  );
}
