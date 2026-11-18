"use client"

import { Icones } from "@/types/interfacesApi"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import 'swiper/css';
import Link from "next/link";
import Botao from "@/components/Botao";
import { IconAdjustmentsHorizontal } from "@tabler/icons-react";
import Filtros from "@/components/Filtros";
import { useState } from "react";

interface NavegacaoHorizontalProps {
    icones: Icones[]
}

const NavegacaoHorizontal = (props: NavegacaoHorizontalProps) => {

    const listIcons = props.icones

    const [filtroAberto, setFiltroAberto] = useState(false)
    
    return(
        <div className="flex flex-row items-center gap-4 px-2">
            <Swiper
                spaceBetween={5}
                slidesPerView={3.5}
                breakpoints={{
                    768 : {slidesPerView: 4.5},
                    1024 : {slidesPerView: 6.5},
                    1280 : {slidesPerView: 8.5},
                }}
            >
                {listIcons.map((item, indice) => (
                    <SwiperSlide key={indice}>
                            <Link href={item.url}>
                                <div className="flex flex-col items-center hover:text-red-500">
                                    <Image 
                                        src={item.source}
                                        alt={item.description}
                                        width={24}
                                        height={24}
                                    />
                                    <div className="text-sm">{item.description}</div>
                                </div>
                            </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="relative">
                <Link href="#">
                    <button onClick={() => setFiltroAberto(!filtroAberto)}>
                        <Botao icon={<IconAdjustmentsHorizontal />} text="Filtros"/>
                    </button>
                </Link>
                {filtroAberto && <Filtros onClose={() => setFiltroAberto(false)}/>}
            </div>
        </div>
    )
}

export default NavegacaoHorizontal