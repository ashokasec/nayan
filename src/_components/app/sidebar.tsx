import { bricolage, open_sans } from '@/_libs/fonts'
import Link from 'next/link'
import React from 'react'

const ListItem = ({ text, href }: { text: string, href: string }) => {
    return (
        <li className='mx-1'>
            <Link className='pl-3 lg:pl-6 rounded-sm py-2 hover:bg-gray-400/20 transition-all cursor-pointer w-full inline-block' href={href}>{text}</Link>
        </li>
    )
}

const ListContainer = ({ group_name, list }: { group_name: string, list: { text: string; href: string }[] }) => {
    return (
        <div>
            <h3 className={`${bricolage.className} font-medium`}>{group_name}</h3>
            <ul className={`text-sm ml-2 lg:ml-6 mt-3 border-l border-gray-400/40 leading-none font-medium text-gray-300 ${open_sans.className}`}>
                {list?.map(({ text, href }: any, index: number) => (
                    <ListItem text={text} href={href} key={index} />
                ))}
            </ul>
        </div>
    )
}


const Sidebar = () => {
    return (
        <aside className='border-r border-gray-400/40  w-full hidden lg:max-w-[16rem] lg:block xl:max-w-[19rem] ml-5 leading-none py-4 space-y-6'>
            <ListContainer
                group_name='Input'
                list={
                    [{
                        text: "Tags Input (Not Completed Yet)",
                        href: "/input/tags-input"
                    }]
                }
            />
        </aside>
    )
}

export default Sidebar