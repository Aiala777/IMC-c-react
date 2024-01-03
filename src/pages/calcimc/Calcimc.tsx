import { useState } from "react"
import Campform from "@/components/Campform"
import Tabelaimc from "@/components/Tabelaimc"


export default function Calcimc(){
    const [peso, setPeso]=useState<number>(0)
    const [altura, setAltura]=useState<number>(0)
    const [imc, setImc]=useState<number>(0)

    function calcular(){
        let res=peso/(altura*altura)
        setImc(res)
    }

    return (
        <div className="flex flex-col border border-black w-[300px] gap-5">
            <p className="w-full text-center bag-zinc-400 font-bold text-lg">Cálculo do IMC</p>
            <Campform label="Peso" state={peso} funcState={setPeso}/>
            <Campform label="Altura" state={altura} funcState={setAltura}/>
            <button className="bg-indigo-900 text-white mx-2 p-1 roounded-lg cursor-pointer" onClick={calcular}>Calcular</button>
            <p className="bg-zinc100 p-1" >Resultado: {imc.toFixed(1)}</p>
            <Tabelaimc imc={imc}/>
            

        </div>
    )
}