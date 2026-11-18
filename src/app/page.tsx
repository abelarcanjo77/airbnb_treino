import { fetchData } from "@/utils/api";
import BarraPesquisa from "@/widgets/BarraPesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";
import ListaAcomodacoes from "@/widgets/ListaAcomodacoes";
import NavegacaoHorizontal from "@/widgets/NavegacaoHorizontal";
import Rodape from "@/widgets/Rodape";

export default async function Home() {

  const dados = await fetchData()

  return (
    <>
    <header className="container mx-auto z-10">
      <BarraSuperior/>
      <BarraPesquisa/>
    </header>
    <hr className="opacity-15 mt-4 mx-2"/>
    <main className="container mx-auto mt-4">
      <NavegacaoHorizontal icones={dados.icones}/>
      <ListaAcomodacoes acomodacao={dados.acomodacoes}/>
    </main>
    <div className="bg-gray-200 mt-4">
      <footer className="container mx-auto">
        <Rodape />
      </footer>
    </div>
    </>
  );
}
