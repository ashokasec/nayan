import { bricolage } from '@/_libs/fonts'
import React from 'react'

const SidebarRH = ({ clickInfo, clickPreview, clickUsage, clickCode }: any) => {
  return (
    <div className='h-full max-h-screen pt-20 border-l border-algae sticky top-0'>
      <div className='flex fixed'>
        <aside className='w-full hidden lg:min-w-[14rem] lg:w-full lg:block leading-none pb-20 space-y-6'>
          <div className='px-4'>
            <h3 className={`${bricolage.className} font-medium text-[16px]`}>On this page</h3>
            <ul className='mt-3 text-sm space-y-1 text-gray-300'>
              <li className='hover:text-white cursor-pointer hover:font-medium transition-all' onClick={clickInfo}>About Tags Input - Input</li>
              <li className='hover:text-white cursor-pointer hover:font-medium transition-all' onClick={clickPreview}>Preview</li>
              <li className='hover:text-white cursor-pointer hover:font-medium transition-all' onClick={clickCode}>Component Code</li>
              <li className='hover:text-white cursor-pointer hover:font-medium transition-all' onClick={clickUsage}>Usage</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default SidebarRH