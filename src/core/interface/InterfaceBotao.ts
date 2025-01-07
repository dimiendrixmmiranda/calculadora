export default interface BotaoProps {
    texto: string
    valor: string
    cor: string
    operacao: boolean
    operacaoEspecial?:boolean
    coluna?: string
    linha?: string
    style?: string
    imagem?:string | null
    onclick?:(e:any) => void
}