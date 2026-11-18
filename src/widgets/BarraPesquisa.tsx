"use client"

import { IconSearch } from "@tabler/icons-react"
import { useRouter } from "next/navigation";
import { useState } from "react";


const BarraPesquisa = () => {

    const [textInput, setTextInput] = useState("");
    const router = useRouter();

    const handlePesquisar = () => {
    if (!textInput.trim()) return; // Não faz nada se estiver vazio
    
    // Redireciona para a nova página levando o texto digitado
    router.push(`/pesquisa?termo=${encodeURIComponent(textInput)}`);
  };

    return (
        <div className="mx-2">
            <div className="max-w-xl flex items-center justify-between mx-auto rounded-full border border-gray-400 p-2">
                <input 
                    type="text" 
                    placeholder="Pesquise aqui..." 
                    className="pl-2 w-full h-10 outline-none"
                    value={textInput}
                    onChange={(entrada) => setTextInput(entrada.target.value)}
                />
                <button 
                className="bg-red-500 p-1.5 rounded-full text-white"
                onClick={handlePesquisar}
                >
                    <IconSearch size={30}/>
                </button>
            </div>
        </div>
    )
}

export default BarraPesquisa