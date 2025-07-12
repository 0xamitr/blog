import type { MDXComponents } from 'mdx/types'
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className='text-4xl mt-8 mb-3'>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className='text-2xl mt-5 mb-2'>{children}</h2>
    ),
    ul: ({ children }) => (
      <ul className='list-disc list-inside pl-5'>{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside pl-5">{children}</ol>
    ),
    blockquote: ({ children }) => (
      <blockquote className='border-l-4 ml-10 border-gray-300 pl-2'>{children}</blockquote>
    ),
    a: ({ children, href }) => (
      <a className='text-blue-500 hover:underline' href={href}>{children}</a>
    ),
    p: ({ children }) => (
      <p className='mt-6 first:mt-0 max-w-prose'>{children}</p>
    ),
    // article: ({ children }) => (
    //   <article className=''>{children}</article>
    // ),
    ...components,
  }
}