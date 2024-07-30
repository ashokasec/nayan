import { bricolage } from '@/_libs/fonts'
import Link from 'next/link'
import React from 'react'
import PillsList from '../ui/input/tags-input'

export interface DetailsProps {
    parentTitle: string,
    childTitle: string,
}

const UiDetails = ({ parentTitle, childTitle }: DetailsProps) => {

    const data = ["Apple", "Banana"]

    return (
        <>
            <article className={`${bricolage.className} md:pr-12 lg:pr-28 w-full `}>
                <h1>{parentTitle}</h1>
                <h2 className='mt-6'>{childTitle}</h2>
                <p className='mt-6'>Below are some key features:</p>
                <ul className='space-y-1 list-disc ml-4'>
                    <li className='mt-2'>
                        <p><strong className='font-semibold'>Enter</strong>, <strong className='font-semibold'>Comma</strong> and <strong className='font-semibold'>NumpadEnter</strong> adds input in the list.</p>
                    </li>
                    <li>
                        <p><strong className='font-semibold'>Backspace</strong> removes last element from the list.</p>
                    </li>
                </ul>
                <div className='bg-gray-400/5 rounded-md p-6 border border-gray-400/40 mt-10 w-full'>
                    <PillsList data={data} />
                </div>
            </article>
        </>
    )
}

export default UiDetails