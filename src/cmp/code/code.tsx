import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypePrettyCode from 'rehype-pretty-code';
import { transformerCopyButton } from '@rehype-pretty/transformers';

// Server Component to render a single code block with pretty output
export default async function Code({ code }: { code: string }) {
  const highlightedCode = await highlightCode(code);
  return (
    <section
      className="not-prose"
      dangerouslySetInnerHTML={{
        __html: highlightedCode,
      }}
    />
  );
}

async function highlightCode(code: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      defaultLang: 'txt',
      keepBackground: false, // ✅ removes background color
    theme: "one-dark-pro",
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3000,
        }),
      ],
    })
    .use(rehypeStringify)
    .process(code);

  return String(file);
}
