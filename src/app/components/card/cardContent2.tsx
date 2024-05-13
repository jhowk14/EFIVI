import Card from "./card2"

export default function CardContent2 (){
    return (
        <>
            <div className="process2">
            <div className="cards2">
                <Card 
                 text="Capacitação profissional (aulas de eletrônica básica com ênfase em hardware gratuitamente)."
                 image="img/cur.png"
                 altt="icone curso"/>
                <Card
                  text="Proteção ao meio ambiente (descarte ecológico de materiais eletro/eletronico)." 
                  image="img/eco.png"
                 altt="icone curso "/>
                <Card
                  text="Suporte técnico a entidades beneficientes (equipamentos)." 
                  image="img/doa.png"
                 altt="icone curso"/>
                <Card
                  text="Inclusão digital do deficiente visual (doação de computadores e periféricos)." 
                  image="img/vis.png"
                 altt="icone curso"/>
            </div>
        </div>
        </>
    )
}