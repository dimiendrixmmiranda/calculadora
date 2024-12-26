'use client'

import Calculadora from "@/components/calculadora/Calculadora"

export default function App() {
	return(
		<div className="w-full h-screen bg-zinc-300 flex flex-col gap-2 justify-center items-center">
			<h1 className="font-black text-4xl uppercase text-[--magenta]">Calculadora</h1>
			<Calculadora></Calculadora>
		</div>
	)
}