import Card from "./card"

export default function CardContent (){
    return (
        <>
            <div className="process">
            <div className="cards">
                <Card 
                 text="Realizamos a coleta e recebimento do lixo eletro/eletrônico impactando positivamente ao meio ambiente."
                 title="1 - Coleta e reciclagem"/>
                <Card 
                  text="Testamos e recuperamos componentes para montagem principalmente de computadores adaptados para uso de deficientes visuais." 
                  title="2 - Restauração e montagem"/>
                <Card 
                  text="Os computadores e quipamentos são doados e os demais componentes são usados em cursos gratuitos de eletrônica que lecionamos em nossa sede." 
                  title="3 - Doação e cursos"/>
            </div>
        </div>
        </>
    )
}