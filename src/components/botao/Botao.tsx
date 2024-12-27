import BotaoProps from "@/core/interface/InterfaceBotao";
import Image from "next/image";

export default function Botao({ texto, coluna, linha, cor, style, imagem, onclick}: BotaoProps) {
    return (
        <button className={`w-full h-full rounded-md text-xl font-semibold ${style}`}
            style={{ gridColumn: `${coluna ? coluna : 'auto'}`, gridRow: `${linha ? linha : 'auto'}`, backgroundColor: `${cor}`, boxShadow: '1px 1px 3px 2px black' }}
            onClick={onclick}
            onKeyDown={() => console.log('aqui')}
        >   
            {
                imagem == null ? texto : <Image alt="image" src={imagem} width={45} height={45} className="mx-auto"></Image>
            }
        </button>
    )
}