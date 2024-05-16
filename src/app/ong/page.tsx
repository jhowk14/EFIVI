import { Carolsel } from "@/components//component/carolsel";
import { HeaderCarousel } from "@/components/component/header-carousel";
import { imgsBG } from "@/lib/bgs";

export default function Ong() {
    return (
     <>
         <HeaderCarousel title="A ONG" desc="A EFIVI – Eficiente Visual tem como objetivo possibilitar o desenvolvimento educacional, digital, cultural, social e profissional do deficiente visual, integrando-o na sociedade." Images={imgsBG}/>
         <div className="info1">
        <div className="p-content1">
            <div className="p-title">
                <p className="p-text">SOBRE A EFIVI</p>
            </div>
            <div className="p-desc">
                <p className="d-text">A ONG foi fundada em 2009 por Heraldo Marcio Galvão e tem como objetivo possibilitar o desenvolvimento educacional, digital, cultural, social e profissional do deficiente visual, integrando-o na sociedade, também oferecendo cursos de eletrônica básica e suporte técnico a entidades beneficentes, além da coleta para o descarte ecológico e reciclagem de materiais eletro/eletrônicos.</p>
            </div>
            <Carolsel images={[
                {src: '/img/assets/img7.png', alt:'image 2'},
                {src: '/img/assets/img2.png', alt:'image 2'},
                {src: '/img/assets/img10.png', alt:'image 2'},
            ]}/>
            <div className="p-desc">
                <p className="d-text">O empreendimento aqui proposto é a montagem e instalação de um laboratório de eletrônica e informática (em andamento). Está sendo recolhido em doação, todo e qualquer tipo de equipamento eletro/eletrônico, que depois de reparado e recuperado será revertido ao deficiente visual e toda e qualquer instituição que seja sem fins lucrativos. Todo material considerado sem utilidade técnica ou didática, será reciclado e direcionado de forma ecológica ao descarte.</p>
            </div>
            <Carolsel images={[
                {src: '/img/assets/img9.png', alt:'image 2'},
                {src: '/img/assets/img6.png', alt:'image 2'},
            ]}/>
            <div className="p-desc">
                <p className="d-text">Esse projeto não recebe apoio de nenhuma entidade governamental ou política.  É de conhecimento geral que nossa sociedade não sabe como descartar seus computadores e periféricos, elétrico/eletrônico sendo o lixo comum (erroneamente) o seu destino final, esse projeto se propõe também a minimizar tal situação. Que cada um compartilhe com o seu melhor possível!</p>
            </div>
            <Carolsel images={[
                {src: '/img/assets/img8.png', alt:'image 2'},
                {src: '/img/assets/img4.png', alt:'image 2'},
                {src: '/img/assets/img3.png', alt:'image 2'},
                {src: '/img/assets/img11.png', alt:'image 2'},
                {src: '/img/assets/img12.png', alt:'image 2'},
                {src: '/img/assets/img14.png', alt:'image 2'},
            ]}/>
            <div className="p-desc">
                <p className="d-text">Endereço: <strong>Rua Octávio Alves de Araujo, Nº 68, Tarraf II – CEP: 15804-255 – Catanduva – SP</strong></p>
                <p className="d-text">Email: <strong></strong>eficientevisual@hotmail.com</p>
                <p className="d-text">Representante: <strong>Heraldo Marcio Galvão (Presidente)</strong></p>
                <p className="d-text">Telefone: <strong>(17) 98165-4034</strong></p>
            </div>
        </div>
    </div>
     </>
    );
  }
  