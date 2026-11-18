"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Fotos } from "@/types/interfacesApi"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Controller, Scrollbar, Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css/controller';
import 'swiper/css/scrollbar';

interface ApresentaProps {
    onClose: () => void
    fotos: Fotos[]
    id: string
    descricao: string
}


const Apresentacao = ({onClose, fotos, id, descricao} : ApresentaProps) => {

    const [slideShow, setSlideShow] = useState<string | false>(false)

    const swiperRef = useRef<any>(null);

    const swiperRef2 = useRef<any>(null);
    
    return(
    <div 
      onClick={onClose} 
      className="fixed inset-0 w-screen h-screen bg-black/50 z-50 flex items-center justify-center"
    >
      <div 
      onClick={(e) => e.stopPropagation()}
      className="bg-white max-w-[600px] px-6 py-6 rounded-2xl shadow-xl flex flex-col gap-4 items-center relative"
      >
        <div>
          <Image 
              src={slideShow && slideShow || id}
              alt={descricao}
              width={1000}
              height={800}
              className="aspect-auto object-contain max-h-[600px]"
          />
        </div>
        <div className="w-full  relative">
          <button 
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 z-10 bg-linear-to-r from-black/60 pl-2 pr-4 h-full hover:from-black/60 duration-30 text-white/60 hover:pr-10 active:pl-1"
          >
            ◀
          </button>
          <Swiper
            spaceBetween={5}
            slidesPerView={4}
            modules={[Navigation, Pagination, Mousewheel, Controller, Scrollbar, Autoplay, FreeMode]} // Adiciona o Navigation aqui
            onSwiper={(swiper) => {swiperRef.current = swiper}}
            /* freeMode={{
              enabled: true,
              momentum: false
            }} */
            mousewheel
            scrollbar={{ 
              el: '.minha-scrollbar-customizada', // Aponta para a classe da div abaixo
              draggable: true 
            }}
            allowTouchMove={false}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false
            }}
            speed={3000}
            loop={true}
          >
            {fotos.map((item, indice) => (
                <SwiperSlide key={indice}>
                            <div className="flex flex-col items-center hover:text-red-500 overflow-hidden">
                                <Image 
                                    src={item.source}
                                    alt={item.description}
                                    width={300}
                                    height={100}
                                    onClick={() => setSlideShow(item.source)}
                                    className="aspect-square object-cover transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                </SwiperSlide>
            ))}
            
          </Swiper>
          <button 
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-linear-to-l from-black/60 pl-4 pr-2 h-full hover:from-black/60 duration-30 text-white/60 hover:pl-10 active:pr-1"
          >
            ▶
          </button>
        </div>

        <div className="minha-scrollbar-customizada w-full mx-auto mt-2 h-2 bg-gray-200 rounded-full relative overflow-hidden cursor-pointer"/>
      
        <div className="w-full relative flex items-center">
          <button 
            onClick={() => swiperRef2.current?.slidePrev()}
            className="left-0 z-10 pl-2 pr-4 h-full duration-30 text-black/60 active:pr-5 active:pl-1"
          >
            ◀
          </button>
          <Swiper
            spaceBetween={5}
            slidesPerView={4.5}
            modules={[Navigation, Pagination, Mousewheel, Controller, Scrollbar]} // Adiciona o Navigation aqui
            onSwiper={(swiper) => {swiperRef2.current = swiper}}
            mousewheel
            
          >
            {fotos.map((item, indice) => (
                <SwiperSlide key={indice}>
                            <div className="flex flex-col items-center hover:text-red-500 overflow-hidden">
                                <Image 
                                    src={item.source}
                                    alt={item.description}
                                    width={300}
                                    height={100}
                                    onClick={() => setSlideShow(item.source)}
                                    className="aspect-square object-cover transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                </SwiperSlide>
            ))}
            
          </Swiper>
          <button 
            onClick={() => swiperRef2.current?.slideNext()}
            className="right-0 z-10 pl-4 pr-2 h-full duration-30 text-black/60 active:pl-5 active:pr-1"
          >
            ▶
          </button>
        </div>

      </div>
    </div>
  )
}

export default Apresentacao