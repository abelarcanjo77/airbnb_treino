import { Acomodacao } from "@/types/interfacesApi"
import { 
    IconPhoto,
    IconToolsKitchen2,
    IconDesk,
    IconPool,
    IconBrandCarbon,
    IconSailboat,
    IconWifi,
    IconParking,
    IconDog,
    IconAlarmSmoke,
    IconMap2,
} from "@tabler/icons-react"

interface DetalhesAcomodacaoProps {
    locacao: Acomodacao
}

const DetalhesAcomodacao = (props: DetalhesAcomodacaoProps) => {

    const dados = props.locacao

    return(
        <div className="px-2">
            <div className="flex gap-2">
                <IconMap2 /> 
                <div className="text-lg font-semibold">{dados.location.description}</div>
            </div>
            <ul className="flex flex-row gap-2 text-sm">
                <li>{dados.detailsAccommod.guest} hóspedes</li>
                <li>&#183;</li>
                <li>{dados.detailsAccommod.room} quartos</li>
                <li>&#183;</li>
                <li>{dados.detailsAccommod.bed} camas</li>
                <li>&#183;</li>
                <li>{dados.detailsAccommod.bathroom} banheiros</li>
            </ul>
            <div className="text-lg font-semibold py-4">O que esse lugar oferece?</div>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-7 xl:gap-y-6 gap-x-2">
                <li className="flex gap-2">
                    <IconPhoto />
                    {dados.detailsAccommod.montainView && <span>Vista para as montanhas</span> || <span className="line-through">Vista para as montanhas</span>}
                </li>
                <li className="flex gap-2 items-center">
                    <IconToolsKitchen2 />
                    {dados.detailsAccommod.kitchen && <span>Cozinha</span> || <span className="line-through">Cozinha</span>}
                </li>
                <li className="flex gap-2 items-center">
                    <IconDesk />
                    {dados.detailsAccommod.workspace && <span>Espaço de trabalho exclusivo</span> || <span className="line-through">Espaço de trabalho exclusivo</span>}
                </li>
                <li className="flex gap-2 items-center">
                    <IconPool />
                    {dados.detailsAccommod.pivatePool && <span>Piscina privativa</span> || <span className="line-through">Piscina privativa</span>}
                </li>
                <li className="flex gap-2 items-center">
                    <IconBrandCarbon />
                    {dados.detailsAccommod.alertCarbon && <span>Alarme de segurança p/ gás</span> || <span className="line-through">Alarme de segurança p/ gás</span>}
                </li>
                <li className="flex gap-2 items-center">
                    <IconSailboat />
                    {dados.detailsAccommod.watersView && <span>Vista para as águas</span> || <span className="line-through">Vista para as águas</span>}
                </li>
                <li className="flex gap-2 items-center">
                    <IconWifi />
                    {dados.detailsAccommod.wifi && <span>Wi-Fi rápido (83 Mbps)</span> || <span className="line-through">Wi-Fi rápido (83 Mbps)</span>}
                </li>
                <li className="flex gap-2 items-center">
                    <IconParking />
                    {dados.detailsAccommod.parking && <span>Estacionamento incluído</span> || <span className="line-through">Estacionamento incluído</span>}
                </li>
                <li className="flex gap-2 items-center">
                    <IconDog />
                    {dados.detailsAccommod.animals && <span>Permitido animais</span> || <span className="line-through">Permitido animais</span>}
                </li>
                <li className="flex gap-2 items-center">
                    <IconAlarmSmoke />
                    {dados.detailsAccommod.AlertSmoke && <span>Detector de fumaça</span> || <span className="line-through">Detector de fumaça</span>}
                </li>
            </ul>
        </div>
    )
}

export default DetalhesAcomodacao