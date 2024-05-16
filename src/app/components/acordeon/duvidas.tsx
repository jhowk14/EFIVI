'use client'
import { Acordeon } from "@/components/component/acordeon";

const accordionItems = [
    {
      value: "item-1",
      question: "Qual a importância da reciclagem ?",
      answer: "Alem de evitar a contaminação do meio ambiente, evitamos a poluição gerada pela fabricação das peças."
    },
    {
      value: "item-2",
      question: "Qual o propósito da ong EFIVI -  Eficiente Visual ?",
      answer: "Incentivar a reciclagem de eletrônicos, colaborar nesse aspecto recolhendo e reutilizando esse material e realizar doação de equipamentos ercuperados, como computadores adapatados para o deficiente visual."
      
    },
    {
        value: "item-3",
        question: "Como posso participar do curso de eletrônica ?",
        answer: "Contate a EFIVI abaixo ou faça-nos uma visita."
    },
    {
      value: "item-4",
      question: "Como receber um computador adptado para def. visuais ?",
      answer: "Entre em contato com a EFIVI através do whatsapp, você deve comprovar a necessidade do aparelho."
  },
  {
    value: "item-5",
    question: "Onde se localiza a ong EFIVI ?",
    answer: "Catanduva - SP"
},
  ];

export default function Duvidas (){
    return (
        <>
        <div className="duvidas">
            <p className="acord-title">Dúvidas frequentes</p>
            <div className="mx-10 w-full px-4 flex justify-center">
            <Acordeon items={accordionItems}/>
            </div>
        </div>
        </>
    )
}