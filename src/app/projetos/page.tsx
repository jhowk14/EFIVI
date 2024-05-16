import { Carolsel } from "@/components//component/carolsel";
import { Carousel2 } from "@/components/component/carousel2";
import CardContent2 from "../components/card/cardContent2";
import { HeaderCarousel } from "@/components/component/header-carousel";
import { imgsBG } from "@/lib/bgs";

export default function Projetos() {
    return (
     <>
        <HeaderCarousel title="PROJETOS" desc="Temos como objetivo oferecer a população em geral, aulas de eletrônica básica com ênfase em hardware (conserto e manutenção de fonte de computador como base de estudo) capacitando tecnicamente e possibilitando a integração de pessoas ao mercado de trabalho." Images={imgsBG}/>
        <div className="info1">
            <div className="p-content1">
                <div className="p-title">
                    <p className="p-text">PROJETO DOAÇÃO E FORMAÇÃO</p>
                </div>
                <Carousel2 images={[
                    {src: '/img/assets/img5.png', alt:'image 2', descricão: 'Como metodologia, todo aprendizado de eletrônica é baseado na estrutura de funcionamento de uma fonte de alimentação de computador (ATX), onde são abordados o funcionamento de cada componente, suas características, símbolos e aplicações.'},
                    {src: '/img/assets/img1.png', alt:'image 2', descricão: 'Esse curso tem o objetivo de capacitar os alunos e alunas na manutenção e reparação de computadores de mesa e notebook, assim como também em seus periféricos (teclado, mouse, monitor, impressora, no-break, etc.).'},
                    {src: '/img/assets/img15.png', alt:'image 2', descricão: 'Nosso objetivo também é o de atender outras entidades assistenciais no fornecimento de equipamentos de informática gratuitamente. Além de recolher, recuperar, reciclar e destinar ecologicamente equipamentos de informática, eletrônica, elétricos, telefônicos, etc., visando a redução do impacto ambiental da sucata tecnológica.'},
                    {src: '/img/assets/img13.png', alt:'image 2', descricão: 'Esse projeto não inclui o deficiente visual de forma direta , ele é apenas beneficiado pelo resultado do projeto que proporcionará o fornecimento de computador e seus periféricos gratuitamente para que ele que possa “ler um livro”, interagir no mundo digital (enviar e receber email, pesquisar na internet entre outras atividades proporcionadas por aplicativos como o DOSVOX, VIRTUAL VISION, JAWS, entre outros).'},
                ]}/>
                <div className="video">
                    <iframe className="responsive-iframe"
                        width="800"
                        height="500"
                        src="https://www.youtube.com/embed/TNYzY4RHHyk?si=DbiEmZseq4LtrU8U"
                        title="YouTube video player"
                        frameBorder="0" // Corrigido de frameborder para frameBorder
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
        <CardContent2 />
     </>
    );
  }
  