import { bricolage } from '@/_libs/fonts'
import React from 'react'
import PillsList from '../ui/input/tags-input'
import DisplayCode from './display-code'
import Link from 'next/link'

export interface DetailsProps {
    parentTitle: string,
    childTitle: string,
    featuresList?: React.ReactNode[],
    code: string
}

const UiDetails = ({ parentTitle, childTitle, featuresList, code }: DetailsProps) => {

    const data = ["Apple", "Banana"]

    return (
        <>
            <article className={`${bricolage.className} md:pr-12 lg:pr-28 w-full `}>
                <h1>{parentTitle}</h1>
                <h2 className='mt-6'>{childTitle}</h2>
                {featuresList && <>
                    <p className='mt-6'>Below are some key features:</p>
                    <ul className='space-y-1 list-disc ml-4'>
                        {featuresList.map((feature, index: number) => (
                            <li className='first:mt-2' key={index}>
                                <p>{feature}</p>
                            </li>
                        ))}
                    </ul>
                </>
                }
                <div className='mt-6'>
                    <h4>Preview</h4>
                    <div className='bg-gray-400/5 rounded-md p-6 border border-gray-400/40 mt-2 w-full max-w-full'>
                        <PillsList data={data} />
                    </div>
                </div>
                <div className='mt-6'>
                    <h4>Code</h4>
                    <DisplayCode code={code} />
                </div>
                <div className='flex items-center justify-between mt-14 pt-10 pb-8 border-t border-gray-400/40'>
                    <div className='flex flex-col text-[12px] text-gray-300'>
                        <p>Pushing Pixel Updates in Public</p>
                        <p>Namaste from <Link className='font-medium text-white' href="https://twitter.com/ashokasec">ashokasec</Link></p>
                    </div>
                    <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                        <a className="font-medium focus:outline-none text-neutral-400 hover:text-neutral-500 focus:text-neutral-500" target='_blank' href="https://x.com/ashokasec"><svg xmlns="http://www.w3.org/2000/svg" fill='#fff' x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50">
                            <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                        </svg></a>
                        <a className="font-medium focus:outline-none text-neutral-400 hover:text-neutral-500 focus:text-neutral-500" target='_blank' href="https://github.com/ashokasec/ui"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='#fff' viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></a>
                    </div>
                </div>
            </article>
        </>
    )
}

export default UiDetails