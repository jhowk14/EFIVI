export default function AcordeonItem ({pergunta, resposta , onclick, active}: {pergunta: string, resposta: string, onclick: ()=> void, active: boolean}){
    return (
        <>
            <div className="acord-item">
                <div className="pergunta" onClick={onclick}>{pergunta}</div>
                <div className={`resposta ${active? 'active' : ''}`}>{resposta}</div>
            </div>
        </>
    )
}