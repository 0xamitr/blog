import type { MDXComponents } from 'mdx/types'
export function useMDXComponents(components: MDXComponents): MDXComponents {

  return {
    // h1: ({ children }) => (
    //   // <h1 className='text-red-500'>{children}</h1>
    // ),
    ul: ({ children }) => (
      <ul className='list-disc list-inside pl-5'>{children}</ul>
    ),
    blockquote: ({ children }) => (
      <blockquote className='border-l-4 ml-10 border-gray-300 pl-2'>{children}</blockquote>
    ),
    a: ({children, href}) => (
      <a className='text-blue-500 hover:underline' href={href}>{children}</a>
    ),
    p: ({ children }) => (
      <p className='mt-6 first:mt-0 text-lg'>{children}</p>
    ),
    ...components,
  }
}