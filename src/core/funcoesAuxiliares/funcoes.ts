export function apagar(linhaVisorAtual: string, setLinhaVisorAtual: (valor: string) => void) {
    if (linhaVisorAtual.length >= 2) {
        const novoTexto = linhaVisorAtual.slice(0, -1);
        setLinhaVisorAtual(novoTexto);
    } else {
        setLinhaVisorAtual('0');
    }
}

export function limpar(setLinhaVisorAtual: (valor: string) => void) {
    setLinhaVisorAtual('0')
}

export function inserirSimboloPotenciacao(linhaVisorAtual: string, setLinhaVisorAtual: (valor: string) => void) {
    setLinhaVisorAtual(linhaVisorAtual + '^')
}

export function trocarSinal(linhaVisorAtual: string, setLinhaVisorAtual: (valor: string) => void) {
    setLinhaVisorAtual((parseFloat(linhaVisorAtual) * -1).toString())
}

export function raizQuadrada(linhaVisorAtual: string, setLinhaVisorAtual: (valor: string) => void) {
    const resultado = Math.sqrt(parseFloat(linhaVisorAtual))
    setLinhaVisorAtual(resultado.toString())
}

export function elevarAoQuadrado(linhaVisorAtual: string, setLinhaVisorAtual: (valor: string) => void) {
    const resultado = Math.pow(parseFloat(linhaVisorAtual), 2)
    setLinhaVisorAtual(resultado.toString())
}
