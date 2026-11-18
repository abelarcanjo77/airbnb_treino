import AcomodacaoDestaque from "@/components/AcomodacaoDestaque";
import Galeria from "@/components/Galeria";
import { fetchData, fetchDataById } from "@/utils/api";
import AvaliacaoAcomodacao from "@/widgets/AvaliacaoAcomodacao";
import BarraPesquisa from "@/widgets/BarraPesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";
import DetalhesAcomodacao from "@/widgets/DetalhesAcomodacao";
import Rodape from "@/widgets/Rodape";
import { notFound } from "next/navigation";
import 'swiper/css';

interface PageProps {
    id: string
}

export default async function Page({params} : {params : Promise<PageProps>}) {

    const {id} = await params

    const acomodacao = await fetchDataById(id)

    const recomendados = await fetchData()

    if(!acomodacao){
        notFound()
    }

    return (
        <>
        <header className="container mx-auto z-10">
            <BarraSuperior />
            <BarraPesquisa />
        </header>
        <hr className="opacity-15 mt-4 mx-2"/>
        <main className="container mx-auto mt-4 xl:grid xl:grid-cols-4 xl:gap-4">
            <div className="xl:col-span-3">
                <div className="font-semibold text-xl px-2">{acomodacao.title}</div>
                <Galeria fotos={acomodacao.photos}/>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <DetalhesAcomodacao locacao={acomodacao}/>
                    <AvaliacaoAcomodacao locacao={acomodacao}/>
                </div>
                <hr className="opacity-15 mt-4 mx-2 xl:hidden"/>
            </div>
            <div className="xl:grid xl:grid-cols-15">
                <div className="h-full w-px bg-gray-300 opacity-50 my-auto hidden xl:block xl:col-span-1"/>
                <div className="xl:col-span-14">
                    <div className="font-semibold text-xl px-2 py-4 xl:pt-0">Recomendados</div>
                    <div className="px-2">
                        <AcomodacaoDestaque acomodacoes={recomendados.acomodacoes} id={id}/>
                    </div>
                </div>
            </div>
        </main>
        <div className="bg-gray-200 mt-4">
        <footer className="container mx-auto">
            <Rodape />
        </footer>
        </div>
        </>
    )
}