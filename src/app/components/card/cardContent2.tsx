import Card from "./card2"

export default function CardContent2 (){
    return (
        <>
            <div className="process2">
                <h2 className="font-semibold text-2xl">Áreas que esse projeto beneficia</h2>
                <div className="cards2">
                    <Card 
                    text="Capacitação profissional (aulas de eletrônica básica com ênfase em hardware gratuitamente)."
                    image="img/cur.png"
                    altt="icone computador desktop"/>
                    <Card
                    text="Proteção ao meio ambiente (descarte ecológico de materiais eletro/eletronico)." 
                    image="img/eco.png"
                    altt="icone reciclagem"/>
                    <Card
                    text="Suporte técnico a entidades beneficientes (equipamentos)." 
                    image="img/doa.png"
                    altt="icone doação"/>
                    <Card
                    text="Inclusão digital do deficiente visual (doação de computadores e periféricos)." 
                    image="img/vis.png"
                    altt="icone deficiente visual"/>
                </div>
            </div>
        </>
    )
}