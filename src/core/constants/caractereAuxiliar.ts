import BotaoProps from "../interface/InterfaceBotao"


export const caracteresAuxiliares: BotaoProps[] = [
    {
        texto:'xʸ',
        cor:'var(--magenta)',
        operacao: true,
        valor: 'potenciacao'
    },
    {
        texto:'π',
        cor:'var(--magenta)',
        operacao: false,
        valor: 'π'
    },
    {
        texto:'x',
        cor:'var(--magenta)',
        operacao: false ,
        valor: 'x'
    },
    // bhaskara será uma operação expecial, posso colocar um input em cima do visor...
    {
        texto:'b',
        imagem:'/bhaskara.png',
        cor:'var(--magenta)',
        operacao: true,
        valor: 'bh'
    },
]