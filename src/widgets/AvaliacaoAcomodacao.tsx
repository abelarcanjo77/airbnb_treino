import { Acomodacao } from "@/types/interfacesApi"
import { 
    IconStarFilled,
} from "@tabler/icons-react"
import Image from "next/image"

interface AvaliacaoAcomodacaoProps {
    locacao: Acomodacao
}

const AvaliacaoAcomodacao = (props: AvaliacaoAcomodacaoProps) => {

    const dados = props.locacao

    return(
        <div className="px-2">
            <div className="text-lg font-semibold">Depoimentos</div>
            <div className="flex gap-2 pb-4">
                <IconStarFilled size={20}/>
                <div className="text-sm">{dados.rating} (400+ avaliações)</div>
            </div>
            {dados.testimonials.map((item, indice) => {
                return(
                    <div key={indice} className="flex items-start gap-4 py-2">
                        <Image 
                            src={item.image}
                            alt={item.comment}
                            width={50}
                            height={50}
                            className="aspect-square object-cover rounded-full"
                        />
                        <div>
                            <div className="font-semibold">{item.name}</div>
                            <div>{item.comment}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AvaliacaoAcomodacao