import Image from 'next/image'
import React from 'react'
import Logo from "@/public/img/The-ICT-hub-logo.png"
import Link from 'next/link'
function Header() {
  return (
    <>
    <section className='bg-white py-2'>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Image src={Logo} width={100} height={100} />
          <ul className='flex'>
            <li><a className='pr-4' href="#">Home</a></li>
            <li><a className='pr-4' href="#">About</a></li>
            <li><a className='pr-4' href="#">Service</a></li>
            <li><a className='pr-4' href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </section>
      
    </>
  )
}

export default Header
