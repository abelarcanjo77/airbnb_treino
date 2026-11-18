"use client"

import Botao from "@/components/Botao"
import Logo from "@/components/Logo"
import Menu from "@/components/Menu"
import { IconMenu2, IconUserCircle } from "@tabler/icons-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const BarraSuperior = () => {

    const [menuAberto, setMenuAberto] = useState(false)

    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickFora = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setMenuAberto(false);
        }
        };

        if (menuAberto) {
        document.addEventListener("mousedown", handleClickFora);
        }

        return () => {
        document.removeEventListener("mousedown", handleClickFora);
        };
    }, [menuAberto]);

    return (
        <div className="relative flex justify-between py-4 px-2 items-center">
            <Link href="/">
                <Logo />
            </Link>
            <div className="flex gap-4">
                <Link href="/" className="font-semibold">
                    <span>Acomodações</span>
                </Link>
                <Link href="#" className="opacity-50">
                    <span>Experiências</span>
                </Link>
            </div>
            <div ref={menuRef} className="flex items-center gap-2">
                <Link href="#">
                    <Botao icon={<IconUserCircle />} text="Entrar"/>
                </Link>
                <button onClick={() => setMenuAberto(!menuAberto)} className="border border-gray-400 p-3 rounded-full hover:bg-red-500 hover:text-white">
                    <IconMenu2 size={20}/>
                </button>
                {menuAberto && <Menu />}
            </div>
            
        </div>
    )
}

export default BarraSuperior