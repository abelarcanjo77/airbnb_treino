import { Acomodacao, DadosApiAcomodacaoIcones } from "@/types/interfacesApi";

export async function fetchData() : Promise<DadosApiAcomodacaoIcones>{
    try{
        const response = await fetch("https://gist.githubusercontent.com/abelarcanjo77/9737b93519b6f09ebdbfff025c91d7c6/raw/0c299905b4038695aa96ee72360f84b51ab31a1c/db.json")
        const dados = response.json()
        return dados
    } catch (error) {
        console.error(error)
        throw error
    }
}

export async function fetchDataById(id: string) : Promise<Acomodacao | undefined> {
    try{
        const response = await fetchData()
        const dados = response.acomodacoes.find((item: Acomodacao) => {
            return item.slug === decodeURIComponent(id)
        })
        return dados
    } catch (error) {
        console.error(error)
        throw error
    }
}