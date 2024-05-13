'use client'
import { useState } from "react";
import AcordeonItem from "./acordeonItem";
import DuvidasAcordeon from "./duvidasAcordeon";

export default function Duvidas (){
    const [showItem, setShowItem] = useState<number | null>(null);

    const handleItemClick = (index: any) => {
        setShowItem(index);
    };
    return (
        <>
        <div className="duvidas">
            <p className="acord-title">Dúvidas frequentes</p>
            <DuvidasAcordeon>
                <AcordeonItem 
                    onclick={() => handleItemClick(1)}
                    active={showItem === 1}
                    pergunta="Qual a importância da reciclagem ?" 
                    resposta="Alem de evitar a contaminação do meio ambiente, evitamos a poluição gerada pela fabricação das peças."/>
                <AcordeonItem 
                    onclick={() => handleItemClick(2)}
                    active={showItem === 2}
                    pergunta="Qual o propósito da ong EFIVI -  Eficiente Visual ?" 
                    resposta="Incentivar a reciclagem de eletrônicos, colaborar nesse aspecto recolhendo e reutilizando esse material e realizar doação de equipamentos ercuperados, como computadores adapatados para o deficiente visual."/>
                <AcordeonItem 
                    onclick={() => handleItemClick(3)}
                    active={showItem === 3}
                    pergunta="Como posso participar do curso de eletrônica ?" 
                    resposta="Contate a EFIVI abaixo ou faça-nos uma visita."/>
            </DuvidasAcordeon>
        </div>
        </>
    )
}