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
  }[] = [];

  for (const file of folder) {
    console.log(file);
    const { metadata } = await import(`@/content/${file}`);
    if (metadata.hide) continue;
    console.log("metadata", metadata);
    blogs.push({
      date: new Date(metadata.published),
      matter: metadata
    });
  }

  blogs.sort((a, b) => {
    return b.date.valueOf() - a.date.valueOf()
  })

  const top10 = blogs.slice(0, 10)
  console.log(top10)

  return (
    <div className="max-w-[760px] w-[100%] flex flex-col gap-8">
      <h1>BLOGS</h1>
      <ul className="p-0 flex flex-col gap-3">
        {top10.map((blog, index) => {
          return (
            <li key={index}>
              <Link className="hover:text-blue-400 text-2xl" href={`/${blog.matter.slug}`}>
                <div className="flex items-center justify-between">
                  <h2>{blog.matter.title}</h2>

                  <p className="text-sm text-right shrink-0">- {blog.date.toDateString()}</p>
                </div>
                <p className="text-gray-500 text-lg">{blog.matter.description}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
}
