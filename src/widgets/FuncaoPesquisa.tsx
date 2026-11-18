/* "use client"

import { useState } from "react";
import BarraSuperior from "./BarraSuperior";
import BarraPesquisa from "./BarraPesquisa";
import NavegacaoHorizontal from "./NavegacaoHorizontal";
import ListaAcomodacoes from "./ListaAcomodacoes";
import { DadosApiAcomodacaoIcones } from "@/types/interfacesApi";

interface ConteudoPricipalProps {
  acomodacoes: DadosApiAcomodacaoIcones
}

const ConteudoPricipal = (props: ConteudoPricipalProps) => {

  const dados = props.acomodacoes

  const [termoBuscaFinal, setTermoBuscaFinal] = useState("");

  return (
    <>
    <header className="container mx-auto z-10">
      <BarraSuperior />
      <BarraPesquisa onPesquisar={setTermoBuscaFinal}/>
    </header>
    <hr className="opacity-15 mt-4 mx-2"/>
    <main className="container mx-auto mt-4">
      <NavegacaoHorizontal icones={dados.icones}/>
      <ListaAcomodacoes acomodacao={dados.acomodacoes} pesquisa={termoBuscaFinal}/>
    </main>
    </>
  );
}

export default ConteudoPricipal */