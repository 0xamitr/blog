import fs from "fs";
import Link from "next/link";

interface metadata {
  title: string,
  description: string,
  published: string,
  slug: string
}

export default async function Home() {
  const folder = fs.readdirSync(process.cwd() + "/src/content");
  const blogs: {
    date: Date;
    matter: metadata
  }[] = await Promise.all(
    folder.map(async (file) => {
      console.log(file);
      const { metadata } = await import(`@/content/${file}`);
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
    <div className="min-w-1/3 flex flex-col gap-5">
      <h1>BLOGS</h1>
      <ul className="p-0">
        {top10.map((blog, index) => {
          return (
            <Link key={index} href={`/${blog.matter.slug}`}>
              <li>
                <div className="flex items-center">
                  <h2>{blog.matter.title}</h2>
                  <p className="text-sm">- {blog.date.toDateString()}</p>
                </div>
                <p>{blog.matter.description}</p>
              </li>
            </Link>
          )
        })}
      </ul>
    </div>
  );
}
