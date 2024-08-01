import { bricolage } from '@/_libs/fonts'
import React from 'react'

export interface SidebarRHProps {
  title: string,
  subtitle: string,
  clickInfo?: (e: React.MouseEvent) => void;
  clickPreview?: (e: React.MouseEvent) => void;
  clickUsage?: (e: React.MouseEvent) => void;
  clickCode?: (e: React.MouseEvent) => void;
}

const SidebarRH = ({ title, subtitle, clickInfo, clickPreview, clickUsage, clickCode }: SidebarRHProps) => {
  return (
    <div className='h-full max-h-screen pt-20 border-l border-algae sticky top-0'>
      <div className='flex fixed'>
        <aside className='w-full hidden lg:min-w-[14rem] lg:w-full lg:block leading-none pb-20 space-y-6'>
          <div className='px-4'>
            <h3 className={`${bricolage.className} font-medium text-[16px]`}>On this page</h3>
            <ul className='mt-3 text-sm space-y-1 text-gray-300'>
              {
                clickInfo && <li className='hover:text-white cursor-pointer hover:font-medium transition-all' onClick={clickInfo}>About {subtitle} - {title}</li>
              }
              {
                clickPreview && <li className='hover:text-white cursor-pointer hover:font-medium transition-all' onClick={clickPreview}>Preview</li>
              }
              {
                clickCode && <li className='hover:text-white cursor-pointer hover:font-medium transition-all' onClick={clickCode}>Component Code</li>
              }
              {
                clickUsage && <li className='hover:text-white cursor-pointer hover:font-medium transition-all' onClick={clickUsage}>Usage</li>
              }
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default SidebarRH