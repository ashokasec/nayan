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
            <h3 className={`${bricolage.className} font-medium text-[16px]`}>{group_name}</h3>
            <ul className={`text-sm ml-2 lg:ml-6 mt-3 border-l border-algae leading-none font-medium text-gray-300 ${open_sans.className}`}>
                {list?.map(({ text, href }: any, index: number) => (
                    <ListItem text={text} href={href} key={index} />
                ))}
            </ul>
        </div>
    )
}


const SidebarLH = () => {
    return (
        <div className='h-screen max-h-screen border-r border-algae w-full hidden lg:max-w-[14rem] lg:block xl:min-w-[15rem] xl:max-w-[15rem] ml-5 leading-none pb-0 pt-16 space-y-6 sticky top-0 pr-1'>
            <aside className='h-full max-h-full rh-sidebar overflow-hidden overflow-y-scroll py-4 space-y-8'>
                <ListContainer
                    group_name='Input'
                    list={[
                        {
                            text: "Tags Input",
                            href: "/input/tags-input"
                        },
                    ]}
                />
            </aside>
        </div>
    )
}

export default SidebarLH