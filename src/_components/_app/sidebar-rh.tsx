import { bricolage, open_sans } from '@/_libs/fonts'
import Link from 'next/link'
import React from 'react'

const ListItem = ({ text, href }: { text: string, href: string }) => {
  return (
    <li className='mx-1'>
      <Link className='rounded-sm p-2 hover:bg-gray-400/20 transition-all cursor-pointer w-full inline-block' href={href}>{text}</Link>
    </li>
  )
}

const ListContainer = ({ group_name, list }: { group_name: string, list: { text: string; href: string }[] }) => {
  return (
    <ul className={`text-sm mt-3 leading-none font-medium text-gray-300 ${open_sans.className}`}>
      {list?.map(({ text, href }: any, index: number) => (
        <ListItem text={text} href={href} key={index} />
      ))}
    </ul>
  )
}


const SidebarRH = () => {
  return (
    <aside className='border-l border-gray-400/40 w-full hidden lg:min-w-[14rem] lg:w-full lg:block leading-none py-4 space-y-6'>
      <div className='px-4'>
        <h3 className={`${bricolage.className} font-medium text-[16px]`}>On this page</h3>
        <ul className='mt-3 text-sm space-y-1 text-gray-300'>
          <li className='hover:text-white cursor-pointer hover:font-medium transition-all'>About Tags Input - Input</li>
          <li className='hover:text-white cursor-pointer hover:font-medium transition-all'>Preview</li>
          <li className='hover:text-white cursor-pointer hover:font-medium transition-all'>Usage</li>
          <li className='hover:text-white cursor-pointer hover:font-medium transition-all'>Component Code</li>
        </ul>
      </div>
    </aside>
  )
}

export default SidebarRH