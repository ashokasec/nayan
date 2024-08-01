import UiDetails from '@/_components/_app/details'
import PillsList from '@/_components/ui/input/tags-input'
import React from 'react'

const page = () => {

    const sample = ["React.Js", "Next.Js"]

    const title = "Input"
    const subtitle = "Tags Input"

    const featuresList = [
        <><strong className='font-semibold'>Enter</strong>, <strong className='font-semibold'>Comma</strong> and <strong className='font-semibold'>NumpadEnter</strong> adds input in the list.</>,
        <><strong className='font-semibold'>Backspace</strong> removes last element from the list.</>
    ]

    const renderComponent = <PillsList data={sample} />

    const code = `"use client"

import { Plus } from 'lucide-react'
import React, { memo, useState } from 'react';

export interface PillsItemProps {
    item: string;
    removable?: boolean;
    onRemove?: () => void;
}

const PillsListItem: React.FC<PillsItemProps> = ({ item, removable, onRemove }) => {
    return (
        <li className={\`rounded-full leading-none px-4 py-2 h-fit border border-algae \${removable ? "flex items-center justify-center pr-2" : "pr-4"}\`}>
            {item}
            {removable &&
                <span
                    className='rotate-45 ml-2 text-gray-500 rounded-full bg-transparent border border-transparent cursor-pointer hover:border-red-500 hover:bg-red-500/20 hover:text-red-500 transition-all'
                    onClick={onRemove}
                >
                    <Plus size={18} />
                </span>
            }
        </li>
    );
};

const MemoizedPillsListItem = memo(PillsListItem);
MemoizedPillsListItem.displayName = "PillsListItem";

interface PillsListProps {
    data: string[];
    removable?: boolean;
    onRemove?: (index: number) => void;
}

const PillsList: React.FC<PillsListProps> = ({ data, removable, onRemove }) => {

    const [inputValue, setInputValue] = useState("")
    const [dataList, setDataList] = useState<string[]>(data || [])

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const key_value = e.code
        if (key_value === "Enter" || key_value === "Comma" || key_value === "NumpadEnter") {
            if (inputValue && inputValue !== "") {
                const refinedValue = inputValue.trim().replaceAll(",", "")
                setDataList((prevData) => [...prevData, refinedValue])
                setInputValue("")
            }
        }
        else if (key_value === "Backspace" && inputValue === null) {
            setDataList((prevData) => prevData.slice(0, -1))
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setInputValue(e.target.value)
    }

    return (
        <ul className='flex flex-wrap items-center space-x-3 space-y-3 relative -left-2 -top-2'>
            <li></li>
            {dataList?.map((item, index) => (
                <PillsListItem
                    item={item}
                    removable={removable}
                    key={index}
                    onRemove={() => onRemove && onRemove(index)}
                />
            ))}
            <input type="text" className='rounded-full leading-none px-4 py-2 h-fit border border-algae font-light outline-none bg-gray-400/15' spellCheck="false" placeholder='Add a fruit...' value={inputValue} onChange={handleInputChange} onKeyUp={handleKeyUp} />
        </ul>
    );
};

export default PillsList;`

    return (
        <UiDetails
            title={title}
            subtitle={subtitle}
            featuresList={featuresList}
            renderComponent={renderComponent}
            componentCode={code}
            usageCode={code}
        />
    )
}

export default page