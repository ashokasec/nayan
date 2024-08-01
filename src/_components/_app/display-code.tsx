import React from 'react'
import he from "he"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus as CodeTheme } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Copy } from 'lucide-react'

const DisplayCode = ({ filepath, filename, code }: { code: string, filepath: string, filename: string }) => {
    return (
        <div className='mt-2'>
            <div className='bg-[#121214] flex items-center justify-between border border-algae border-b-0 rounded-t-md leading-none py-2 pl-3 pr-2 font-light text-[15px]'>
                <div>
                    <span className='text-gray-400/60 text-[14px]'>{filepath}</span><span className='pl-0.5 underline rounded cursor-pointer text-[14px] font-medium'>{filename}</span>
                </div>
                <span className='hover:bg-gray-500/30 border border-gray-500/30 hover:border-algae transition-all p-2 rounded aspect-square leading-none cursor-pointer inline-block'>
                    <Copy size={16} />
                </span>
            </div>
            <SyntaxHighlighter language='typescript' style={CodeTheme} customStyle={{ height: "60rem" }}>
                {code}
            </SyntaxHighlighter>
        </div>
    )
}

export default DisplayCode