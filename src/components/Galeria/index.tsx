"use client"

import { Fotos } from "@/types/interfacesApi"
import Image from "next/image"
import { useState } from "react"
import Apresentacao from "../Apresentacao"

interface GaleriaProps {
    fotos: Fotos[]
}

const Galeria = (props: GaleriaProps) => {

    const [fotoSelecionada, setFotoSelecionada] = useState<Fotos | null>(null);

    const fotos = props.fotos

    return(
        <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 px-2 py-4">
                <div className="col-span-1 row-span-1  rounded-xl md:col-span-2 md:row-span-2 overflow-hidden">
                    <Image 
                    src={fotos[0].source}
                    alt={fotos[0].description[0]}
                    width={3000}
                    height={3000}
                    className="aspect-square object-cover transition-transform duration-300 hover:scale-105"
                    onClick={() => setFotoSelecionada(fotos[0])}
                    loading="eager"
                    />
                </div>
                
                {fotos.map((item, indice) => {
                    if(indice > 0 && indice < 5) {
                        return(
                            <div key={indice} className="rounded-xl overflow-hidden">
                                <Image 
                                    src={item.source}
                                    alt={item.description[0]}
                                    width={3000}
                                    height={3000}
                                    className="aspect-square object-cover transition-transform duration-300 hover:scale-105"
                                    onClick={() => setFotoSelecionada(item)}
                                />
                            </div>
                        )
                    }
                })}
                {fotoSelecionada && <Apresentacao onClose={() => setFotoSelecionada(null)} fotos={fotos} id={fotoSelecionada.source} descricao={fotoSelecionada.description[0]}/>}
                
            </div>
            <button onClick={() => setFotoSelecionada(fotos[0])} className="absolute px-4 py-2 bg-white font-black font-semibold text-sm bottom-7 right-7 rounded-lg shadow-black/30 shadow-md hover:bg-white/75">
                Galeria de Fotos
            </button>
        </div>
    )
}

export default Galeria