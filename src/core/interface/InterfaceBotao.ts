export default interface BotaoProps {
    texto: string
    valor: string
    cor: string
    operacao: boolean
    coluna?: string
    linha?: string
    style?: string
    imagem?:string | null
    onclick?:() => void
}