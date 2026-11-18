"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Acomodacao } from "@/types/interfacesApi"
import { IconHeartFilled, IconStarFilled } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import 'swiper/css/scrollbar'
import 'swiper/css/navigation';
import {Navigation, Scrollbar, Mousewheel } from 'swiper/modules';

interface AcomodacaoDestaque {
    acomodacoes : Acomodacao[]
    id: string
}

const AcomodacaoDestaque = (props : AcomodacaoDestaque) => {

    const acomodacoes = props.acomodacoes

    const id = props.id

    return (
        <Swiper
            modules={[ Navigation, Scrollbar, Mousewheel]}
            spaceBetween={15}
            slidesPerView={1.5}
            className="xl:h-screen"
            scrollbar={{ draggable: true }}
            mousewheel
            breakpoints={{
                768: {slidesPerView:2.5},
                1024: {slidesPerView:3.5},
                1280: {direction:"vertical", slidesPerView:2.2}
            }}
        >
            {acomodacoes.map((item, indice) => {
                if(item.slug != id) {
                    return (
                        <SwiperSlide key={indice} className="pb-8 xl:pr-8">
                            <Link href={item.slug}>
                                <div className="relative">
                                    <div className="flex items-center justify-between absolute w-full p-2">
                                        <div>
                                            {item.hasBadge && <span className="text-sm font-semibold bg-white px-4 py-1 rounded-full">Favorito dos hóspedes</span>}
                                        </div>
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
                        </SwiperSlide>
                    )
                }
                })}
        </Swiper>
    )
}

export default AcomodacaoDestaque