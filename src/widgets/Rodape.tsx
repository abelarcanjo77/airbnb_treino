import Link from "next/link"

const Rodape = () => {
    return (
        <div className="py-6 px-2">
            <div className="font-semibold">&copy; Airbnb</div>
            <ul className="flex gap-2 text-sm">
                <Link href="#">
                    <li className="hover:text-red-500">Privacidade</li>
                </Link>
                <li>&#183;</li>
                <Link href="#">
                    <li className="hover:text-red-500">Termos</li>
                </Link>
                <li>&#183;</li>
                <Link href="#">
                    <li className="hover:text-red-500">Mapa do site</li>
                </Link>
                <li>&#183;</li>
                <Link href="#">
                    <li className="hover:text-red-500">Informações da empresa</li>
                </Link>
            </ul>
        </div>
    )
}

export default Rodape