'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { TiPlus } from 'react-icons/ti';
import Image from 'next/image';

export default function SideNav() {
  const pathname = usePathname();

  const getLinkClass = (path) => {
    return pathname === path 
      ? 'mb-2 bg-[#ffffff8b] cursor-pointer p-3 rounded-lg border-l border-t border-[#fff]'
      : 'mb-2 hover:bg-[#ffffff8b] cursor-pointer p-3 rounded-lg';
  };

  return (
    <div className='w-75 bg-[#ffffff4a] backdrop-blur-xs rounded-3xl h-[90vh] p-5 border-l border-t border-[#fff] md:block hidden'>
        <div className='mb-8 mt-5'>
            <Link href="/"><h1 className='text-3xl font-bold text-orange-500 select-none cursor-pointer flex items-center gap-2'><Image src="/PeerShare.png" alt="PeerShare" width={40} height={40} /> PeerShare</h1></Link>
        </div>
        <ul className='text-xl'>
            <Link href="/"><li className={getLinkClass('/')}>Home</li></Link>
            <Link href="/shared"><li className={getLinkClass('/shared')}>Shared with me</li></Link>
            <Link href="/join"><li className={getLinkClass('/join')}>Join room</li></Link>
        </ul>
    </div>
  )
}
