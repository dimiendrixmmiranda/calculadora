import { useState } from 'react';
import Botao from '../botao/Botao'
import style from './style.module.css'
import { caracteres } from '@/core/constants/caracteres'
import { GiHamburgerMenu } from "react-icons/gi";
import { caracteresAuxiliares } from '@/core/constants/caractereAuxiliar';
import { apagar, elevarAoQuadrado, inserirSimboloPotenciacao, limpar, raizQuadrada, trocarSinal } from '@/core/funcoesAuxiliares/funcoes';
import { numero } from '@/core/funcoesAuxiliares/funcaoNumero';

export default function Calculadora() {
    const [visible, setVisible] = useState(false)
    const [linhaVisorAtual, setLinhaVisorAtual] = useState('0')
    const [historico, setHistorico] = useState<string[]>([])
    const PI = 3.14159

    function operacao(operacao: string) {
        if (linhaVisorAtual != '0') {
            if (operacao === '=') {
                const operadorExistente = linhaVisorAtual.match(/(?<!^)(\+|-|\*|\/|%|\^)/g);
                let [valor1, , valor2] = linhaVisorAtual.split(/(?<!^)(\+|-|\*|\/|%|\^)/g)
                let resultado = 0
                let novoValor1 = 0
                let novoValor2 = 0

                if (valor1.includes('π')) {
                    const numero = valor1.split('π').filter(i => i !== '')
                    if (numero.length <= 0) {
                        novoValor1 = PI
                    } else {
                        novoValor1 = parseFloat(numero[0]) * PI
                    }
                } else {
                    novoValor1 = parseFloat(valor1)
                }
                if (valor2.includes('π')) {
                    const numero = valor2.split('π').filter(i => i !== '')
                    if (numero.length <= 0) {
                        novoValor2 = PI
                    } else {
                        novoValor2 = parseFloat(numero[0]) * PI
                    }
                } else {
                    novoValor2 = parseFloat(valor2)
                }

                if (operadorExistente != null && operadorExistente[0] === '+') {
                    resultado = novoValor1 + novoValor2
                } else if (operadorExistente != null && operadorExistente[0] === '-') {
                    resultado = novoValor1 - novoValor2
                } else if (operadorExistente != null && operadorExistente[0] === '*') {
                    resultado = novoValor1 * novoValor2
                } else if (operadorExistente != null && operadorExistente[0] === '/') {
                    resultado = novoValor1 / novoValor2
                } else if (operadorExistente != null && operadorExistente[0] === '%') {
                    resultado = parseFloat(valor2) - (parseFloat(valor1) / 100) * parseFloat(valor2);
                } else if (operadorExistente != null && operadorExistente[0] === '^') {
                    resultado = Math.pow(novoValor1, novoValor2)
                }
                const linhaHistorico = `${valor1} ${operadorExistente} ${valor2} = ${resultado}`
                setHistorico([linhaHistorico, ...historico])
                setLinhaVisorAtual(resultado.toString());
            }
            if (operacao === '+' || operacao === '-' || operacao === '*' || operacao === '/' || operacao === '%' || operacao == '^') {
                const operadorExistente = linhaVisorAtual.match(/(?<!^)(\+|-|\*|\/|%|\^)/g);

                if (operadorExistente) {
                    let [valor1, , valor2] = linhaVisorAtual.split(/(?<!^)(\+|-|\*|\/|%|\^)/g)
                    const operadorAnterior = operadorExistente[0];
                    let resultado = 0;

                    let novoValor1 = 0
                    let novoValor2 = 0

                    if (valor1.includes('π')) {
                        const numero = valor1.split('π').filter(i => i !== '')
                        if (numero.length <= 0) {
                            novoValor1 = PI
                        } else {
                            novoValor1 = parseFloat(numero[0]) * PI
                        }
                    } else {
                        novoValor1 = parseFloat(valor1)
                    }
                    if (valor2.includes('π')) {
                        const numero = valor2.split('π').filter(i => i !== '')
                        if (numero.length <= 0) {
                            novoValor2 = PI
                        } else {
                            novoValor2 = parseFloat(numero[0]) * PI
                        }
                    } else {
                        novoValor2 = parseFloat(valor2)
                    }

                    if (operadorAnterior === '+') {
                        resultado = novoValor1 + novoValor2
                    } else if (operadorAnterior === '-') {
                        resultado = novoValor1 - novoValor2
                    } else if (operadorAnterior === '*') {
                        resultado = novoValor1 * novoValor2
                    } else if (operadorAnterior === '/') {
                        resultado = novoValor1 / novoValor2
                    } else if (operadorAnterior === '%') {
                        resultado = parseFloat(valor2) - (parseFloat(valor1) / 100) * parseFloat(valor2);
                    } else if (operadorAnterior === '^') {
                        resultado = Math.pow(novoValor1, novoValor2)
                    }
                    const linhaHistorico = `${novoValor1} ${operadorExistente} ${novoValor2} = ${resultado}`
                    setHistorico([linhaHistorico, ...historico])
                    setLinhaVisorAtual(resultado.toString() + operacao);
                } else {
                    setLinhaVisorAtual(linhaVisorAtual + operacao);
                }
            }
            if (operacao === 'apagar') { apagar(linhaVisorAtual, setLinhaVisorAtual) }
            if (operacao === 'limpar') { limpar(setLinhaVisorAtual) }
            if (operacao === 'potenciacao') { inserirSimboloPotenciacao(linhaVisorAtual, setLinhaVisorAtual) }
            if (operacao === 'x²') { elevarAoQuadrado(linhaVisorAtual, setLinhaVisorAtual) }
            if (operacao === '√x') { raizQuadrada(linhaVisorAtual, setLinhaVisorAtual) }
            if (operacao === '±') { trocarSinal(linhaVisorAtual, setLinhaVisorAtual) }
            if (operacao === 'CE'){
                setHistorico([])
            }
        }
    }

    function operacaoEspecial(operacao: string, e: any) {
        const visor = document.querySelector('#visor')
        const operacaoEspecial = visor?.querySelector('#operacaoEspecial')

        if (operacaoEspecial === null) {
            const input = criarInput()
            const div = document.createElement('div')
            div.id = 'operacaoEspecial'
            div.classList.add('operacaoEspecial')
            input.map(item => div.appendChild(item))
            visor?.appendChild(div)
        } else {
            operacaoEspecial?.remove()
        }
    }


    function criarInput() {
        const input = document.createElement('input')
        input.type = 'text'
        input.placeholder = 'Digite sua Expressão ...'

        const btn = document.createElement('button')
        return [input, btn]
    }

    return (
        <div className={style.calculadora}>
            <button className={style.menuAuxiliar} onClick={() => visible ? setVisible(false) : setVisible(true)}>
                <GiHamburgerMenu />
            </button>
            <div className={style.containerVisor} id='visor'>
                <ul className='w-fit ml-auto mr-2 pr-2 pt-1 h-[80px] flex flex-col-reverse gap-1npm run dev text-end overflow-y-scroll'>
                    {
                        historico.map((linha, i) => {
                            return (
                                <li key={i} className='leading-4' style={{ textShadow: '1px 1px 1px black' }}>
                                    <p>{linha}</p>
                                </li>
                            )
                        })
                    }
                </ul>
                <p className={`font-bold text-end pr-2 ${linhaVisorAtual.length > 12 ? 'text-2xl' : 'text-4xl'}`} style={{ textShadow: '1px 1px 2px black' }}>{linhaVisorAtual}</p>
            </div>
            <div className={style.containerTeclado}>
                {
                    caracteres.map((caracter, i) => {
                        return (
                            <Botao texto={caracter.texto} key={i} coluna={caracter.coluna ? caracter.coluna : 'auto'} linha={caracter.linha ? caracter.linha : 'auto'} operacao={caracter.operacao} valor={caracter.valor} cor={caracter.cor} onclick={() => caracter.operacao ? operacao(caracter.valor) : numero(caracter.valor, linhaVisorAtual, setLinhaVisorAtual)}></Botao>
                        )
                    })
                }
            </div>
            <div className={style.containerTecladoAuxiliar} style={{ display: visible ? 'flex' : 'none' }}>
                {
                    caracteresAuxiliares.map((caracter, i) => {
                        return (
                            <Botao key={i} imagem={caracter.imagem} texto={caracter.texto} coluna={caracter.coluna ? caracter.coluna : 'auto'} linha={caracter.linha ? caracter.linha : 'auto'} operacao={caracter.operacao} valor={caracter.valor} cor={caracter.cor} onclick={(e) => caracter.operacao ? operacao(caracter.valor) : caracter.operacaoEspecial ? operacaoEspecial(caracter.valor, e) : numero(caracter.valor, linhaVisorAtual, setLinhaVisorAtual)}></Botao>
                        )
                    })
                }
            </div>
        </div>
    )
}