'use client'

import { ChevronUp } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { APP_NAME } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className='bg-black  text-white underline-link'>
      <div className='w-full'>
        <Button
          variant='ghost'
          className='bg-gray-800 w-full  rounded-none '
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp className='mr-2 h-4 w-4' />
          回到頂部
        </Button>
      </div>
      <div className='p-4'>
        <div className='flex justify-center  gap-3 text-sm'>
          <Link href='/page/conditions-of-use'>使用條款</Link>
          <Link href='/page/privacy-policy'>隱私政策</Link>
          <Link href='/page/help'>幫助中心</Link>
        </div>
        <div className='flex justify-center text-sm'>
          <p> © 2000-2024, {APP_NAME} 公司或其關聯企業</p>
        </div>
        <div className='mt-8 flex justify-center text-sm text-gray-400'>
          臺北市中山區南京東路三段123號8樓 | +886 (02) 1234-5678 
        </div>
      </div>
    </footer>
  )
}