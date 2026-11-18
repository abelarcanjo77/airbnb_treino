import { fetchData } from "@/utils/api";
import BarraPesquisa from "@/widgets/BarraPesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";
import ListaAcomodacoes from "@/widgets/ListaAcomodacoes";
import NavegacaoHorizontal from "@/widgets/NavegacaoHorizontal";
import Rodape from "@/widgets/Rodape";

export default async function Pesquisa({ searchParams }: { searchParams: { termo?: string, comodidades?: string}}) {

  const dados = await fetchData();
  const resolvedSearchParams = await searchParams;
  const termoPesquisa = resolvedSearchParams.termo || "";
  const filtroPesquisa = resolvedSearchParams.comodidades || "";
  // Filtra as acomodações com base no texto enviado pela URL
  
  const arrayFiltros = filtroPesquisa.split(",")

  return (
    <>
    <header className="container mx-auto z-10">
      <BarraSuperior/>
      <BarraPesquisa/>
    </header>
    <hr className="opacity-15 mt-4 mx-2"/>
    <main className="container mx-auto mt-4">
      <NavegacaoHorizontal icones={dados.icones}/>
      <div className="container mx-auto">
        {resolvedSearchParams.termo && <div className="text-2xl font-bold mb-4 pl-2 pt-4 gap-2 flex flex-wrap items-center">
          <span>Resultados para: </span><span className="px-3 py-1 rounded-full border text-sm">{resolvedSearchParams.termo}</span>
        </div>}
        {resolvedSearchParams.comodidades && <div className="text-2xl font-bold mb-4 pl-2 pt-4 gap-2 flex flex-wrap items-center">
          <span>Filtros ativados: </span>{arrayFiltros.map((item,indice) => {return (<span className="px-3 py-1 rounded-full border text-sm" key={indice}>{item}</span>)})}
        </div>}

        {/* Reutiliza o seu componente que gera os quadros de estadia */}
        <ListaAcomodacoes acomodacao={dados.acomodacoes} pesquisa={termoPesquisa} filtros={filtroPesquisa}/>
    </div>
    
    </main>
    <div className="bg-gray-200 mt-auto">
      <footer className="container mx-auto">
        <Rodape />
      </footer>
    </div>
    </>
  );
}