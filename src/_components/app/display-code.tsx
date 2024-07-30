import React from 'react'
import he from "he"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus as CodeTheme } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Copy } from 'lucide-react'

const DisplayCode = ({ codeString }: { codeString: string }) => {
    return (
        <div className='mt-8'>
            <div className='bg-[#121214] flex items-center justify-between border border-gray-400/40 border-b-0 rounded-t-md leading-none py-3 px-4 font-light text-[15px]'>
                <div>
                    <span className='text-gray-400'>./src/components/ashokasec-ui/input/</span><span className='bg-gray-400/30 p-1 rounded cursor-pointer'>tags-input.tsx</span>
                </div>
                <span className='hover:bg-gray-500/30 border border-gray-500/30 hover:border-gray-400/40 transition-all p-2 rounded aspect-square leading-none cursor-pointer inline-block'>
                    <Copy size={16} />
                </span>
            </div>
            <SyntaxHighlighter language='typescript' style={CodeTheme}>
                {codeString}
            </SyntaxHighlighter>
        </div>
    )
}

export default DisplayCode