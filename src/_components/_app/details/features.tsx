import React from 'react'

export interface FeaturesListProps {
    featuresList: React.ReactNode[]
}

const Features = ({ featuresList }: FeaturesListProps) => {
    return (
        <>
            <p className='mt-6'>Below are some key features:</p>
            <ul className='space-y-1 list-disc ml-4'>
                {featuresList.map((feature, index: number) => (
                    <li className='first:mt-2' key={index}>
                        <p>{feature}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Features