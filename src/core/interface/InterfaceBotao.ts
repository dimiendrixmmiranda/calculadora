export default interface BotaoProps {
    texto: string
    cor: string
    coluna?: string
    linha?: string
    style?: string
    onclick?:() => void
}