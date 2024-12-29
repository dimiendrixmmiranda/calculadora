export function numero(numero: string, linhaVisorAtual: string, setLinhaVisorAtual: (valor: string) => void) {
    if (numero === '.') {
        if (!linhaVisorAtual.includes('.')) setLinhaVisorAtual(linhaVisorAtual + numero)
    } else if (linhaVisorAtual === '0') {
        setLinhaVisorAtual('' + numero)
    } else {
        setLinhaVisorAtual(linhaVisorAtual + numero)
    }
}