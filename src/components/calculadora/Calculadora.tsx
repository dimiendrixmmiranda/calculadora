import { useState } from 'react';
import Botao from '../botao/Botao'
import style from './style.module.css'
import { caracteres } from '@/core/constants/caracteres'
import { GiHamburgerMenu } from "react-icons/gi";

export default function Calculadora() {
    const [visible, setVisible] = useState(false)
    const [linhaVisorAtual, setLinhaVisorAtual] = useState('0')

    const btnsAuxiliar = [
        'a', 'b', 'c', 'd', 'a', 'b', 'c', 'd'
    ]
    function operar(texto: string) {
        if (texto == '⌫') {
            if (linhaVisorAtual.length >= 2) {
                const novoTexto = linhaVisorAtual.slice(0, linhaVisorAtual.length - 1)
                setLinhaVisorAtual(novoTexto)
            } else {
                setLinhaVisorAtual('0')
            }
        } else {
            if (linhaVisorAtual === '0') {
                setLinhaVisorAtual('' + texto)
            } else {
                setLinhaVisorAtual(linhaVisorAtual + texto)
            }
        }

        if (texto == '=') {
            const operacao = linhaVisorAtual.match(/(?<!^)(\+|-|x|÷|%)/gi);
            const [valor1, , valor2] = linhaVisorAtual.split(/(?<!^)(\+|-|x|÷|%)/gi);

            let resultado = 0

            if (operacao != null) {
                if (operacao[0] == '+') {
                    resultado = parseFloat(valor1) + parseFloat(valor2)
                    setLinhaVisorAtual(resultado.toString())
                }
                if (operacao[0] == '-') {
                    resultado = parseFloat(valor1) - parseFloat(valor2)
                    setLinhaVisorAtual(resultado.toString())
                }
                if (operacao[0] == 'x') {
                    resultado = parseFloat(valor1) * parseFloat(valor2)
                    setLinhaVisorAtual(resultado.toString())
                }
                if (operacao[0] == '÷') {
                    resultado = parseFloat(valor1) / parseFloat(valor2)
                    console.log(resultado)
                    setLinhaVisorAtual(resultado.toString())
                }
                if (operacao[0] == '%') {
                    const novoValor2 = parseFloat(valor2) / 100
                    resultado = parseFloat(valor1) - (parseFloat(valor1) * novoValor2)
                    setLinhaVisorAtual(resultado.toString())
                }
            }
        }

        if (texto == 'C') {
            setLinhaVisorAtual('0')
        }
        if (texto == '±') {
            setLinhaVisorAtual((parseFloat(linhaVisorAtual) * -1).toString())
        }

        if (texto == 'x²') {
            const valor = Math.pow(parseFloat(linhaVisorAtual), 2)
            setLinhaVisorAtual(valor.toString())
        }
        if (texto == '√x') {
            const valor = Math.sqrt(parseFloat(linhaVisorAtual))
            setLinhaVisorAtual(valor.toString())
        }
    }
    return (
        <div className={style.calculadora}>
            <button className={style.menuAuxiliar} onClick={() => visible ? setVisible(false) : setVisible(true)}>
                <GiHamburgerMenu />
            </button>
            <div className={style.containerVisor}>
                <div></div>
                <p className={`font-bold text-end pr-2 ${linhaVisorAtual.length > 12 ? 'text-2xl' : 'text-4xl'}`} style={{ textShadow: '1px 1px 2px black' }}>{linhaVisorAtual}</p>
            </div>
            <div className={style.containerTeclado}>
                {
                    caracteres.map((caracter, i) => {
                        return (
                            <Botao texto={caracter.texto} key={i} coluna={caracter.coluna ? caracter.coluna : 'auto'} linha={caracter.linha ? caracter.linha : 'auto'} cor={caracter.cor} onclick={() => operar(caracter.texto)}></Botao>
                        )
                    })
                }
            </div>
            <div className={style.containerTecladoAuxiliar} style={{ display: visible ? 'grid' : 'none' }}>
                {
                    btnsAuxiliar.map((btn, i) => {
                        return (
                            <Botao key={i} cor='var(--magenta)' texto={btn} style='h-[50px]'></Botao>
                        )
                    })
                }
            </div>
        </div>
    )
}