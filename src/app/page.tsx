import { bricolage, inter, open_sans } from '@/_libs/fonts'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <article className={`${bricolage.className} md:pr-12 lg:pr-28 px-6 pb-3 pt-20`}>
        <h1>Welcome to ashokasec/ui</h1>
        <p className='mt-8'>Hey there! 👋</p>
        <p className="txt-normal mt-4">I&apos;m ashokasec, and this is my personal collection of UI components. I created this library for myself and for anyone else who might find it useful. Every time I make a new component for one of my projects, I&apos;ll add it here.</p>
        <p className='txt-normal'>I only include components that I&apos;ve made and used in real-world projects and websites.</p>
        <p className='txt-normal'>This way, I can easily reuse my work, and you can benefit from it too.</p>
        <h2>Why ashokasec/ui</h2>
        <span className="txt-normal inline-block !text-sm mt-4 !text-gray-500">I was ignoring this section, but chatgpt said its important 🥲</span>
        <ul className='space-y-1 mt-2'>
          <li><p className='txt-normal'><strong className='font-medium'>Open-Source</strong> : Feel free to explore, use, and contribute to this library!</p></li>
          <li><p className='txt-normal'><strong className='font-medium'>Reusable</strong> : Save time and effort by using these ready-made components.</p></li>
          <li><p className='txt-normal'><strong className='font-medium'>Personal Touch</strong> : Every component is crafted with love and feel, lol, designed for real projects I work on.</p></li>
        </ul>
        <h2>Get in Touch</h2>
        <ul className='space-y-1 mt-2'>
          <li className='mt-4'><p className='txt-normal'><strong className='font-medium'>Github</strong> : <Link href="https://github.com/ashokasec" className='text-blue-500'>https://github.com/ashokasec</Link></p></li>
          <li><p className='txt-normal'><strong className='font-medium'>Twitter</strong> : <Link href="https://twitter.com/ashokasec" className='text-blue-500'>https://twitter.com/ashokasec</Link></p></li>
          <li><p className='txt-normal'><strong className='font-medium'>LinkedIn</strong> : LinkedIn restricted my account, after telling them all the things and situations and filling forms, i got nothing.</p></li>
        </ul>
        <p className='mt-8'>Here i wanted to say thank you for visiting us!</p>
        <p>धन्यवाद.</p>
      </article>
    </>
  )
}

export default page