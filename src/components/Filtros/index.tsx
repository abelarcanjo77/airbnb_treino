"use client"

import { useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

import { 
  IconPhoto, IconToolsKitchen2, IconDesk, IconPool, 
  IconBrandCarbon, IconSailboat, IconWifi, IconParking, IconDog 
} from '@tabler/icons-react'; // Altere conforme sua biblioteca de ícones

interface Comodidade {
  id: string;
  label: string;
  componenteIcone: React.ComponentType;
}

const COMODIDADES_DATA: Comodidade[] = [
  { id: 'vista_montanha', label: 'Vista para as montanhas', componenteIcone: IconPhoto },
  { id: 'cozinha', label: 'Cozinha', componenteIcone: IconToolsKitchen2 },
  { id: 'espaco_trabalho', label: 'Espaço de trabalho exclusivo', componenteIcone: IconDesk },
  { id: 'piscina_privada', label: 'Piscina privativa', componenteIcone: IconPool },
  { id: 'alarme_gas', label: 'Alarme de segurança p/ gás', componenteIcone: IconBrandCarbon },
  { id: 'vista_aguas', label: 'Vista para as águas', componenteIcone: IconSailboat },
  { id: 'wifi_rapido', label: 'Wi-Fi rápido (83 Mbps)', componenteIcone: IconWifi },
  { id: 'estacionamento', label: 'Estacionamento incluído', componenteIcone: IconParking },
  { id: 'animais', label: 'Permitido animais', componenteIcone: IconDog },
];


export default function Filtros({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  
  // Usamos um Set em vez de Array. O Set impede IDs duplicados nativamente
  // e possui operações de busca mais rápidas .has()
  const [selecionados, setSelecionados] = useState<Set<string>>(new Set());

  const handleToggle = (id: string) => {
    setSelecionados((prev) => {
      const novoSet = new Set(prev);
      if (novoSet.has(id)) {
        novoSet.delete(id);
      } else {
        novoSet.add(id);
      }
      return novoSet;
    });
  };

  const searchParams = useSearchParams();

  const handleFiltrar = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (selecionados.size === 0) {
      params.delete('comodidades');
    } else {
      const queryParams = Array.from(selecionados).join(',');
      params.set('comodidades', queryParams);
    }

    // Garante que sempre vai para a página de pesquisa levando os parâmetros atuais
    router.push(`/pesquisa?${params.toString()}`);
    onClose();
  };

  return (
    <div 
      onClick={onClose} 
      className="fixed inset-0 w-screen h-screen bg-black/50 z-50 flex items-center justify-center"
    >
      <div 
      onClick={(e) => e.stopPropagation()}
      className="bg-white w-[538px] p-6 rounded-2xl shadow-xl"
      >
        <h2 className="font-semibold text-xl pb-4">Filtros</h2>
        <h3 className="font-semibold pb-2">Comodidades</h3>
        
        {/* Grid flexível de itens */}
        <ul className="flex flex-wrap gap-2 pb-4">
          {COMODIDADES_DATA.map((item) => {
            const Icone = item.componenteIcone;
            const isSelecionado = selecionados.has(item.id);
            
            return (
              <li
                key={item.id}
                onClick={() => handleToggle(item.id)}
                className={`
                  flex items-center px-4 py-2 rounded-full border text-sm gap-2 
                  cursor-pointer transition-all select-none
                  ${isSelecionado 
                    ? 'border-black bg-gray-100 font-medium' 
                    : 'border-gray-200 hover:border-gray-400'
                  }
                `}
              >
                <Icone />
                <span>{item.label}</span>
              </li>
            );
          })}
        </ul>

        <button 
          onClick={handleFiltrar}
          className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
        >
          Filtrar
        </button>
      </div>
    </div>
  );
}
