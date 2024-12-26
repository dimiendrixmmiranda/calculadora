import BotaoProps from "@/core/interface/InterfaceBotao";

export default function Botao({ texto, coluna, linha, cor, style, onclick}: BotaoProps) {
    return (
        <button className={`w-full h-full rounded-md text-xl font-semibold ${style}`}
            style={{ gridColumn: `${coluna ? coluna : 'auto'}`, gridRow: `${linha ? linha : 'auto'}`, backgroundColor: `${cor}`, boxShadow: '1px 1px 3px 2px black' }}
            onClick={onclick}
            onKeyDown={() => console.log('aqui')}
        >
            {texto}
        </button>
    )
}