interface BotaoProps {
    icon: React.ReactNode
    text: string
}

const Botao = (props: BotaoProps) => {
    return (
            <div className="flex gap-2 border border-gray-400 rounded-lg py-2 px-3 hover:border-gray-600">
                {props.icon}
                <span>{props.text}</span>
            </div>
    )
}

export default Botao