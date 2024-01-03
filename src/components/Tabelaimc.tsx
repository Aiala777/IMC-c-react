interface TabelaimcProps{
    imc:number
}


export default function Tabelaimc(props:TabelaimcProps){
    return(
        <div className="mx-2 b-2">
            <div className={"flex " + ((props.imc < 18.5?"destaque":""))}>
                <div className="w-1/2 border text-center foont-bold">Classificação</div>
                <div className="w-1/2 border text-center foont-bold">IMC</div>
            </div>
            <div className={"flex " + ((props.imc < 18.5?"destaque":""))}>
                <div className="w-1/2 border">Abaixo do Peso</div>
                <div className="w-1/2 border">Abaixo de 18,5</div>
            </div>
            <div className={"flex " + ((props.imc >= 18.5 && props.imc <= 24.9?"destaque":""))}>
                <div className="w-1/2 border">Peso normal</div>
                <div className="w-1/2 border">Entre de 18,5 e 24,9</div>
            </div>
            <div className={"flex " + ((props.imc >= 25 && props.imc <= 29.9?"destaque":""))}>
                <div className="w-1/2 border">Sobre Peso</div>
                <div className="w-1/2 border">Entre 25 e 29,9</div>
            </div>
            <div className={"flex " + ((props.imc >= 30 && props.imc <= 34.9?"destaque":""))}> 
                <div className="w-1/2 border">Obesidade grau I</div>
                <div className="w-1/2 border">Entre 30 e 34,9</div>
            </div>
            <div className={"flex " + ((props.imc > 40.0?"destaque":""))}>
                <div className="w-1/2 border">Obesidade grau II</div>
                <div className="w-1/2 border">Entre 35 e 39,9</div>
            </div>
        </div>
    )
}