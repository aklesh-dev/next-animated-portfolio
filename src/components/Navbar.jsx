"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const links = [
  { url: '/', title: 'Home' },
  { url: '/about', title: 'About' },
  { url: '/portfolio', title: 'Portfolio' },
  { url: '/contact', title: 'Contact' },
];

function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48">
      {/* --LINKS-- */}
      <div className="hidden md:flex gap-4 w-1/3">
        {
          links.map(link => (
            <Link key={link.title} href={link.url}>{link.title}</Link>
          ))
        }
      </div>

      
      {/* --LOGO-- */}
      <div className="md:hidden lg:flex w-1/3 justify-center">
        <Link href={'/'} className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
          <span className='text-white mr-1'>Aklesh</span>
          <span className='w-12 h-8 rounded bg-white flex items-center justify-center'>.dev</span>
        </Link>
      </div>

        {/* SOCIALS */}
      <div className="hidden md:flex items-center gap-3 w-1/3">
        <Link href={'#'}>
          <Image src='/github.png' alt='github icon' width={24} height={24} />
        </Link>
        <Link href={'#'}>
          <Image src='/facebook.png' alt='facebook icon' width={24} height={24} />
        </Link>
        <Link href={'#'}>
          <Image src='/instagram.png' alt='instragram icon' width={24} height={24} />
        </Link>
        <Link href={'#'}>
          <Image src='/linkedin.png' alt='linkedin icon' width={24} height={24} />
        </Link>
        <Link href={'#'}>
          <Image src='/pinterest.png' alt='pin icon' width={24} height={24} />
        </Link>
        <Link href={'#'}>
          <Image src='/dribble.png' alt='dribble icon' width={24} height={24} />
        </Link>
      </div>

      {/* --RESPONSIVE MENU-- */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button className='w-10 h-8 flex flex-col justify-between relative z-50'
          onClick={() => setOpen(!open)}
        >
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-green-500 rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
        </button>
        {/* MENU LIST */}
        {open && (
          <div className="absolute top-0 left-0 h-screen w-screen bg-black text-white flex flex-col items-center justify-center gap-8  text-4xl">
            {
              links.map(link => (
                <Link key={link.url} href={link.url}>{link.title}</Link>
              ))
            }
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;