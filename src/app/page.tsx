import { bricolage } from '@/_libs/fonts'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='space-y-4'>
        <h1 className={`text-4xl ${bricolage.className} font-semibold leading-none underline underline-offset-4`}>Input</h1>
        <h2 className={`text-xl ${bricolage.className} font-medium leading-none`}>Tag Input</h2>
      </div>
    </>
  )
}

export default page