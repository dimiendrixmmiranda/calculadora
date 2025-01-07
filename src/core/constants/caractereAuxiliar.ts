import BotaoProps from "../interface/InterfaceBotao"


export const caracteresAuxiliares: BotaoProps[] = [
    {
        texto: 'x²',
        coluna: '2/3',
        linha: '1/2',
        cor: 'var(--magenta)',
        operacao: true,
        valor: 'x²'
    },
    {
        texto: '√x',
        coluna: '3/4',
        linha: '1/2',
        cor: 'var(--magenta)',
        operacao: true,
        valor: '√x'
    },
    {
        texto: 'xʸ',
        cor: 'var(--magenta)',
        operacao: true,
        valor: 'potenciacao'
    },
    {
        texto: 'π',
        cor: 'var(--magenta)',
        operacao: false,
        valor: 'π'
    },
    {
        texto: 'x',
        cor: 'var(--magenta)',
        operacao: false,
        valor: 'x'
    },
    // bhaskara será uma operação expecial, posso colocar um input em cima do visor...
    {
        texto: '',
        imagem: '/bhaskara.png',
        cor: 'var(--magenta)',
        operacao: false,
        valor: 'bhaskara',
        operacaoEspecial: true
    },
]