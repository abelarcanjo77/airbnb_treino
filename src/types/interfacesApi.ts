export interface DadosApiAcomodacaoIcones {
    acomodacoes: Acomodacao[]
    icones: Icones[]
}

export interface Acomodacao {
    number: number
    date: string
    host: string
    id: string
    title: string
    slug: string
    location: Localizacao
    detailsAccommod: DetalhesAcomod
    comodidades: string
    hasBadge: boolean
    price: number
    rating: number
    testimonials: Avaliacoes[]
    photos: Fotos[]
}

export interface DetalhesAcomod {
    montainView: boolean
	workspace: boolean
    kitchen: boolean
    pivatePool: boolean
    alertCarbon: boolean
    watersView: boolean
    wifi: boolean
    parking: boolean
    animals: boolean
    AlertSmoke: boolean
    guest: number
    room: number
    bed: number
    bathroom: number
}

export interface Localizacao {
    description: string
    city: string
    state: string
    country: string
}

export interface Avaliacoes {
    id: string
    name: string
    image: string
    comment: string
    rating: number
    customerTime: number
    createdAt: number
    stayedAt: number
}

export interface Fotos {
    id: string
    source: string
    description: string
}

export interface Icones {
    id: string
    description: string
    source: string
    url: string
}