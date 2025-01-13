'use client'

import Calculadora from "@/components/calculadora/Calculadora"

export default function App() {
	return(
		<div className="bg-zinc-300 min-h-[100vh] flex flex-col gap-2 items-center py-5">
			<h1 className="font-black text-4xl uppercase text-[--magenta]">Calculadora</h1>
			<Calculadora></Calculadora>
		</div>
	)
}