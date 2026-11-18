import { IconWorld, IconHelp } from "@tabler/icons-react"
import Link from "next/link"

const Menu = () => {
    return (
        <div className="absolute w-60 top-full border border-gray-100 right-0 bg-white shadow-xl rounded-lg mr-2">
            <Link href="#">
                <div className="flex items-center gap-2 py-3 hover:bg-gray-200 hover:rounded-t-lg pl-5">
                    <IconWorld size={20}/>
                    <span>Idioma e moeda</span>
                </div>
            </Link>
            <Link href="#">
                <div className="flex items-center gap-2 py-3 hover:bg-gray-200 pl-5">
                    <IconHelp size={20}/>
                    <span>Central de Ajuda</span>
                </div>
            </Link>
            <hr className="mx-5 opacity-15"/>
            <Link href="#">
                <div className="flex items-center gap-2 py-3 hover:bg-gray-200 hover:rounded-b-lg pl-5">
                    <span>Entrar ou cadastre-se</span>
                </div>
            </Link>
        </div>
    )
}

export default Menu