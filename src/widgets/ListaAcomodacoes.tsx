import { Acomodacao } from "@/types/interfacesApi"
import { IconHeartFilled, IconStarFilled } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"

interface ListaAcomodacoesProps {
    acomodacao: Acomodacao[]
    pesquisa?: string
    filtros?: string
}

const ListaAcomodacoes = (props: ListaAcomodacoesProps) => {

    const listAcomodacoes = props.acomodacao

    const pesquisa = props.pesquisa

    const filtros = props.filtros

    

    // 1. Converte a string de filtros que veio da URL num array
    const arrayFiltros = filtros ? filtros.split(",") : [];
    
    // 2. Faz o filtro na lista de acomodações
    const listFiltrada = listAcomodacoes.filter((item) => {
    
        // Condição do texto de pesquisa
        const matchTexto = pesquisa ? (
            item.title.toLowerCase().includes(pesquisa.toLowerCase()) ||
            item.location.city.toLowerCase().includes(pesquisa.toLowerCase()) ||
            item.location.state.toLowerCase().includes(pesquisa.toLowerCase()) ||
            item.location.description.toLowerCase().includes(pesquisa.toLowerCase())
        ) : true;

        // Converte a string de comodidades da API (ex: item.comodidades) num array usando split(",")
        const comodidadesDoItem = item.comodidades ? item.comodidades.split(",") : [];

        // Verifica se a acomodação possui TODAS as comodidades que o usuário marcou nos filtros
        const matchFiltros = arrayFiltros.length > 0 
            ? arrayFiltros.every((filtro) => comodidadesDoItem.includes(filtro)) 
            : true;

        return matchTexto && matchFiltros;
    });

    if(listFiltrada[0]) {
        return (
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-4 px-2">
                {listFiltrada.map((item,indice) => (
                    <Link href={item.slug} key={indice} >
                        <div className="relative">
                            <div className="flex items-center justify-between absolute w-full p-2">
                                <span className="text-sm font-semibold bg-white px-4 py-1 rounded-full">Favorito dos hóspedes</span>
                                <IconHeartFilled size={30} className="opacity-60 stroke stroke-white"/>
                            </div>
                            <Image
                                src={item.photos[0].source}
                                alt={item.photos[0].description}
                                width={3000}
                                height={3000}
                                className="aspect-square object-cover rounded-xl"
                            />
                            <div>
                                <div className="flex items-center justify-between pt-3">
                                    <div className="font-semibold">{item.location.description}</div>
                                    <div className="flex items-center gap-1">
                                        <IconStarFilled size={20}/>
                                        <span className="font-semibold text-md">{item.rating}</span>
                                    </div>
                                </div>
                                <div>{item.date}</div>
                                <div>Anfitriã(o): {item.host}</div>
                                <div className="font-semibold">R$: {item.price}</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </section>
        )
    } else {
        return(
            <div className="pt-4 px-2">
                <span className="font-semibold text-xl">Nenhum resultado encontrado...</span>
            </div>
        )
    }
}

export default ListaAcomodacoes