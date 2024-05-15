import { Carolsel } from "@/components/component/carolsel";
import CardContent2 from "../components/card/cardContent2";
import Presents from "../components/presents";


export default function Projetos() {
    return (
     <>
         <Presents title="PROJETOS" desc="Temos como objetivo oferecer a população em geral, aulas de eletrônica básica com ênfase em hardware (conserto e manutenção de fonte de computador como base de estudo) capacitando tecnicamente e possibilitando a integração de pessoas ao mercado de trabalho." srcImage="/img/bg/bgEletronicos.png"/>
         <div className="info1">
        <div className="p-content1">
            <div className="p-title">
                <p className="t-text">PROJETO DOAÇÃO E FORMAÇÃO</p>
            </div>
            <div className="p-desc">
                <p className="d-text">Temos como objetivo oferecer a população em geral, aulas de eletrônica básica com ênfase em hardware (conserto e manutenção de fonte de computador como base de estudo) capacitando tecnicamente e possibilitando a integração de pessoas ao mercado de trabalho.</p>
            </div>
            <Carolsel images={[
                {src: '/img/img3.jpg', alt:'image 2'},
                {src: '/img/img2.jpg', alt:'image 2'},
                {src: '/img/img1.jpg', alt:'image 2'},
                {src: '/img/img3.jpg', alt:'image 2'},
                {src: '/img/img2.jpg', alt:'image 2'},
                {src: '/img/img1.jpg', alt:'image 2'},
            ]}/>
            <Presents title=" " desc=" " srcImage="../img/img3.jpg"/>
            <div className="p-desc">
                <p className="d-text">Como metodologia, todo aprendizado de eletrônica é baseado na estrutura de funcionamento de uma fonte de alimentação de computador (ATX), onde são abordados o funcionamento de cada componente, suas características, símbolos e aplicações.</p>
            </div>
            <div className="p-desc">
                <p className="d-text">Esse curso tem o objetivo de capacitar os alunos e alunas na manutenção e reparação de computadores de mesa e notebook, assim como também em seus periféricos (teclado, mouse, monitor, impressora, no-break, etc.).</p>
            </div>
            <Presents title=" " desc=" " srcImage="../img/img2.jpg"/>
            <div className="p-desc">
                <p className="d-text">Nosso objetivo também é o de atender outras entidades assistenciais no fornecimento de equipamentos de informática gratuitamente. Além de recolher, recuperar, reciclar e destinar ecologicamente equipamentos de informática, eletrônica, elétricos, telefônicos, etc., visando a redução do impacto ambiental da sucata tecnológica.</p>
            </div>
            <div className="p-desc">
                <p className="d-text">Esse projeto não inclui o deficiente visual de forma direta , ele é apenas beneficiado pelo resultado do projeto que proporcionará o fornecimento de computador e seus periféricos gratuitamente para que ele que possa “ler um livro”, interagir no mundo digital (enviar e receber email, pesquisar na internet entre outras atividades proporcionadas por aplicativos como o DOSVOX, VIRTUAL VISION, JAWS, entre outros).</p>
            </div>
            <div className="video">
            <iframe
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
    <div className="process">
        <h2>Áreas que esse projeto beneficia:</h2>
        <CardContent2 />
      </div>
     </>
    );
  }
  