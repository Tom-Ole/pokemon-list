
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

import logo from "../img/logo.png"


const LOGO_SIZE_PERCENTAGE = "60%"

function Header() {

    const router = useRouter()

  return (
    <header className="h-20 w-full bg-slate-800" >
        <div className="h-20 w-20 flex justify-center items-center">
        <Image src={logo} alt="logo" height={LOGO_SIZE_PERCENTAGE} width={LOGO_SIZE_PERCENTAGE} onClick={() => router.push("/")}/>
        </div>

    </header>
  )
}

export default Header