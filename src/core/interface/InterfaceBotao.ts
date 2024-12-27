export default interface BotaoProps {
    texto: string
    cor: string
    coluna?: string
    linha?: string
    style?: string
    imagem?:string | null
    onclick?:() => void
}