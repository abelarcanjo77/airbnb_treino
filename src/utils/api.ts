import { Acomodacao, DadosApiAcomodacaoIcones } from "@/types/interfacesApi";
import { client } from "@/sanity/lib/client";

export async function fetchData(): Promise<DadosApiAcomodacaoIcones> {
  try {
    const query = `{
      "acomodacoes": *[_type == "acomodacao"] | order(number asc) {
        number,
        date,
        host,
        id,
        title,
        "slug": slug.current,
        location,
        detailsAccommod,
        comodidades,
        hasBadge,
        price,
        rating,
        testimonials,
        photos
      },
      "icones": *[_type == "icone"] {
        id,
        description,
        source,
        url
      }
    }`;

    const dados = await client.fetch<DadosApiAcomodacaoIcones>(
      query,
      {},
      { next: { revalidate: 60 } } // Atualiza os dados a cada 60 segundos
    );

    return {
      acomodacoes: dados?.acomodacoes || [],
      icones: dados?.icones || [],
    };
  } catch (error) {
    console.error("Erro ao buscar dados do Sanity:", error);
    throw error;
  }
}

export async function fetchDataById(id: string): Promise<Acomodacao | undefined> {
  try {
    const slugDecodificado = decodeURIComponent(id);

    const query = `*[_type == "acomodacao" && slug.current == $slug][0] {
      number,
      date,
      host,
      id,
      title,
      "slug": slug.current,
      location,
      detailsAccommod,
      comodidades,
      hasBadge,
      price,
      rating,
      testimonials,
      photos
    }`;

    const acomodacao = await client.fetch<Acomodacao | null>(
      query,
      { slug: slugDecodificado },
      { next: { revalidate: 60 } }
    );

    return acomodacao || undefined;
  } catch (error) {
    console.error("Erro ao buscar acomodação por slug:", error);
    throw error;
  }
}