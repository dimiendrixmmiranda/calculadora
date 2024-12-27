import { useState } from 'react';
import Botao from '../botao/Botao'
import style from './style.module.css'
import { caracteres } from '@/core/constants/caracteres'
import { GiHamburgerMenu } from "react-icons/gi";
import { caracteresAuxiliares } from '@/core/constants/caractereAuxiliar';

export default function Calculadora() {
    const [visible, setVisible] = useState(false)
    const [linhaVisorAtual, setLinhaVisorAtual] = useState('0')
    const PI = 3.14159
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

        if(texto == 'b'){
            setLinhaVisorAtual('bhaskara')
        }

        if (texto == '=') {
            const operacao = linhaVisorAtual.match(/(?<!^)(\+|-|×|÷|%|\^)/g);
            let [valor1, , valor2] = linhaVisorAtual.split(/(?<!^)(\+|-|×|÷|%|\^)/g);

            // LÓGICA DE PI
            if (valor1.includes('π')) {
                if (valor1 == 'π') {
                    valor1 = PI.toString()
                } else {
                    const converterPi = parseFloat(valor1) * PI
                    valor1 = converterPi.toString()
                }
            }
            if (valor2.includes('π')) {
                if (valor2 == 'π') {
                    valor2 = PI.toString()
                } else {
                    const converterPi = parseFloat(valor2) * PI
                    valor2 = converterPi.toString()
                }
            }

            // LÓGICA DE BHASKARA
            if(operacao!= undefined && operacao?.length>=2){
                console.log('caiu em bhaskara')
                console.log(linhaVisorAtual)
            }

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
                if (operacao[0] == '×') {
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
                if (operacao[0] == '^') {
                    const novoValor = Math.pow(parseFloat(valor1), parseFloat(valor2))
                    setLinhaVisorAtual(novoValor.toString())
                }
            }
        }
        if (texto == 'xʸ') {
            setLinhaVisorAtual(linhaVisorAtual + '^')
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
                    caracteresAuxiliares.map((btn, i) => {
                        return (
                            <Botao key={i} cor={btn.cor} texto={btn.texto} style='h-[50px]' onclick={() => operar(btn.texto)} imagem={btn.imagem}></Botao>
                        )
                    })
                }
            </div>
        </div>
    )
}