
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

import logo from "../img/logo.png"
import SearchBar from './SearchBar'


const LOGO_SIZE_PERCENTAGE = "60%"

function Header() {

    const router = useRouter()

  return (
    <header className="h-20 w-full bg-slate-800 flex items-center justify-between" >
        <div className="h-20 w-20 flex justify-center items-center scroll-ml-10">
        <Image src={logo} alt="logo" height={LOGO_SIZE_PERCENTAGE} width={LOGO_SIZE_PERCENTAGE} onClick={() => router.push("/")}/>
        </div>
        <nav className="mr-10">
          <ul className="flex gap-4 text-white text-lg">
            <li className="hover:text-slate-300"><a href="/home">Home</a></li>
            <li className="hover:text-slate-300"><a href="/all">All Pokemon</a></li>
            <li className="hover:text-slate-300"><a href="/types">Types</a></li>
            <li className="hover:text-slate-300"><SearchBar /></li>
          </ul>
        </nav>
    </header>
  )
}

export default Header